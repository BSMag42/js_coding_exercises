function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

    const lessThanOne = nums.filter((val) => {
        return val < 1;
    });

    return lessThanOne;
}


function findNamesBeginningWith(names, char) {

    if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");

    const matchArr = names.filter((val) => {
        return val.charAt(0) == char;
    });

    return matchArr;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
    const verbArr = words.filter((val) => {
        return val.includes("to ");
    });
    return verbArr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

    const intArr = nums.filter((val) => {
        return Number.isInteger(val);
    });
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

    const sqrRootArr = nums.map((val) => {
        return Number(Math.sqrt(val).toFixed(2));
    });

    return sqrRootArr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
    var regexp = new RegExp(str, 'i');
    var matchArr = [];
    for (var i = 0; i < sentences.length; i++) 
        if (regexp.test(sentences[i])) {
            matchArr.push(sentences[i]);        
    }
    return matchArr; 
}

function getLongestSides(triangles) {
    if (!triangles) throw new Error("triangles is required");
    var longsideArr = [];
    var maxValue = 0;
    for (var i = 0; i < triangles.length; i++) {
        maxValue = Math.max(...triangles[i]);
        longsideArr.push(maxValue);
    }
    return longsideArr;
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
