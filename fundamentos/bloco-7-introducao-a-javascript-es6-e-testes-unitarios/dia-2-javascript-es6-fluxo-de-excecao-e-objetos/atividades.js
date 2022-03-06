//Throw e Try/Catch

// const verifyIsNumber = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
// };

// const sum = (value1, value2) => {
//   try {
//     verifyIsNumber(value1, value2);
//     return value1 + value2;
//   } catch (error) {
//     throw error.message;
//   }
// };

// console.log(sum(2, '3'));


// ------------------------------


function objetoPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}

console.log(objetoPessoa('Letícia', 26));

const objetoPessoa = (nome, idade) => ({ nome: nome, idade: idade });