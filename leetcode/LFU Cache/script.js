class QueueNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.currentStackNode = null
    this.prev = null
    this.next = null
  }

  updateValue(value) {
    this.value = value
  }
}

class LeastQueue {
  constructor(queueNode) {
    this.head = queueNode
    this.tail = queueNode
  }

  addToTail(queueNode) {
    this.tail.next = queueNode
    queueNode.prev = this.tail
    this.tail = queueNode
  }

  removeQueueHead() {
    const {key} = this.head
    const prevHead = this.head

    this.head = this.head.next
    this.head ? this.head.prev = null : this.tail = null
    prevHead.next = null

    return key
  }

  removeQueueNode(queueNode) {
    if (queueNode === this.head) {
      this.removeQueueHead()
    } else {
      const prevNode = queueNode.prev, nextNode = queueNode.next
      queueNode.prev = null
      queueNode.next = null
      if (nextNode) {
        nextNode.prev = prevNode
      } else {
        this.tail = prevNode
      }
      prevNode.next = nextNode
    }
  }
}

class StackNode {
  constructor(counter, queueNode) {
    this.counter = counter
    this.queue = new LeastQueue(queueNode)
    this.prev = null
    this.next = null
  }
}

class Stack {
  constructor() {
    this.head = null
  }

  addToHead(stackNode) {
    if (this.head) this.head.prev = stackNode
    stackNode.next = this.head
    this.head = stackNode
  }

  removeStackNode(stackNode) {
    const prevNode = stackNode.prev
    if (!prevNode) {
      this.head = stackNode.next
      if (this.head) this.head.prev = null
    } else {
      prevNode.next = stackNode.next
      if (stackNode.next) stackNode.next.prev = prevNode
      stackNode.prev = null
    }
    stackNode.next = null
  }

  insertStackNode(stackNode, queueNode) {
    const nextCounter = stackNode.counter + 1
    const nextStackNode = stackNode.next?.counter === nextCounter ? stackNode.next : new StackNode(nextCounter, queueNode)
    
    if (nextStackNode === stackNode.next) {
      nextStackNode.queue.addToTail(queueNode)
    } else {
      const nextNode = stackNode.next

      stackNode.next = nextStackNode
      nextStackNode.prev = stackNode
      nextStackNode.next = nextNode
      if (nextNode) nextNode.prev = nextStackNode
    }

    queueNode.currentStackNode = nextStackNode
  }

  moveQueueNode(stackNode, queueNode) {
    const nextCounter = stackNode.counter + 1, nextStackNode = stackNode.next

    if (stackNode.queue.head === stackNode.queue.tail) {
      if (nextStackNode?.counter !== nextCounter) {
        stackNode.counter++
      } else {
        stackNode.queue.removeQueueHead()
        this.removeStackNode(stackNode)
        nextStackNode.queue.addToTail(queueNode)
        queueNode.currentStackNode = nextStackNode
      }
    } else {
      stackNode.queue.removeQueueNode(queueNode)
      this.insertStackNode(stackNode, queueNode)
    }
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.currentCapacity = 0
    this.cache = new Map()
    this.stack = new Stack()
  }

  get(key) {
    const node = this.cache.get(key)
    if (!node) return -1
    const stackNode = node.currentStackNode
    this.stack.moveQueueNode(stackNode, node)
    return node.value
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const queueNode = this.cache.get(key)
      queueNode.updateValue(value)
      const stackNode = queueNode.currentStackNode
      this.stack.moveQueueNode(stackNode, queueNode)
    } else {
      const newQueueNode = new QueueNode(key, value)

      if (this.currentCapacity === this.capacity) {
        const keyToDelete = this.stack.head.queue.removeQueueHead()
        if (!this.stack.head.queue.head) this.stack.removeStackNode(this.stack.head)
        this.cache.delete(keyToDelete)
      } else this.currentCapacity++

      this.cache.set(key, newQueueNode)

      if (this.stack.head?.counter === 1) {
        this.stack.head.queue.addToTail(newQueueNode)
      } else {
        const stackNode = new StackNode(1, newQueueNode)
        this.stack.addToHead(stackNode)
      }

      newQueueNode.currentStackNode = this.stack.head
    }
  }
}