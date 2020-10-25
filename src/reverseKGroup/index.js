var reverseKGroup = function(head, k) {
  // write code here
  // 1->2->3->4->5->6 head=1;tail=3;
  // cur=head;prev=tail.next=null;
  // 3->2->1->4->5->6
  const reverse = (head, tail) => {
    let cur = head;
    let prev = tail.next;
    while (prev !== tail) {
      debugger;
      const nex = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nex;
    }
    return [tail, head];
  }

  let hair = new ListNode(0);
  hair.next = head;
  let cur = hair;
  while (head) {
    let tail = cur;
    for (let i = 0; i < k; i ++) {
      tail = tail.next;
      if (!tail) {
        return hair.next;
      }
    }
    // 1->2->3 => 3->2->1 head=3;tail=1;
    [head, tail] = reverse(head, tail);
    //
    // debugger;
    const nex = tail.next;
    cur.next = head;
    tail.next = nex;
    cur = tail;
    head = tail.next;
  }
  return hair.next;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

const it1 = new ListNode(1);
const it2 = new ListNode(2);
it1.next = it2;
const it3 = new ListNode(3);
it2.next = it3;
const it4 = new ListNode(4);
it3.next = it4;
const it5 = new ListNode(5);
it4.next = it5;
const it6 = new ListNode(6);
it5.next = it6;
// console.log(it1);
console.log(reverseKGroup(it1, 3));
