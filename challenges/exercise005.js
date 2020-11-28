const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
    if (n === undefined) throw new Error("n is required");

    let nextNum = null;
    for (var i = 0; i < nums.length-1; i++) {
        if (nums[i] == n)
            return nextNum = nums[i+1];
    }
    return nextNum;
};



const count1sand0s = str => {
    if (str === undefined) throw new Error("str is required");
    const countOccurrences = [{ '1': 0, '0': 0 }];

};

const reverseNumber = n => {
    if (n === undefined) throw new Error("n is required");
    return Number(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
    if (arr === undefined) throw new Error("arr is required");
    var lastval = arr[arr.length-1];
    arr[arr.length - 1] = arr[0];
    if (arr.length > 1)
        arr[0] = lastval;
    return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
