/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
    let res = [];
    let node1 = l1;
    let node2 = l2;
    let ex = 0;
    while (node1 || node2) {
        const n1 = node1.val ? node1.val : 0;
        const n2 = node2.val ? node2.val : 0;
        let sum = n1 + n2 + ex;
        if (sum >= 10) {
            sum -= 10;
            if (!ex) ex++;
        } else {
            ex = 0;
        }
        res.push(sum);
        node1 = node1 ? node1.next : null;
        node2 = node2 ? node2.next : null;
    }
    if (ex) res.push(ex);
    const addNode = (array) => {
        if (!array.length) return null;
        const n1 = array.shift();
        const next = addNode(array);
        return new ListNode(n1, next);
    }
    return addNode(res);
}