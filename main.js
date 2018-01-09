const BST = require('./BinarySearchTree')

const bst = new BST()

bst.insert(25)
bst.insert(15)
bst.insert(17)
bst.insert(197)
bst.insert(97)
bst.insert(9997)

console.log('Depth first search: ')
bst.dfs(data => console.log(data))
console.log()
console.log('Breadth first search: ')
bst.bfs(data => console.log(data))
