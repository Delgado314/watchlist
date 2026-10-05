// Base de dados curada e verificada de títulos não lançados / anunciados (sem ano)
const UNRELEASED_MOVIES = {
  "Polaris-": {
    "name": "Polaris",
    "director": "Lynne Ramsay",
    "synopsis": "Ambientado no Alasca no final do século XIX, um fotógrafo encontra o diabo na vastidão gelada. Novo projeto da aclamada cineasta Lynne Ramsay estrelado por Joaquin Phoenix e Rooney Mara.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/7/5/7/6/0/3/757603-polaris-1-0-230-0-345-crop.jpg?v=7f7ec9cd7d",
    "cast": [
      "Joaquin Phoenix",
      "Rooney Mara"
    ],
    "status": "Em produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Wizards!-": {
    "name": "Wizards!",
    "director": "David Michôd",
    "synopsis": "Comédia da A24 escrita e dirigida por David Michôd ('The King'). Dois operadores de um bar de praia encontram um saque roubado que desencadeia uma série de problemas caóticos.",
    "poster_path": "",
    "cast": [
      "Pete Davidson",
      "Franz Rogowski",
      "Orlando Bloom",
      "Naomi Scott"
    ],
    "status": "Em produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Ally-": {
    "name": "Ally",
    "director": "Bong Joon Ho",
    "synopsis": "Longa-metragem de animação digital em computação gráfica em desenvolvimento pelo cineasta Bong Joon Ho ('Parasita', 'O Hospedeiro'), focado em criaturas marinhas de águas profundas.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/7/4/4/7/4/4/744744-untitled-bong-joon-ho-animated-film-0-230-0-345-crop.jpg?v=9ae5ae3add",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Highlander-": {
    "name": "Highlander",
    "director": "Chad Stahelski",
    "synopsis": "Reboot da lendária franquia sobre guerreiros imortais que duelam através dos séculos, dirigido pelo criador de 'John Wick', Chad Stahelski, e estrelado por Henry Cavill.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/2/6/9/2/2/4/269224-highlander-1-0-230-0-345-crop.jpg?v=8f16a55e6d",
    "cast": [
      "Henry Cavill"
    ],
    "status": "Em pré-produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Rendezvous with Rama-": {
    "name": "Rendezvous with Rama",
    "director": "Denis Villeneuve",
    "synopsis": "Adaptação da clássica obra-prima de ficção científica de Arthur C. Clarke pelo cineasta Denis Villeneuve ('Duna', 'A Chegada'). Uma equipe de astronautas é enviada para explorar uma gigantesca e silenciosa nave extraterrestre.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/8/2/2/4/0/2/822402-rendezvous-with-rama-0-230-0-345-crop.jpg?v=82e958856c",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Tracy Flick Can't Win-": {
    "name": "Tracy Flick Can't Win",
    "director": "Alexander Payne",
    "synopsis": "Sequência da comédia satírica 'Eleição' (1999). Tracy Flick, agora vice-diretora trabalhadora em uma escola de Nova Jersey, articula uma campanha para suceder o diretor veterano que se aposenta.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/9/5/4/9/7/0/954970-tracy-flick-can-t-win-0-230-0-345-crop.jpg?v=38f2298ee2",
    "cast": [
      "Reese Witherspoon"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Ultra-": {
    "name": "Ultra",
    "director": "A ser anunciado",
    "synopsis": "Adaptação cinematográfica do aclamado podcast investigativo de Rachel Maddow sobre um plano conspiratório de ultradireita nos bastidores do Congresso americano nos anos 1940.",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Way of the Wind-": {
    "name": "The Way of the Wind",
    "director": "Terrence Malick",
    "synopsis": "Épico bíblico e espiritual de Terrence Malick ('A Árvore da Vida') que explora parábolas e momentos marcantes da vida de Jesus Cristo sob diferentes óticas morais.",
    "poster_path": "https://a.ltrbxd.com/resized/alternative-backdrop/5/3/4/5/6/4/tmdb/uzxB1Gph1S51snKVkMQ1eX6qkI9-1200-1200-675-675-crop-000000.jpg?v=99a8c35808",
    "cast": [
      "Géza Röhrig",
      "Mark Rylance",
      "Matthias Schoenaerts",
      "Aidan Turner"
    ],
    "status": "Pós-produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Tiger-": {
    "name": "The Tiger",
    "director": "Myroslav Slaboshpytskyi",
    "synopsis": "Adaptação do best-seller factual de John Vaillant. Nas florestas remotas da Sibéria, um homem lidera a caçada a um tigre ameaçador que começou a retaliar os colonizadores humanos.",
    "poster_path": "",
    "cast": [
      "Alexander Skarsgård",
      "Dane DeHaan"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Cleopatra-": {
    "name": "Cleopatra",
    "director": "Denis Villeneuve",
    "synopsis": "Novo épico biográfico sobre Cleópatra concebido pelo diretor Denis Villeneuve como um drama político realista, implacável e sangrento, focado em sua maestria estratégica como governante.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/8/1/3/0/0/4/813004-cleopatra-2-0-230-0-345-crop.jpg?v=9f0392df08",
    "cast": [
      "Zendaya"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "A Letter from Rose Kennedy-": {
    "name": "A Letter from Rose Kennedy",
    "director": "Sam Gold",
    "synopsis": "Drama comovente que resgata a história de Rosemary Kennedy, primogênita dos Kennedy, examinando a pressão e a tragédia médica ocultadas pela dinastia política.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/9/9/8/3/6/5/998365-a-letter-from-rose-kennedy-0-230-0-345-crop.jpg?v=833f2e1a3d",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Lear Rex-": {
    "name": "Lear Rex",
    "director": "Bernard Rose",
    "synopsis": "Adaptação da tragédia shakesperiana 'Rei Lear'. Um monarca em declínio divide suas terras entre as filhas de acordo com suas declarações de amor, desencadeando conflito e tragédia.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/0/0/7/9/6/7/1007967-lear-rex-0-230-0-345-crop.jpg?v=ee5869a8b1",
    "cast": [
      "Al Pacino",
      "Jessica Chastain",
      "Peter Dinklage",
      "Rachel Brosnahan"
    ],
    "status": "Em produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Governesses-": {
    "name": "The Governesses",
    "director": "Joe Talbot",
    "synopsis": "Produção da A24 dirigida por Joe Talbot ('The Last Black Man in San Francisco'). Três governantas desafiam as convenções sociais e transformam os dias dos moradores de um casarão histórico.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/8/6/2/5/9/9/862599-the-governesses-0-230-0-345-crop.jpg?v=ec44c9d52b",
    "cast": [
      "Lily-Rose Depp",
      "Hoyeon",
      "Renate Reinsve"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Merrily We Roll Along-": {
    "name": "Merrily We Roll Along",
    "director": "Richard Linklater",
    "synopsis": "Ambicioso projeto cinematográfico de Richard Linklater ('Boyhood') filmado ao longo de duas décadas, narrando de trás para frente a ascensão profissional e o desgaste emocional de três amigos em Nova York.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/5/5/5/2/2/8/555228-merrily-we-roll-along-0-230-0-345-crop.jpg?v=cb516c1410",
    "cast": [
      "Paul Mescal",
      "Ben Platt",
      "Beanie Feldstein"
    ],
    "status": "Em filmagem contínua (20 anos)",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Heat 2-": {
    "name": "Heat 2",
    "director": "Michael Mann",
    "synopsis": "Sequência e prólogo de 'Fogo Contra Fogo' (1995) dirigido por Michael Mann, acompanhando os passos de Neil McCauley e Vincent Hanna em Chicago nos anos 80 e na América do Sul no início dos anos 2000.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/0/0/2/8/4/6/1002846-heat-2-0-230-0-345-crop.jpg?v=8455d3663a",
    "cast": [
      "Michael Mann (direção)"
    ],
    "status": "Em pré-produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Memory Police-": {
    "name": "The Memory Police",
    "director": "Reed Morano",
    "synopsis": "Adaptação da obra de Yoko Ogawa roteirizada por Charlie Kaufman. Em uma ilha controlada, conceitos e memórias são sistematicamente apagados pela temida Polícia da Memória.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/6/6/7/1/4/9/667149-the-memory-police-0-230-0-345-crop.jpg?v=4d75eb3abf",
    "cast": [
      "Lily Gladstone"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Untitled Lulu Wang Project-": {
    "name": "Untitled Lulu Wang Project",
    "director": "Lulu Wang",
    "synopsis": "Novo longa-metragem da diretora Lulu Wang ('The Farewell'), inspirado no drama familiar japonês 'Pais e Filhos' de Hirokazu Kore-eda.",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Tower Stories-": {
    "name": "Tower Stories",
    "director": "Peter Greenaway",
    "synopsis": "Um escritor em reflexão sobre o fim da vida busca retiro em uma torre na cidade italiana de Lucca para meditar sobre arte, história e mortalidade.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/5/5/0/5/9/1/550591-tower-stories-0-230-0-345-crop.jpg?v=74f63c321c",
    "cast": [
      "Dustin Hoffman",
      "Helen Hunt"
    ],
    "status": "Em produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Strawweight-": {
    "name": "Strawweight",
    "director": "James M. Johnston",
    "synopsis": "Drama sobre o competitivo mundo do MMA feminino, centrado no embate entre uma veterana em busca de redenção e uma promissora estrela em ascensão.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/1/3/3/0/0/2/1133002-strawweight-0-230-0-345-crop.jpg?v=333068e1c6",
    "cast": [
      "Rose Namajunas"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Semplica Girl Diaries-": {
    "name": "The Semplica Girl Diaries",
    "director": "Richard Ayoade",
    "synopsis": "Adaptação da obra de George Saunders dirigida por Richard Ayoade. Uma crônica satírica sobre uma família de classe média que tenta desesperadamente ascender na hierarquia social.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/9/5/1/2/4/6/951246-the-semplica-girl-diaries-0-230-0-345-crop.jpg?v=f931d871b6",
    "cast": [
      "Jesse Eisenberg"
    ],
    "status": "Em produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Untitled Matthew Vaughn Musical-": {
    "name": "Untitled Matthew Vaughn Musical",
    "director": "Matthew Vaughn",
    "synopsis": "Projeto musical cinematográfico inédito desenvolvido pelo diretor britânico Matthew Vaughn ('Kingsman', 'Kick-Ass').",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Entertainment System Is Down-": {
    "name": "The Entertainment System Is Down",
    "director": "Ruben Östlund",
    "synopsis": "Sátira social claustrofóbica dirigida por Ruben Östlund ('Triângulo da Tristeza'). Em um voo internacional de mais de 15 horas, todas as telas de entretenimento quebram, forçando os passageiros a encararem o tédio e a si mesmos.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/7/8/4/7/3/6/784736-the-entertainment-system-is-down-0-230-0-345-crop.jpg?v=d7eb19cfd9",
    "cast": [
      "Keanu Reeves",
      "Kirsten Dunst",
      "Daniel Brühl",
      "Vincent Lindon"
    ],
    "status": "Em pré-produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Top Gun 3-": {
    "name": "Top Gun 3",
    "director": "A ser anunciado",
    "synopsis": "Terceiro longa-metragem da aclamada franquia de aviação militar de alta octanagem, dando continuidade à história de Pete 'Maverick' Mitchell.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/1/1/8/8/6/2/1118862-top-gun-3-0-230-0-345-crop.jpg?v=e43702581c",
    "cast": [
      "Tom Cruise",
      "Miles Teller",
      "Glen Powell"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Flesh of the Gods-": {
    "name": "Flesh of the Gods",
    "director": "Panos Cosmatos",
    "synopsis": "Thriller sobrenatural estilizado nos anos 1980 pelo visionário Panos Cosmatos ('Mandy'). Um casal sofisticado é arrastado para um submundo sedutor e violento de predadores noturnos.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/1/8/7/7/4/1/1187741-flesh-of-the-gods-0-230-0-345-crop.jpg?v=0322ba79aa",
    "cast": [
      "Kristen Stewart",
      "Oscar Isaac"
    ],
    "status": "Em pré-produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Killing Gawker-": {
    "name": "Killing Gawker",
    "director": "Gus Van Sant",
    "synopsis": "Adaptação do best-seller sobre a histórica batalha jurídica entre o astro da luta livre Hulk Hogan e o controverso portal Gawker Media, com roteiro assinado por Charles Randolph.",
    "poster_path": "",
    "cast": [
      "Ben Affleck",
      "Matt Damon"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Untitled Alexander Payne Western-": {
    "name": "Untitled Alexander Payne Western",
    "director": "Alexander Payne",
    "synopsis": "Faroeste original do diretor Alexander Payne ('Os Rejeitados'), situado em 1886 nas planícies do estado de Nebraska.",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Life Is a Carnival: A Musical Celebration of Robbie Robertson-": {
    "name": "Life Is a Carnival: A Musical Celebration of Robbie Robertson",
    "director": "Martin Scorsese",
    "synopsis": "Registro cinematográfico oficial do concerto estelar em tributo ao cantor, compositor e guitarrista Robbie Robertson (The Band), realizado em Los Angeles em 2024.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/2/6/6/0/4/7/1266047-life-is-a-carnival-a-musical-celebration-of-robbie-robertson-0-230-0-345-crop.jpg?v=d799e46a78",
    "cast": [
      "Eric Clapton",
      "Van Morrison",
      "Mavis Staples"
    ],
    "status": "Pós-produção",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Geni and the Zeppelin-": {
    "name": "Geni and the Zeppelin",
    "director": "Anna Muylaert",
    "synopsis": "Adaptação cinematográfica brasileira da canção clássica 'Geni e o Zepelim' da Ópera do Malandro de Chico Buarque, dirigida por Anna Muylaert ('Que Horas Ela Volta?').",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Checkmate-": {
    "name": "Checkmate",
    "director": "Nathan Fielder",
    "synopsis": "Filme sobre o rumoroso e bizarro escândalo de trapaça que chocou o xadrez internacional envolvendo o grande mestre Magnus Carlsen e Hans Niemann.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/1/8/8/0/5/3/1188053-checkmate-1-0-230-0-345-crop.jpg?v=b4b2cb5d29",
    "cast": [
      "Nathan Fielder",
      "Emma Stone (produtora)"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Untitled Trey Parker / Matt Stone / Kendrick Lamar Comedy-": {
    "name": "Untitled Trey Parker / Matt Stone / Kendrick Lamar Comedy",
    "director": "Trey Parker",
    "synopsis": "Comédia de ação ao vivo em desenvolvimento para a Paramount, escrita pelos criadores de 'South Park' Trey Parker e Matt Stone em colaboração inédita com Kendrick Lamar.",
    "poster_path": "",
    "cast": [
      "Kendrick Lamar"
    ],
    "status": "Anunciado para 2026",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Thing That Hurts-": {
    "name": "The Thing That Hurts",
    "director": "Arnaud Desplechin",
    "synopsis": "Drama psicológico de Arnaud Desplechin sobre pacientes que convergem em Paris após o falecimento de seu psiquiatra norte-americano.",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Rancho Mirage-": {
    "name": "Rancho Mirage",
    "director": "Karsten Runquist",
    "synopsis": "Um homem de idade avançada que enfrenta os primeiros estágios da perda de memória escapa da supervisão para tentar reencontrar a companheira de sua vida.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/3/0/0/3/6/1330036-rancho-mirage-0-230-0-345-crop.jpg?v=bfece2d26f",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Here Comes the Flood-": {
    "name": "Here Comes the Flood",
    "director": "Fernando Meirelles",
    "synopsis": "Filme de roubo de alta tensão dirigido pelo cineasta brasileiro Fernando Meirelles ('Cidade de Deus', 'Dois Papas'). Três golpistas disputam o controle de um plano arriscado.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/6/2/8/0/7/6/628076-here-comes-the-flood-0-230-0-345-crop.jpg?v=2e633d937a",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Later the War-": {
    "name": "Later the War",
    "director": "Charlie Kaufman",
    "synopsis": "Um comediante e cineasta famoso por papéis cômicos de destruição física enfrenta uma crise de despersonalização surreal após testemunhar uma crise internacional.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/4/0/0/2/3/1340023-later-the-war-0-230-0-345-crop.jpg?v=525dbf367e",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Sacrifice-": {
    "name": "Sacrifice",
    "director": "Damien Chazelle",
    "synopsis": "Novo drama dirigido por Damien Chazelle ('Babilônia', 'Whiplash'). Nos anos 1940, o diretor de uma prisão implacável trava um duelo de vontades contra um prisioneiro rebelde.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/4/1/6/6/4/1341664-sacrifice-1-0-230-0-345-crop.jpg?v=1308892695",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Peasant-": {
    "name": "The Peasant",
    "director": "Dev Patel",
    "synopsis": "Conto medieval de ação violenta e vingança concebido e estrelado por Dev Patel ('Fúria Primitiva'). Um simples camponês do século XIV ergue-se contra mercenários brutais.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/4/4/6/1/5/1344615-the-peasant-0-230-0-345-crop.jpg?v=f7adba23ea",
    "cast": [
      "Dev Patel"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Cuddle-": {
    "name": "Cuddle",
    "director": "Bárbara Paz",
    "synopsis": "Drama existencial sobre um homem que trabalha como profissional de abraços, provendo afeto platônico a solitários em uma metrópole indiferente.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/4/8/2/6/9/1348269-cuddle-0-230-0-345-crop.jpg?v=fe0458df8a",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Deep Cuts-": {
    "name": "Deep Cuts",
    "director": "Sean Durkin",
    "synopsis": "Romance intimista de Sean Durkin ('Garra de Ferro') focado na conexão apaixonada e volátil entre dois jovens que compartilham uma obsessão profunda por discos raros.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/1/2/4/2/9/1312429-deep-cuts-0-230-0-345-crop.jpg?v=e2254bb3f1",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Untitled Paul Dano Comedy Film-": {
    "name": "Untitled Paul Dano Comedy Film",
    "director": "Paul Dano",
    "synopsis": "Comédia inteligente de alto conceito em preparação pelo ator e diretor Paul Dano ('Vida Selvagem').",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "A Tree Is Blue-": {
    "name": "A Tree Is Blue",
    "director": "Dakota Johnson",
    "synopsis": "Estreia de Dakota Johnson na direção. Uma jovem no espectro do autismo inicia uma jornada para desbravar o mundo com autonomia.",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Mamma Mia! 3-": {
    "name": "Mamma Mia! 3",
    "director": "A ser anunciado",
    "synopsis": "Terceiro capítulo da franquia musical de comédia romântica nas ilhas gregas ao som das faixas lendárias do grupo ABBA.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/2/2/8/0/2/7/1228027-mamma-mia-3-0-230-0-345-crop.jpg?v=33f6a6cba4",
    "cast": [
      "Amanda Seyfried",
      "Meryl Streep"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "What Happens at Night-": {
    "name": "What Happens at Night",
    "director": "Martin Scorsese",
    "synopsis": "Adaptação do romance de mistério de Peter Cameron pelo mestre Martin Scorsese. Um casal viaja para um hotel enigmático e gélido no norte europeu para formalizar uma adoção misteriosa.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/8/9/8/3/1/2/898312-what-happens-at-night-0-230-0-345-crop.jpg?v=3ce1366113",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Grown Ups 3-": {
    "name": "Grown Ups 3",
    "director": "Kyle Newacheck",
    "synopsis": "Projeto de reunião do elenco de comediantes de 'Gente Grande'. Os velhos amigos e suas famílias fazem uma viagem internacional à Europa.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/7/1/4/2/8/1371428-grown-ups-3-0-230-0-345-crop.jpg?v=a16f2bfa4e",
    "cast": [
      "Adam Sandler",
      "Kevin James",
      "Chris Rock",
      "David Spade"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Housekeeper-": {
    "name": "The Housekeeper",
    "director": "Richard Eyre",
    "synopsis": "Nas paisagens remotas da Cornualha, tensões e segredos familiares vêm à tona em uma grande propriedade rural.",
    "poster_path": "",
    "cast": [
      "Uma Thurman"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Riders-": {
    "name": "The Riders",
    "director": "Edward Berger",
    "synopsis": "Adaptação do romance de Tim Winton por Edward Berger ('Cônclave', 'Nada de Novo no Front'). Um homem viaja pela Europa com a filha em busca da esposa misteriosamente sumida.",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Cut Off-": {
    "name": "Cut Off",
    "director": "Jonah Hill",
    "synopsis": "Comédia ácida dirigida por Jonah Hill. Dois irmãos ricos e acostumados a regalias são cortados financeiramente pelos pais e se veem desamparados no mundo real.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/3/0/0/9/5/1330095-cut-off-0-230-0-345-crop.jpg?v=1d977469ca",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Somewhere Out There-": {
    "name": "Somewhere Out There",
    "director": "Alexander Payne",
    "synopsis": "Na Dinamarca provincial, os laços e confidências entre dois amigos de infância são postos em xeque por eventos inesperados.",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Cry to Heaven-": {
    "name": "Cry to Heaven",
    "director": "Tom Ford",
    "synopsis": "Adaptação suntuosa da novela barroca de Anne Rice sobre o universo competitivo e dramático da ópera e dos castrati na Itália do século XVIII.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/2/9/3/8/5/8/1293858-cry-to-heaven-0-230-0-345-crop.jpg?v=04d9c490a6",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Three Incestuous Sisters-": {
    "name": "Three Incestuous Sisters",
    "director": "Alice Rohrwacher",
    "synopsis": "Adaptação poética da graphic novel de Audrey Niffenegger pela diretora Alice Rohrwacher ('La Chimera'), sobre a ligação simbiótica entre três irmãs isoladas pelo mar.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/0/6/7/1/4/1/1067141-three-incestuous-sisters-0-230-0-345-crop.jpg?v=d3ebbc8e16",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Last of the Tribe-": {
    "name": "The Last of the Tribe",
    "director": "Claudio Borrelli",
    "synopsis": "Inspirado no livro de Monte Reel sobre o último sobrevivente indígena do povo Tanaru na floresta amazônica ('O Índio do Buraco') e a luta de ativistas para salvaguardá-lo de fazendeiros armados.",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Chaperones-": {
    "name": "The Chaperones",
    "director": "India Donaldson",
    "synopsis": "Comédia de amadurecimento dirigida por India Donaldson ('Good One'). Três amigos jovens e despreocupados aceitam a tarefa de guiar uma adolescente através do país.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/6/5/0/0/2/1365002-the-chaperones-0-230-0-345-crop.jpg?v=e1f7dcfb25",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Jack of Spades-": {
    "name": "Jack of Spades",
    "director": "Joel Coen",
    "synopsis": "Novo thriller de suspense e investigação noir em desenvolvimento escrito e dirigido por Joel Coen ('Fargo', 'A Tragédia de Macbeth').",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/4/7/8/2/4/1347824-jack-of-spades-0-230-0-345-crop.jpg?v=06d5cb0865",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "System of Colors-": {
    "name": "System of Colors",
    "director": "Stephen Cone",
    "synopsis": "Drama intimista autoral de Stephen Cone ('Princess Cyd') que examina descobertas juvenis, vocação artística e laços afetivos.",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "The Species-": {
    "name": "The Species",
    "director": "Justin Chadwick",
    "synopsis": "Drama biográfico sobre Emma Darwin, esposa e defensora incansável do célebre naturalista britânico Charles Darwin, confrontando suas próprias convicções íntimas.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/3/7/0/0/6/7/1370067-the-species-0-230-0-345-crop.jpg?v=fc7c7162b7",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "American Psycho-": {
    "name": "American Psycho",
    "director": "Luca Guadagnino",
    "synopsis": "Nova adaptação contemporânea do perturbador romance de Bret Easton Ellis para a Lionsgate, sob a visão do cineasta italiano Luca Guadagnino ('Rivais', 'Me Chame Pelo Seu Nome'). Um retrato inédito da obsessão, status e loucura na era digital.",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/1/3/3/6/9/2/1133692-american-psycho-1-0-230-0-345-crop.jpg?v=409a6f06b8",
    "cast": [
      "Direção: Luca Guadagnino"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Untitled James Bond Film-": {
    "name": "Untitled James Bond Film",
    "director": "Denis Villeneuve",
    "synopsis": "O 26º filme oficial da saga James Bond 007, que reiniciará a clássica franquia de espionagem do MI6 após a era de Daniel Craig.",
    "poster_path": "",
    "cast": [],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  },
  "Death Stranding-": {
    "name": "Death Stranding",
    "director": "Michael Sarnoski",
    "synopsis": "Adaptação cinematográfica live-action do universo sci-fi pós-apocalíptico de Hideo Kojima, desenvolvida em colaboração direta com a produtora A24 e dirigida por Michael Sarnoski ('Um Lugar Silencioso: Dia Um').",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/9/5/1/5/9/2/951592-death-stranding-0-230-0-345-crop.jpg?v=46e9a60738",
    "cast": [
      "Hideo Kojima (produtor)"
    ],
    "status": "Em desenvolvimento",
    "providers": [],
    "type": "movie",
    "is_unreleased": true,
    "creditsFetched": true
  }
};
