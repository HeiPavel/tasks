const isValidBST = (root) => {
    let res = true;
    let value = -Infinity;
    const traversal = (tree) => {
        if (!res) {
            res = false;
            return;
        }
        if (tree && tree.left) traversal(tree.left);
        if (tree.val <= value) {
            res = false;
            return;
        }
        value = tree.val;
        if (tree && tree.right) traversal(tree.right);
    }
    traversal(root);
    return res;
};