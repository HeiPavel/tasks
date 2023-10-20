const copyRandomList = (head) => {
    const nodes = [];
    let currentNode = head;
    let i = 0;
    while (currentNode) {
        nodes[i] = new Node(currentNode.val, null, null);
        currentNode.index = i;
        currentNode = currentNode.next;
        i++;
    }
    currentNode = head;
    i = 0;
    const copy = nodes[0] ? nodes[0] : null;
    while (currentNode) {
        nodes[i].next = i + 1 < nodes.length ? nodes[i + 1] : null;
        nodes[i].random = currentNode.random ? nodes[currentNode.random.index] : null;
        currentNode = currentNode.next;
        i++;
    }
    return copy;
};