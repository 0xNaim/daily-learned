// doubly linked list node class
class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

// Double linked list
class DoubleLinkedList {
  length = 0;
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length++;
  }

  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }
}

let list = new DoubleLinkedList(10);
list.append(20);
console.log(list);
