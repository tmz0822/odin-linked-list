import LinkedList from './linkedlist.js';

const list = new LinkedList();

list.prepend('first');
list.append('dog');
list.append('cat');
list.append('parrot');
list.prepend('hamster');

console.log(list.toString());
console.log(list.contains('parrot'));
console.log(list.pop());
console.log(list.contains('parrot'));
console.log(list.toString());

console.log(list.contains('cat'));
console.log(list.find('null'));
list.insertAt('test', 2);
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());
