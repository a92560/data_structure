let str = '100000000';

str = str.replace(/\B(?=(?:(\d{3})+$))/g, function(...args) {
  debugger;
  console.log(`,${args[1]}`);
  // return 1;
  return ',';
});
console.log(str);
