class Node {
  constructor(value) {
    this.value = value
    this.edges = []
    this.time = Infinity
    this.index = null
  }
}

class Edge {
  constructor(end, time) {
    this.end = end
    this.time = time
  }
}

class MinHeapTime {
  constructor() {
    this.heap = []
  }

  add(node) {
    node.index = this.heap.length
    this.heap.push(node)
    this.bubleup()
  }

  bubleup(currentIndex = this.heap.length - 1) {
    let parrent = this.getParent(currentIndex)

    while(currentIndex > 0 && this.heap[currentIndex].time < this.heap[parrent].time) {
      this.swap(currentIndex, parrent)

      currentIndex = parrent
      parrent = this.getParent(currentIndex)
    }
  }

  popMin() {
    if (this.heap.length === 0) return

    this.swap(0, this.heap.length - 1)
    const node = this.heap.pop()
    this.heapify()

    return node
  }

  heapify() {
    let currentIndex = 0, left = this.getLeft(currentIndex), right = this.getRight(currentIndex)

    while(this.canSwap(currentIndex, left, right)) {
      if (!this.exists(right) || this.heap[left].time < this.heap[right].time) {
        this.swap(currentIndex, left)
        currentIndex = left
      } else {
        this.swap(currentIndex, right)
        currentIndex = right
      }

      left = this.getLeft(currentIndex)
      right = this.getRight(currentIndex)
    }
  }

  canSwap(index, left, right) {
    return this.exists(left) && this.heap[index].time > this.heap[left].time ||
      this.exists(right) && this.heap[index].time > this.heap[right].time
  }

  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]]

    this.heap[x].index = x
    this.heap[y].index = y
  }

  getLeft(index) {
    return index * 2 + 1
  }

  getRight(index) {
    return index * 2 + 2
  }

  getParent(index) {
    return Math.floor((index - 1) / 2)
  }

  exists(index) {
    return index < this.heap.length
  }
}

var networkDelayTime = function(times, n, k) {
  const graph = new Map(), heap = new MinHeapTime(), visited = new Set()
  let minTime = -Infinity

  for (const [start, end, time] of times) {
    const startNode = graph.has(start) ? graph.get(start) : new Node(start)
    const endNode = graph.has(end) ? graph.get(end) : new Node(end)

    if (!graph.has(start)) graph.set(start, startNode)
    if (!graph.has(end)) graph.set(end, endNode)

    if (start === k && heap.heap.length === 0) {
      startNode.time = 0
      heap.add(startNode)
    }

    startNode.edges.push(new Edge(end, time))
  }

  while(heap.heap.length) {
    const node = heap.popMin()
    node.index = null

    if (!visited.has(node.value)) visited.add(node.value)

    for (const {end, time} of node.edges) {
      const newTime = node.time + time
      const endNode = graph.get(end)

      if (newTime < endNode.time) {
        endNode.time = newTime
        endNode.index !== null ? heap.bubleup(endNode.index) : heap.add(endNode)
      }
    }
  }

  if (visited.size < n) return -1

  for (const {time} of graph.values()) {
    minTime = Math.max(minTime, time)
  }

  return minTime
}