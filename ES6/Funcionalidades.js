

function teste(x, y) {
  return x + y;
}

dicio = [
  {
    nome: 'adilson',
    idade: 23,
  },
  { nome: 'Joseph',
  idade: 38 },
  
  { nome: 'Eliza',
  idade: 38 },
];

console.log(dicio[0], dicio[1], dicio[2]);

console.log({ valor_da_soma_foi: teste(4, 4) });

function soma(a) {
  return function (b) {
    return a + b;
  };
}

const soma2 = soma(3);

console.log(soma2(7));


function RetornarDicio(user){
  return {
    ...user
  }
}

console.log(RetornarDicio(dicio[0]))


function IdadeMaiorQue38(dicios){
  return dicios.filter(nomes => nomes.idade >= 38);
}

console.log(IdadeMaiorQue38(dicio));

