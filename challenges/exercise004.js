function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
    var lessThanOne = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 1)
            lessThanOne.push(nums[i]);
    }
    return lessThanOne;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");
    
    var matchArr = [];
    for (var i = 0; i < names.length; i++) {
        if (names[i].charAt(0) == char)
            matchArr.push(names[i]);
    }
    return matchArr;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

    var verbArr = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].includes("to "))
            verbArr.push(words[i]);
    }
    return verbArr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
    var intArr = [];
    for (var i = 0; i < nums.length; i++) {
        if (Number.isInteger(nums[i]))
            intArr.push(nums[i]);
    }
    return intArr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
    var cityArr = [];
    for (var i = 0; i < users.length; i++) {
        cityArr.push(users[i].data.city.displayName);
    }
    return cityArr;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

    var sqrRootArr = [];
    for (var i = 0; i < nums.length; i++) {
        sqrRootArr.push(Math.sqrt(nums[i]));
    }
    return sqrRootArr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
