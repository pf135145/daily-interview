// 删除链表中的节点：https://leetcode-cn.com/problems/delete-node-in-a-linked-list/

// 思路：把当前节点替换成下一个节点（替换val，和next指针）

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};