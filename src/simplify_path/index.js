/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  if (!path) {
    return path;
  }
  debugger;
  const pathList = path.split('/').filter(it => it);
  const ret = [];
  const len = pathList.length;
  for (let i = 0; i < len; i ++) {
    if (pathList[i] === '.') {
      continue;
    } else if (pathList[i] === '..') {
      ret.pop()
    } else {
      ret.push(pathList[i])
    }
  }
  return `/${ret.join('/')}`
};

simplifyPath('/home/');
