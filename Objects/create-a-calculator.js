let calculator = {
  read() {
  	this.a = Number(prompt('Value 1'))
    this.b = Number(prompt('Value 2'))
  },
  sum() {
  	return this.a + this.b
  },
  mul() {
  	return this.a * this.b
  }
  
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())