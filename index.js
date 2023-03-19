// Encontrar as expressoes

function contarPalavras() {
  // Obter o valor do campo de texto e da palavra a ser contada
  const codigo = document.getElementById("codigo").value;
  let palavrasCodigo = codigo.split(" ");
  console.log(palavrasCodigo);
  var contEscreva = 0;
  var contLeia = 0;
  var contEscreval = 0;

  for (let i = 0; i < palavrasCodigo.length; i++) {
    if (palavrasCodigo[i] == "Escreva") {
      contEscreva++;
    }

    if (palavrasCodigo[i] == "Escreval") {
      contEscreval++;
    }

    if (palavrasCodigo[i] == "leia") {
      contLeia++;
    }
    printPalavras(contEscreva, contEscreval, contLeia);
  }
}

function printPalavras(contEscreva, contEscreval, contLeia) {
  document.getElementById("contador").innerHTML =
    `<p> Escreva: ${contEscreva} <br>
       Escreval: ${contEscreval} <br>
       Leia: ${contLeia} <br>
  </p>`;
}

function limpacontador() {
  document.getElementById('contador').innerHTML = '';
}