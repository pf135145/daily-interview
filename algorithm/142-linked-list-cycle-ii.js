// 环形链表：https://leetcode-cn.com/problems/linked-list-cycle-ii/

// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 思路：使用快慢指针，若链表有环，两个指针必定相遇，此时起点再放一个慢指针，
// 两个慢指针相对移动，相交点必定是入环点

/**
 * Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

/**
* @param {ListNode} head
* @return {ListNode}
*/
var detectCycle = function(head) {
   if (!head || !head.next) return null
   let fast = head
   let slow = head;
   while (fast && slow) {
       if (fast.next) {
           fast = fast.next.next
           slow = slow.next
       } else {
           return null
       }
       if (fast === slow) {
           break
       }
   }
   if (!fast) return null
   let newHead = head;
   while (newHead !== slow) {
       newHead = newHead.next
       slow = slow.next
   }
   return newHead
};