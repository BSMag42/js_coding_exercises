function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");

    var squareArray = [];
    for (i = 0; i < nums.length; i++) {
        squareArray.push(nums[i] * nums[i])
    }
    return squareArray;
}

function camelCaseWords(words) {
    if (words === undefined) throw new Error("words is required");
    var camelCase = "";
    for (i = 0; i < words.length; i++) {
        if (i == 0) {
            camelCase += words[0]
        }
        else {
            camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    return camelCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

    var count = 0;
    for (i = 0; i < people.length; i++) {
        for (j = 0; j < people[i].subjects.length; j++) {
            count += 1;
        }
    }
    return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
