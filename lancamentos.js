// Faça o exercício da GALERIA de IMAGENS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

// caminho para onde as imagens estão hospedadas
const servidorDasImagens = "lançamentos/",
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    "whatifs3_lob_crd_01.jpg",

    "yourfriendlyneighborhoodspiderman_lob_crd_02.jpg",

    "daredevilbornagain_lob_crd_02.jpg",
    "captainamericabravenewworld_lob_crd_03.jpg",
    "thunderbolts_lob_crd_03.jpg",
    "ironheart_lob_crd_03.jpg",
    "thefantasticfourfirststeps_lob_crd_02.jpg",
    "marvelzombies_lob_crd_01.jpg",
    "wonderman_lob_crd_01.jpg",
    "blade_lob_crd_01.jpg",
    "avengersdoomsday_lob_crd_01.jpg",
    "avengerssecretwars_lob_crd_02.jpg",
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: '01-philae-parts.jpg')
let indiceDaFotoAtual = 0;

// ...COMECE a implementar aqui <--------------------------------------------

const slideEl = document.querySelector("#slide");
const proximoEl = document.querySelector("#proximo");
const anteriorEl = document.querySelector("#anterior");

function atualizaImagem(incremento) {
  if (incremento == 1) {
    if (indiceDaFotoAtual == 11) {
      indiceDaFotoAtual = -1;
    }
    indiceDaFotoAtual++;
  } else {
    if (indiceDaFotoAtual == 0) {
      indiceDaFotoAtual = 12;
    }
    indiceDaFotoAtual--;
  }
  slideEl.setAttribute(
    "src",
    servidorDasImagens + nomesDasImagens[indiceDaFotoAtual]
  );
}

proximoEl.addEventListener("click", function () {
  atualizaImagem(1);
});

anteriorEl.addEventListener("click", function () {
  atualizaImagem(-1);
});
