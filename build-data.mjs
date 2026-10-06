// Uso: TMDB_TOKEN=seu_token node scripts/build-data.mjs [--force]
// Roda SÓ no seu computador. Lê watchlist.csv, consulta o TMDB, baixa os pôsteres
// para assets/posters/ e grava data/movies.json. O site público nunca vê a chave.
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import vm from 'node:vm';

const TOKEN = process.env.TMDB_TOKEN;
if (!TOKEN) { console.error('Defina TMDB_TOKEN (token v4 "Bearer" ou chave v3).'); process.exit(1); }
const FORCE = process.argv.includes('--force');
const API = 'https://api.themoviedb.org/3', IMG = 'https://image.tmdb.org/t/p';
const WEEK = 7 * 864e5;

const EXCLUDE = /looke|mubi|oldflix|belas|filmicca|paramount.*premium|artiflix|artfify|artify|claro|crunchyro|univer|gospel|sun nxt|amazon video|kocowa|mercado play|imovision|imovisión|docalliance|bloodstream|cultpix|adrenalina|amazon channel|apple tv channel/i;
const RENAME = { 'Paramount Plus': 'Paramount+', 'Net Movies': 'NetMovies' };
const cleanProvider = n => { n = n.trim().replace(/ (with Ads|Standard with Ads)$/i, ''); return RENAME[n] || n; };

const get = async path => {
  const v3 = TOKEN.length <= 50;
  const url = `${API}${path}${v3 ? (path.includes('?') ? '&' : '?') + 'api_key=' + TOKEN : ''}`;
  const r = await fetch(url, { headers: v3 ? {} : { Authorization: `Bearer ${TOKEN}` } });
  if (!r.ok) throw new Error(`TMDB ${r.status} em ${path.split('?')[0]}`);
  return r.json();
};

function parseCSV(text) {
  const rows = []; let row = [], v = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { v += '"'; i++; } else q = false; } else v += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(v); v = ''; }
    else if (c === '\n') { row.push(v.replace(/\r$/, '')); rows.push(row); row = []; v = ''; }
    else v += c;
  }
  if (v || row.length) { row.push(v); rows.push(row); }
  const h = rows[0].map(x => x.trim());
  return rows.slice(1).filter(r => r[h.indexOf('Name')]).map(r => ({
    name: r[h.indexOf('Name')], year: parseInt(r[h.indexOf('Year')]) || null, added: (r[h.indexOf('Date')] || '').slice(0, 10) || null,
  }));
}

const slug = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const exists = p => access(p).then(() => true, () => false);

async function savePoster(src, file) {
  if (!src) return null;
  const dest = `assets/posters/${file}.jpg`;
  if (await exists(dest)) return dest;
  const url = src.startsWith('http') ? src : `${IMG}/w500${src}`;
  const r = await fetch(url);
  if (!r.ok) return null;
  await writeFile(dest, Buffer.from(await r.arrayBuffer()));
  return dest;
}

async function lookup(m) {
  let type = 'movie', item = (await get(`/search/movie?query=${encodeURIComponent(m.name)}&language=pt-BR${m.year ? '&year=' + m.year : ''}`)).results?.[0];
  if (!m.year && item?.release_date && +item.release_date.slice(0, 4) < 2025) item = null; // evita casar sem-ano com clássico
  if (!item) { type = 'tv'; item = (await get(`/search/tv?query=${encodeURIComponent(m.name)}&language=pt-BR${m.year ? '&first_air_date_year=' + m.year : ''}`)).results?.[0]; }
  if (!item) return null;
  const lang = item.original_language || 'en';
  const d = await get(`/${type}/${item.id}?append_to_response=watch/providers,images,credits&language=pt-BR&include_image_language=${lang},null`);
  const br = d['watch/providers']?.results?.BR || {};
  const providers = [...new Set([...(br.flatrate || []), ...(br.ads || []), ...(br.free || [])].map(p => cleanProvider(p.provider_name)).filter(n => !EXCLUDE.test(n)))];
  const director = type === 'tv' ? (d.created_by || []).map(p => p.name).join(', ')
    : (d.credits?.crew || []).filter(p => p.job === 'Director').map(p => p.name).join(', ');
  const poster = d.images?.posters?.find(p => p.iso_639_1 === lang)?.file_path || d.poster_path;
  const genres = (d.genres || []).map(g => g.name);
  const runtime = d.runtime || 0;
  const kind = type === 'tv' ? 'Séries' : runtime && runtime <= 45 ? 'Curtas' : genres.some(g => /document/i.test(g)) ? 'Documentários' : 'Filmes';
  return { tmdb: item.id, type: kind, poster, director, runtime, genres, providers, overview: d.overview || '' };
}

await mkdir('assets/posters', { recursive: true }); await mkdir('data', { recursive: true });
const csv = parseCSV(await readFile('watchlist.csv', 'utf8'));
const old = (await exists('data/movies.json')) ? JSON.parse(await readFile('data/movies.json', 'utf8')).items : [];
const oldBy = Object.fromEntries(old.map(o => [o.id, o]));
let unreleased = {};
if (await exists('unreleased_movies.js')) unreleased = vm.runInNewContext((await readFile('unreleased_movies.js', 'utf8')).replace(/\bconst\b/g, 'var') + ';typeof UNRELEASED_MOVIES!=="undefined"?UNRELEASED_MOVIES:{}');

const items = []; let n = 0;
for (const m of csv) {
  const key = `${m.name}-${m.year || ''}`, id = slug(key), prev = oldBy[id];
  n++;
  if (prev && !FORCE && Date.now() - prev.synced < WEEK) { items.push(prev); continue; }
  try {
    const u = unreleased[key];
    const data = u
      ? { type: 'Filmes', poster: u.poster_path, director: u.director || '', runtime: 0, genres: u.genres || [], providers: [], overview: u.overview || '', status: u.status || 'Em desenvolvimento' }
      : await lookup(m);
    if (!data) { console.warn(`[${n}/${csv.length}] não encontrado: ${m.name}`); items.push(prev || { id, name: m.name, year: m.year, added: m.added, type: 'Filmes', genres: [], providers: [], synced: Date.now() }); continue; }
    const local = await savePoster(data.poster, id);
    const arrived = prev && !prev.providers?.length && data.providers.length ? Date.now() : prev?.arrived || 0;
    items.push({ id, name: m.name, year: m.year, added: m.added, ...data, poster: local, posterRemote: data.poster && !data.poster.startsWith('http') ? `${IMG}/w500${data.poster}` : data.poster || null, arrived, synced: Date.now() });
    console.log(`[${n}/${csv.length}] ${m.name}`);
  } catch (e) { console.warn(`[${n}/${csv.length}] falhou: ${m.name} (${e.message})`); if (prev) items.push(prev); }
  await new Promise(r => setTimeout(r, 120));
}
await writeFile('data/movies.json', JSON.stringify({ updated: new Date().toISOString(), items }, null, 1));
console.log(`\nPronto: ${items.length} títulos em data/movies.json`);
