//return null when out of index or given null input
//have two pointer, one is n step ahead of the other, 
//if we got null, reutrn null
//then move the two together until the faster pointer hit the end

function th_from_end(head, n) {
  var pointer1 = head;
  var pointer2 = head;
  if (head === null) {
    return null;
  }
  for (var i = 0; i < n; i++) {
    if (pointer2.next !== null) {
      pointer2 = pointer2.next;
    } else {
      return null;
    }
  }
  while (pointer2.next !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
}