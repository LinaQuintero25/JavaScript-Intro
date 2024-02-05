var a = 1;
let b = 2;
const c = 3;
function testScope() {
var a = 4;
let b = 5;
const c = 6;
console.log('Dentro de la función', a, b, c);
}
testScope();
console.log('Fuera de la función', a, b, c);

testScope();
console.log('Fuera de la función', a, b, c);