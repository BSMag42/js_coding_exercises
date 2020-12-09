const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let nextNum = null;
  for (var i = 0; i < nums.length-1; i++) {
    if (nums[i] == n){
      return nextNum = nums[i+1];
    };
  };
  return nextNum;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let countArr = str.split('');
  let count = countArr.reduce((acc, val,) => {
    acc[val] = acc[val] + 1;
    return acc;
  }, {"1":0,"0":0});//need to return a count of zero if none there
  return count;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return Number(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  function sumRecursiveArray(arr) {
    return arr.reduce(function(acc, value) {
      return acc + (Array.isArray(value) ? sumRecursiveArray(value) : value);
    }, 0);
  }  
  return sumRecursiveArray(arrs);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let lastval = arr[arr.length-1];
  arr[arr.length - 1] = arr[0];
  if (arr.length > 1){
    arr[0] = lastval;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (const [key, value] of Object.entries(haystack)) {
    let regexp = new RegExp(searchTerm, 'i');
    if( value.toString().search(regexp) >= 0 ){
      //force to string for search
      return true;
    }
  return false;
  };
}

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  str = str.toLowerCase().replace(/[^a-zA-Z ]/g, "");
  let words = str.split(/\s+/);
  const wordcount = words.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = 1;
      return acc;
    } 
    else {
      acc[val] = acc[val] + 1;
      return acc;
    }
  }, {});
  return wordcount;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
