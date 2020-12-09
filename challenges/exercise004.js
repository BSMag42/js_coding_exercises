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
  const cityArr = users.map((val) => {
    return val.data.city.displayName;
  });
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
  let regexp = new RegExp(str, 'i');
  const matchArr = sentences.filter((val) => {
      return regexp.test(val);
  });
  return matchArr; 
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longsideArr = triangles.map((val) => {
      return Math.max(...val);
  });
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
