// 旋转链表：https://leetcode-cn.com/problems/rotate-list/

// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置

// 思路：把链表连成环，设链表长度len，从头开始移动len - (k % len) 长度，再断开
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
  if (!head || !head.next) return head
  let res = head
  let len = 1
  while (res.next) {
      res = res.next
      len ++
  }
  res.next = head
  res = res.next
  let step = len - (k % len) - 1
  let end = null
  while (step > 0) {
      res = res.next
      step --
  }
  end = res.next
  res.next = null
  return end
};