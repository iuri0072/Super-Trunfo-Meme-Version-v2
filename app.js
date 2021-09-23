console.clear();
var cartas = [
  {
    nome: "Trollface",
    imagem:
      "https://a-static.mlcdn.com.br/1500x1500/adesivo-80x65cm-troll-face-meme-ref-ade3000-nebula-decor/nebuladecor/0f86159a966e11eb97884201ac1850e0/db4f65b7577f1eb31e35f17ae2095973.jpg",
    atributos: {
      Ano: 2008,
      Popularidade: 9,
      Graça: 2
    }
  },

  {
    nome: "Neil deGrasse Tyson",
    imagem:
      "http://img2.timeinc.net/people/i/2014/sandbox/news/140324/neil-degrasse-tyson/meme-600x450.jpg",
    atributos: {
      Ano: 2011,
      Popularidade: 7,
      Graça: 3
    }
  },

  {
    nome: "Esquilo Dramático",
    imagem: "https://i.ytimg.com/vi/LfUOJx4_FdE/hqdefault.jpg",
    atributos: {
      Ano: 2011,
      Popularidade: 9,
      Graça: 6
    }
  },

  {
    nome: "Doge",
    imagem: "https://t2.tudocdn.net/308573?w=550&h=550",
    atributos: {
      Ano: 2010,
      Popularidade: 10,
      Graça: 4
    }
  },

  {
    nome: "Para Nossa Alegria!",
    imagem:
      "https://rollingstone.uol.com.br/media/_versions/para-nossa-a-alegria-foto-reproducao_widelg.jpg",
    atributos: {
      Ano: 2012,
      Popularidade: 6,
      Graça: 8
    }
  },

  {
    nome: "Chloe sincera",
    imagem: "https://img.estadao.com.br/resources/jpg/0/0/1473958086200.jpg",
    atributos: {
      Ano: 2013,
      Popularidade: 4,
      Graça: 5
    }
  },

  {
    nome: "Rolezeiras",
    imagem:
      "data:image/jpeg;base64,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",
    atributos: {
      Ano: 2014,
      Popularidade: 7,
      Graça: 9
    }
  },

  {
    nome: "Geovanna do Forninho",
    imagem:
      "https://static.vix.com/pt/sites/default/files/g/giovanna-forninho-video-0517-1400x800.jpg",
    atributos: {
      Ano: 2013,
      Popularidade: 5,
      Graça: 8
    }
  },

  {
    nome: "Lhe falta Leptospirose",
    imagem: "https://pbs.twimg.com/media/EAg6DuIXsAA4-U5.jpg",
    atributos: {
      Ano: 2019,
      Popularidade: 3,
      Graça: 9
    }
  },

  {
    nome: "Nazaré confusa",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/c/cd/Nazar%C3%A9_Confusa.jpg",
    atributos: {
      Ano: 2016,
      Popularidade: 10,
      Graça: 6
    }
  },

  {
    nome: "He-Man What's going on",
    imagem: "https://i.ytimg.com/vi/rOU4yN_9KhE/hqdefault.jpg",
    atributos: {
      Ano: 2010,
      Popularidade: 5,
      Graça: 9
    }
  },

  {
    nome: "Khaby Lame",
    imagem:
      "https://i1.wp.com/surgiu.com.br/wp-content/uploads/2021/05/khaby-lame-caras-e-bocas.jpg?fit=800%2C794&ssl=1",
    atributos: {
      Ano: 2020,
      Popularidade: 8,
      Graça: 3
    }
  },

  {
    nome: "Faustão Feliz x Faustão Triste",
    imagem:
      "https://cdn.mensagenscomamor.com/content/images/m000532516.jpg?v=2&w=1200&h=987",
    atributos: {
      Ano: 2017,
      Popularidade: 8,
      Graça: 4
    }
  }
];

var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  //exibirOpcoes();
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class = 'resultado-final'>Você Venceu!</p>";
  } else if (
    cartaMaquina.atributos[atributoSelecionado] >
    cartaJogador.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class = 'resultado-final'>Você Perdeu!</p>";
  } else {
    htmlResultado = "<p class = 'resultado-final'>Empate</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id = 'opcoes' class = 'carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type = 'radio' name = 'atributo' value = '" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id = 'opcoes' class = 'carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type = 'text' name = 'atributo' value = '" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }

  var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
