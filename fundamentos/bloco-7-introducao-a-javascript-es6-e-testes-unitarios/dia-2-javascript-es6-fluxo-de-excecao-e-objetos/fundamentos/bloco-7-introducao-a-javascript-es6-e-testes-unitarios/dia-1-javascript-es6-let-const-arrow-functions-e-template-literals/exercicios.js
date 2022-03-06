//PARTE I

//1. ✅Altere a função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escopo) => ((escopo === true) ? `Não devo ser utilizada fora do meu escopo (if)` : (`Não devo ser utilizada fora meu escopo (else)`));

console.log(testingScope(false));

//-------------------------------------------
// 💡 meu teste de apendizado

// const meuTeste = (palavra) => ((palavra === 'amora') ? 'delicia' : 'que pena');

// console.log(meuTeste('amort'));

//-------------------------------------------

// 2. ✅Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

const ordemCrescente = (array) => array.sort((a, b) => a - b);

console.log(ordemCrescente(oddsAndEvens));

//-------------------------------------------
//-------------------------------------------
// PARTE II

// 1.  Crie uma função que receba um número e retorne seu fatorial.
// dizem que tem como fazer esse em uma linha!

const fatorial = (numero) => {
  let resultado = numero;
  let proximoNumero = (resultado - 1);

  for (let index = 0; index < numero; index += 1) {
    if (proximoNumero > 1) {

      resultado = resultado * proximoNumero;
      proximoNumero -= 1;
    }

  }
  return resultado;
}

console.log(fatorial(7));

//2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = (palavra) => {
  let array = palavra.split(' ')

  let maiorPalavra = '';
  let tamanhoMaiorPalavra = 0;
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    (tamanhoMaiorPalavra < element.length) ? maiorPalavra = element : maiorPalavra = maiorPalavra;
  }
  return maiorPalavra;
}

let palavra = 'Antônio foi no banheiro e não sabemos o que aconteceu';

console.log(maiorPalavra(palavra));


// 3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

// const botao = document.getElementById('botao');
// const paragrafo = document.getElementById('paragrafo');

// let clickCount = 0;
// const funcaoClickCount = () => {
//   clickCount += 1;
//   paragrafo.innerText = clickCount;
// }

// botao.addEventListener('click', funcaoClickCount)

// 4.1 Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

// function criaFrase(palavra)



const mainSkills = ['html', 'css', 'JavaScript', 'DOM', 'GitHub'];

function fraseComplexa(parametro) {

  const criaFrase = (palavra) => (`Tryber ${palavra} aqui! Tudo firmeza?`);
  let result = (criaFrase(parametro));

  const myMainSkills = mainSkills.sort().toString().replace(/,/g, ', ');
  // que orgulho dessa linha gigante mas que funciona


  return `${result} Minhas cinco principais habilidades são ${myMainSkills}  #goTrybe`;

}

console.log(fraseComplexa('é'));