// Encontrar as expressoes

function contarPalavras() {
  // Obter o valor do campo de texto e da palavra a ser contada
  const codigo = document.getElementById('codigo').value;
  let palavrasCodigo = codigo.split('\n');
  console.log(palavrasCodigo);
  var contEscreva = 0;
  var contLeia = 0;
  var contEscreval = 0;

  for (let i = 0; i < palavrasCodigo.length; i++) {
    const str = palavrasCodigo[i];
    if (str.match('escreva')) {
      contEscreva++;
    }

    if (str.match('escreval')) {
      contEscreval++;
    }

    if (str.match('leia')) {
      contLeia++;
    }
    printPalavras(contEscreva, contEscreval, contLeia);
  }
}

function printPalavras(contEscreva, contEscreval, contLeia) {
  document.getElementById(
    'contador',
  ).innerHTML = `<p> Escreva: ${contEscreva} <br>
         Escreval: ${contEscreval} <br>
         Leia: ${contLeia} <br>
  </p>`;
}

function limpacontador() {
  document.getElementById('contador').innerHTML = '';
}
