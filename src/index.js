
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
	let newMatrix = matrix.map((item, index) => {
		if (index % 2 !== 0) {
			item.reverse();
		}
		return item;
	})
	return newMatrix.flat();
}
