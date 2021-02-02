let arranjo = [1, 2, 3, 4, 5, 6, 7];
let arranjo2 = [[1, [[2, [3, [4, 5, 6]]], 7]]];
let funcoes = ['filter', 'forEach', 'flatMap', 'flat', 'map', 'toString', 'join', 'split', 'splice', 'slice', 'shift', 'unshift', 'pop', 'push', 'fill', 'concat', 'find', 'indexOf', 'every', 'some', 'includes', 'keys or Object.keys', 'hasOwnProperty'];

let randomico = Math.random().toString(36);

console.log(randomico.substring(2));

let item1 = arranjo.filter(c => c % 2 === 0);

console.log(item1);

let item2 = arranjo.forEach(function(c){
    if(c % 2 === 0){
        
    }
});
let item3 = arranjo2.flat(Infinity);
let item4 = arranjo.flatMap( c => [c * 3]);

console.log(item4);

let item5 = arranjo.toString().split("3").join("3");

console.log(item5);

let item6 = arranjo.fill(1,2,6);

console.log(item6);

let item7 = arranjo.find(c => c % 2 ===0);

console.log(item7);

let item8 = arranjo.indexOf(7);

console.log(item8);

let item9 = arranjo.every(c => c % 2 === 0 );

console.log(item9);

let item10 = arranjo.some(c => c % 2 === 0);

console.log(item10);

let item11 = arranjo.includes(2);

console.log(item11);

let arranjo3 = ['a','3', 'c', '3'];

let item12 = Object.keys(arranjo3);

console.log(item12);

let objeto = [{
    'nome': 'feliz',
    'idade': 9900,
    'correr': 'rápido',
    nadar: 'sei, mas preciso praticar'
}, {
    'nome': 'persistir',
    'idade': 99999,
    'correr': ' bem rápido',
    nadar: 'sei, mas preciso praticar, mesmo que eu seja bom, continuo praticando'
}]

console.log(objeto[1]. nadar);
