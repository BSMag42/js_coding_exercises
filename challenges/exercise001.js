function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.charAt(0).toUpperCase() + word.slice(1);    
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
    return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();    
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

    var vat = (vatRate + 100) / 100;
    var totalPrice = originalPrice * vat;
    if (Number.isInteger(totalPrice))
        return totalPrice;
    else
        return parseFloat(totalPrice.toFixed(2));
 }

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

    var salePrice = originalPrice- ((originalPrice * reduction)/100);

    return checkIfRoundNeeded(salePrice, 2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

    var startpos;
    var numofchar;
    //even
    if (str.length % 2 == 1){
        startpos = str.length / 2;
        numofchar = 1;
    }
    else{
        startpos = str.length / 2 - 1;
        numofchar = 2;
    }

    return str.substring(startpos, startpos + numofchar)
}

function reverseWord(word) {
    if (word === undefined) throw new Error("word is required");
    var reversed = "";
    for (var i = word.length - 1; i >= 0; i--){
        reversed += word[i];
    }
    return reversed;
}

function reverseAllWords(words) {
    if (words === undefined) throw new Error("words is required");
    var revArray = [];
    var revWord = "";
    for (var i = 0; i < words.length; i++) {
        revWord = reverseWord(words[i])
        revArray.push(revWord);
    }
    return revArray;
}

function countLinuxUsers(users) {
    if (users === undefined) throw new Error("users is required");

    var count = 0;
    for (var i = 0; i < users.length; i++) {
        if (users[i].type == "Linux")
            count += 1;
    }
    return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

    var total = 0;
    var average = 0;
    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    average = total / scores.length;

    return checkIfRoundNeeded(average, 2);
}

function checkIfRoundNeeded(number, decplace) {
    if (Number.isInteger(number))
        return number;
    else
        return parseFloat(number.toFixed(decplace));
}

function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error("n is required");

    if (n % 5 == 0 && n % 3 == 0)
        return "fizzbuzz";
    else if (n % 3 == 0)
        return "fizz";
    else if (n % 5 == 0)
        return "buzz";
    else
        return n;

}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
