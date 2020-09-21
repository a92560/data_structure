// class A {
//
// }
//
// const a = new A();
// // console.dir(a)
//
// class B extends A {
//   constructor() {
//     super();
//     // console.log(this);
//   }
// }
//
//
//
// const b = new B();
// // console.dir(b)
//
// debugger;
//
// function Child(name, age) {
//   Parent.call(this, name);
//   this.age = age;
// }
//
// function Parent(name) {
//   this.name = name;
// }
//
// Parent.prototype = Object.create(Parent.prototype);
// Parent.prototype.constructor = Parent;
//
// const child = new Child('Darren2', 18);
// const parent = new Parent('Darren1');
//
// console.dir(child);
// console.dir(parent);
function MyArray() {
  Array.call(this);
}

MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true
  }
});

// MyArray.__proto__ = Array;

var colors = new MyArray();
// debugger;
colors[0] = "red";
colors.push('green');
colors.push('blue');
colors[0] = 'skyblue';
console.log(colors.length);

// var arr = new Array();
// arr[0] = 'red';
// debugger;
// console.log(arr.length);
class MyArray1 extends Array {
  constructor() {
    super();
  }
}

var arr = new MyArray1();
arr[0] = 12;
arr.push('green');
debugger;
arr.length;


