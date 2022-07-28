const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };

console.log(object2.b);

const object3 = { a, b, c };

console.log(object3.a);

let i = 0
let a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
}

console.log(a.foo1) // 1
console.log(a.foo2) // 2
console.log(a.foo3) // 3

const items = ["A","B","C"];
const obj = {
[items]: "Hello"
}
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]) // "Hello"

let param = 'size'
let config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}

console.log(config) // {size: 12, mobileSize: 4}