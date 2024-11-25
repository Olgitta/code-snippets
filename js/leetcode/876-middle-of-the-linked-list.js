/**
 * https://leetcode.com/problems/middle-of-the-linked-list/description/
 *
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
var middleNode = function(head) {
    var slow = new ListNode(-1, head);
    var fast = new ListNode(-1, head);

    while(fast != null) {

        fast = fast?.next?.next;
        slow = slow.next;

    }

    return slow;
};