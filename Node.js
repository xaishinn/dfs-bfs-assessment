class Node {
	constructor(data=null) {
		this.data = data
		this.left = null
		this.right = null
	}

	get show() {
		return this.data
	}
}

module.exports = Node
