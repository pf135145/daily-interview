// 合并两个有序链表：https://leetcode-cn.com/problems/merge-two-sorted-lists/

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 思路：创建一个初始头节点和一个当前节点，当前节点不断指向两个链表中较小的节点，依次更新链表（迭代）

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  let head = new ListNode(-1)
  let cur = head
  while (list1 && list2) {
      if (list1.val >= list2.val) {
          cur.next = list2
          list2 = list2.next
      } else {
          cur.next = list1
          list1 = list1.next
      }
      cur = cur.next
  }
  if (list1) {
      cur.next = list1
  }
  if (list2) {
      cur.next = list2
  }
  return head.next
}