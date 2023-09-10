/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  console.log(head)  
  let prev = null
  let curr = head;
  console.log(curr) 

  while(curr !=null){
    let next = curr.next
    next
    prev
    curr.next = prev
    prev =curr
    curr=next 
  }
  return prev
};

let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

let node1 = new ListNode(1);
node1.next=node2;
node2.next=node3;
node3.next=node4;
reverseList(node1)