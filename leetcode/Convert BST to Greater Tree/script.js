const convertBST = (root) => {
  let sum = 0

  const traversal = (node) => {
    if (node.right) traversal(node.right)
      sum += node.val
      node.val = sum
    if (node.left) traversal(node.left)
    
  }

  traversal(root)

  return root
}