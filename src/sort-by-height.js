function sortByHeight(arr) {
  arr=arr.sort(function(a,b){
    // if(a===b) return 2;
    if (a===-1 && b===-1) return 0;
    // if(a===-1) return 0;
    if(a>b) return 2;
    if(b>a) return -1;
  })
  return arr;
}

module.exports = {
  sortByHeight,
};
