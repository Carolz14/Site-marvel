
const servidorDasImagens = "lançamentos/",

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

let indiceDaFotoAtual = 0;



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
