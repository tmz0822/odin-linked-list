import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node();
    node.value = value;

    if (this.size === 0) {
      // If list is empty
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }

    this.size += 1;
  }

  prepend(value) {
    const node = new Node();
    node.value = value;

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }

    this.size += 1;
  }

  at(index) {
    if (index === 0) {
      return this.head;
    } else if (index === this.size - 1) {
      return this.tail;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.nextNode;
        i++;
      }
      return current;
    }
  }

  pop() {
    this.at(this.size - 2).nextNode = null;
    this.size -= 1;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      index += 1;
      current = current.nextNode;
    }
    return null;
  }

  insertAt(value, index) {
    if (index > this.size - 1) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size - 1) {
      this.append(value);
    } else {
      let current = this.head;
      const node = new Node();
      node.value = value;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      node.nextNode = current.nextNode;
      current.nextNode = node;
    }
  }

  removeAt(index) {
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.nextNode;
    }
    let current = prev.nextNode;
    prev.nextNode = current.nextNode;
    current = null;
    this.size -= 1;
  }

  toString() {
    let str = '';
    let current = this.head;
    while (current != null) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    str += 'null';
    return str;
  }
}
