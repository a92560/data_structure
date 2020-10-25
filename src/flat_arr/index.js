function flatArr(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatArr(next) : next);
  }, [])
}

function flatArr1(arr) {
  let ret = [];
  arr.forEach(it => {
    if (Array.isArray(it)) {
      ret = ret.concat(flatArr1(it))
    } else {
      ret.push(it);
    }
  })
  return ret;
}



console.log(flatArr1([1, [3, 4], [4, [5, [6, 7]]]]))
