// We have an array of strings arr. 
// We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted(arr)

function copySorted(arr) {
	return arr.concat().sort()
  // return arr.slice().sort() // other solution
}

console.log(sorted)
// CSS, HTML, JavaScript
console.log(arr)
// HTML, JavaScript, CSS (no changes)
