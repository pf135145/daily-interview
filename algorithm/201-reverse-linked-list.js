// 反转链表：https://leetcode-cn.com/problems/reverse-linked-list/

// 思路：把当前节点next存下来，用上一个替换

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let pre = null
  let next = null
  while (head) {
    if (head.next) {
      next = head.next
      head.next = pre
      pre = head
      head = next
    } else {
      break
    }
  }
  return head
};