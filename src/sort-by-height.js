const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  arr=arr.sort(function(a,b){
    if(a===b) return 0;
    if(a===-1) return 0;
    if(a>b) return 1;
    if(b>a) return -1;
  })
  return arr;
}

module.exports = {
  sortByHeight,
};

console.log([-1, 150, 190, 170, -1, -1, 160, 180])

