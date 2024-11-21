class Node {
    constructor(value) {
      this.value = value
      this.index = null
      this.isInMaxHeap = null
    }
  }
  
  class Heap {
    constructor(maxLength, isMaxHeap) {
      this.heap = []
      this.maxLength = maxLength
      this.isMaxHeap = isMaxHeap
    }
  
    add(node) {
      node.index = this.heap.length
      node.isInMaxHeap = this.isMaxHeap
      this.heap.push(node)
      this.bubbleUp(this.heap.length - 1)
    }
  
    popHead() {
      if (!this.heap.length) return
      this.swap(0, this.heap.length - 1)
      const node = this.heap.pop()
      this.heapify()
      return node
    }
  
    popNode(index) {
      const nodeToRemove = this.heap[index]
      const head = this.popHead()
      this.heapify()
      head.index = nodeToRemove.index
      this.heap[head.index] = head
      this.bubbleUp(head.index)
      return nodeToRemove
    }
  
    swap(x, y) {
      [this.heap[x], this.heap[y], this.heap[x].index, this.heap[y].index] = [this.heap[y], this.heap[x], x, y]
    }
  
    getParrent(index) {
      return Math.floor((index - 1) / 2)
    }
  
    getLeft(index) {
      return index * 2 + 1
    }
  
    getRight(index) {
      return index * 2 + 2
    }
  
    exists(index) {
      return index <= this.heap.length - 1
    }
  
    getHead() {
      return this.heap.length ? this.heap[0].value : Infinity
    }
  }
  
  class MinHeap extends Heap {
    constructor(maxLength, isMaxHeap) {
      super(maxLength, isMaxHeap)
    }
  
    bubbleUp(currentIndex) {
      let parrentIndex = this.getParrent(currentIndex)
      while(currentIndex > 0 && this.heap[currentIndex].value < this.heap[parrentIndex].value) {
          this.swap(currentIndex, parrentIndex)
          currentIndex = parrentIndex
          parrentIndex = this.getParrent(currentIndex)
      }
    }
  
    heapify() {
      let currentIndex = 0, leftChild = this.getLeft(currentIndex), rightChild = this.getRight(currentIndex)
      while(this.canSwap(currentIndex, leftChild, rightChild)) {
        if (!this.exists(rightChild) || this.heap[leftChild].value < this.heap[rightChild].value) {
          this.swap(currentIndex, leftChild)
          currentIndex = leftChild
        } else {
          this.swap(currentIndex, rightChild)
          currentIndex = rightChild
        }
        leftChild = this.getLeft(currentIndex)
        rightChild = this.getRight(currentIndex)
      }
    }
  
    canSwap(currentIndex, leftChild, rightChild) {
      return this.exists(leftChild) && this.heap[currentIndex].value > this.heap[leftChild].value || 
        this.exists(rightChild) && this.heap[currentIndex].value > this.heap[rightChild].value
    }
  }
  
  class MaxHeap extends Heap {
    constructor(maxLength, isMaxHeap) {
      super(maxLength, isMaxHeap)
    }
  
    bubbleUp(currentIndex) {
      let parrentIndex = this.getParrent(currentIndex)
      while(currentIndex > 0 && this.heap[currentIndex].value > this.heap[parrentIndex].value) {
          this.swap(currentIndex, parrentIndex)
          currentIndex = parrentIndex
          parrentIndex = this.getParrent(currentIndex)
      }
    }
  
    heapify() {
      let currentIndex = 0, leftChild = this.getLeft(currentIndex), rightChild = this.getRight(currentIndex)
      while(this.canSwap(currentIndex, leftChild, rightChild)) {
        if (!this.exists(rightChild) || this.heap[leftChild].value > this.heap[rightChild].value) {
          this.swap(currentIndex, leftChild)
          currentIndex = leftChild
        } else {
          this.swap(currentIndex, rightChild)
          currentIndex = rightChild
        }
        leftChild = this.getLeft(currentIndex)
        rightChild = this.getRight(currentIndex)
      }
    }
  
    canSwap(currentIndex, leftChild, rightChild) {
      return this.exists(leftChild) && this.heap[currentIndex].value < this.heap[leftChild].value || 
        this.exists(rightChild) && this.heap[currentIndex].value < this.heap[rightChild].value
    }
  }
  
var medianSlidingWindow = function(nums, k) {
  const maxHeap = new MaxHeap(Math.ceil(k / 2), true)
  const minHeap = new MinHeap(k - maxHeap.maxLength, false)
  
  for (let i = 0; i < k; i++) {
    const node = new Node(nums[i])
    minHeap.add(node)
    nums[i] = node
  }
  
  let j = maxHeap.maxLength
  while (j > 0) {
    maxHeap.add(minHeap.popHead())
    j--
  }
  
  let median = k % 2 === 0 ? (maxHeap.getHead() + minHeap.getHead()) / 2 : maxHeap.getHead(), left = 0
  
  for (let right = k; right < nums.length; right++) {
    const {isInMaxHeap, index} = nums[left]
    nums[left] = median
    const node = new Node(nums[right])
    nums[right] = node
  
    isInMaxHeap ? index > 0 ? maxHeap.popNode(index) : maxHeap.popHead() : index > 0 ? minHeap.popNode(index) : minHeap.popHead()
  
    maxHeap.add(node)
  
    if (maxHeap.heap.length > maxHeap.maxLength) {
      minHeap.add(maxHeap.popHead())
    } else if (maxHeap.getHead() > minHeap.getHead()) {
      const rightMid = minHeap.popHead()
      minHeap.add(maxHeap.popHead())
      maxHeap.add(rightMid)
    }
  
    median = k % 2 === 0 ? (maxHeap.getHead() + minHeap.getHead()) / 2 : maxHeap.getHead()
    left++
  }
    
  nums[left] = median
  
  return nums.slice(0, left + 1)
}