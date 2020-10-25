let obj = {};
let map = new Map();
let key = {
  name: 'Darren',
};
let set = new Set();
obj[key] = 'objVal';
map.set(key, 'mapVal');
set.add(1);
console.log(obj);
console.log([...map]);
console.log(set);
