class Queue {
	constructor() {
		this.queue = []
	}

	enqueue(item) {
		this.queue.push(item)
	}

	dequeue() {
		return this.queue.shift()
	}

	get size() {
		return this.queue.length
	}

	get isEmpty() {
		return this.queue.length === 0
	}
}

module.exports = Queue
