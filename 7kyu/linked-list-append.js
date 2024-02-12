// function Node(data) {
//   this.data = data;
//   this.next = null;
// }

// function append(a, b) {
//   if (!a) return b;
//   a.next = append(a.next, b);
//   return a;
// }

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (!listA) return listB;
  if (!listB) return listA;
  var node = listA;
  while (node.next !== null) node = node.next;
  node.next = listB;
  return listA;
}
