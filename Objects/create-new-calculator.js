// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.

// sum() returns the sum of these properties.

// mul() returns the multiplication product of these properties.

function Calculator() {
	this.read = function() {
  	this.a = +prompt('a value ?')
    this.b = +prompt('b value ?')
  }
  this.sum = function() {
  	return this.a + this.b
  }
  this.mul = function() {
  	return this.a * this.b
  }
}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );