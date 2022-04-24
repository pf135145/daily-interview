//  排序链表：https://leetcode-cn.com/problems/sort-list/

// 思路：使用归并排序思想，把两个链表分成两部分，对每一部分再分，直到分成一个节点，然后排序链表（合并有序链表）

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
  if (!head || !head.next) return head
  return sort(head)
};

function sort(head) {
  if (!head || !head.next) return head
  let fast = head
  let slow = head
  while (fast) {
      if (fast.next && fast.next.next) {
          fast = fast.next.next
          slow = slow.next
      } else {
          break
      }
  }
  let head2 = slow.next
  slow.next = null
  return merge(sort(head), sort(head2))
}

function merge(list1, list2) {
  let start = pre = new ListNode(-1)
  while (list1 && list2) {
      if (list1.val >= list2.val) {
          pre.next = list2
          list2 = list2.next
      } else {
          pre.next = list1
          list1 = list1.next
      }
      pre = pre.next
  }
  if (list1) {
      pre.next = list1
  } 
  if (list2) {
      pre.next = list2
  }
  return start.next
}