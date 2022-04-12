// 环形链表：https://leetcode-cn.com/problems/linked-list-cycle/

// 思路：如果链表存在环，设置两个快慢指针，两个指针一定相交

var hasCycle = function(head) {
  if (!head || !head.next) return false
  let slow = head
  let fast = head.next
  while (fast) {
    if (slow == fast) return true 
    if (fast.next) {
      fast = fast.next.next
      slow = slow.next
    } else {
      return false
    }
  }
  return false
};