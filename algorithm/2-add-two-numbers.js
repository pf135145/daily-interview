// 两数相加：https://leetcode-cn.com/problems/add-two-numbers/

// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，
// 并且每个节点只能存储 一位 数字。

// 思路：循环两个链表，把两个链表的值相加，保存是否进位，注意加完后最后一位是否要新增

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let progress = false
  let res = head = new ListNode(-1)
  while (l1 || l2) {
      let num1 = l1 ? l1.val : 0
      let num2 = l2 ? l2.val : 0
      let sum = num1 + num2
      if (progress) sum += 1
      let temp = new ListNode(sum % 10)
      res.next = temp
      progress = sum >= 10 ? true : false
      l1 = l1 ? l1.next : null
      l2 = l2 ? l2.next : null
      res = res.next
  }
  if (progress) {
      res.next = new ListNode(1)
  }
  return head.next
};