// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

//Multiple runs of shuffle may lead to different orders of elements.

let arr = [1, 2, 3];

function shuffle(arr) {
	return arr.sort(() => Math.random() - 0.5)
}

console.log(shuffle(arr))
// arr = [3, 2, 1]

console.log(shuffle(arr))
// arr = [2, 1, 3]

console.log(shuffle(arr))
// arr = [3, 1, 2]