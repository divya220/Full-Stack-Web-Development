var x;
let y;
const z = 30;
function testScope() {
x = 10;
y = 20;
}
testScope();
console.log("x =",x);
console.log("y =",y);
console.log("z =",z);