// ✅ 1. Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const returObject = (nomeCompleto) => {
  const lowerName = nomeCompleto.toLowerCase();
  const completeName = { nomeCompleto, email: `${lowerName.replace(' ', '_')}@trybe.com` };
  return completeName
};

const newEmployees = () => {
  const employees = {
    id1: returObject('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: returObject('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: returObject('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees());


// ✅ 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const random = () => {
  return randonNumber = Math.floor(Math.random() * (6 - 1)) + 1

}

const equality = (one, two) => {
  if (one === two) {
    return 'Tente novamente';
  }
  return 'Parabéns você ganhou';
}

const sortition = (apostateNamber) => {
  return equality(apostateNamber, random());

}

// console.log(sortition(2));

// ✅ 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (right, student) => {
  let count = 0;
  for (let index = 0; index < right.length; index += 1) {
    if (right[index] === student[index]) {
      count += 1;
    } else if (student[index] === 'N.A') {
      count += 0;
    } else {
      count -= 0.5;
    }
  }
  return `o resultado final foi de ${count}`;

}

const exameResult = (templet, answer, checkFunction) => {
  return checkFunction(templet, answer);
}

console.log(exameResult(RIGHT_ANSWERS, STUDENT_ANSWERS, check))

