const findDuplicateSubtrees = (root) => {
  const map = new Map(), res = []

  const traversal = (node) => {
    if (!node) return 'n'

    const keyLeft = traversal(node.left)
    const keyRight = traversal(node.right)

    const key = `${node.val},${keyLeft},${keyRight}`

    if (map.has(key)) {
      const repeated = map.get(key)
      if (repeated === 1) {
        res.push(node)
        map.set(key, 2)
      }
    } else map.set(key, 1)

    return key
  }

  traversal(root)

  return res
}