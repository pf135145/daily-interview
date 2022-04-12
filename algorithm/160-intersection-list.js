// 相交链表：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/submissions/

// 思路：假设存在相交点，listA到相交点的长度为a，listB到相交点的长度为b，相交点后的长度为c，则a+c+b = b+c+a

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  let copyA = headA
  let copyB = headB
  let aFinish = true
  let bFinish = true
  while (copyA && copyB) {
    if (copyA == copyB) return copyA
    if (!copyA.next && aFinish) {
      copyA = headB
      aFinish = false
    } else {
      copyA = copyA.next
    }
    if (!copyB.next && bFinish) {
      copyB = headA
      bFinish = false
    } else {
      copyB = copyB.next
    }
  }
  return null
};