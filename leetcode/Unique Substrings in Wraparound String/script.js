class Node {
    constructor(key) {
      this.key = key
      this.maxLength = 0
      this.next = null
    }
}
  
class CycledLinkedList {
    constructor() {
      this.head = null
      this.tail = null
    }
  
    addToTail(node) {
      if (!this.head) {
        this.head = node
        this.tail = node
      } else {
        this.tail.next = node
        this.tail = node
        if (node.key === 'z') this.tail.next = this.head
      }
    }
}
  
var findSubstringInWraproundString = function(s) {
    const list = new CycledLinkedList(), map = new Map()
    new Array(26).fill(0).forEach((_, i) => {
      const key = String.fromCharCode(i + 97), node = new Node(key)
      list.addToTail(node)
      map.set(key, node)
    })
    let nextNode = map.get(s[0]), length = 0, res = 0
    
    for (const char of s) {
      if (char === nextNode.key) {
        length++
      } else {
        nextNode = map.get(char)
        length = 1
      }
      nextNode.maxLength = Math.max(length, nextNode.maxLength)
      nextNode = nextNode.next
    }
    
    let i = 26, node = list.head
  
    while(i > 0) {
      res += node.maxLength
      node = node.next
      i--
    }
  
    return res
}  