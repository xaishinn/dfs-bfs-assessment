const chai = require('chai')
const BST = require('../BinarySearchTree')

const should = chai.should()

describe('Binary Search Tree', () => {
	let bst

	beforeEach('inserting numbers into the tree', () => {
			bst = new BST()

			bst.insert(10)
			bst.insert(5)
			bst.insert(15)
			bst.insert(3)
			bst.insert(7)
			bst.insert(6)
			bst.insert(13)
			bst.insert(17)
			bst.insert(16)
			bst.insert(20)
	})

	it('should display dfs in the right order', () => {
		let item = []

		bst.dfs(data => item.push(data))

		item.should.deep.equal([10, 5, 3, 7, 6, 15, 13, 17, 16, 20])
	})

	it('should display bfs in the right order', () => {
		let item = []

		bst.bfs(data => item.push(data))

		item.should.deep.equal([10, 5, 15, 3, 7, 13, 17, 6, 16, 20])
	})
})
