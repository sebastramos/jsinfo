// Is it possible to create functions A and B so that new A() == new B()?
let obj = {}

function A() {return obj}

function B() {return obj}

let a = new A();
let b = new B()

console.log( new A == new B ); // true

// If it is, then provide an example of their code.