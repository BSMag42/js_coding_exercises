const {
  sumMultiples
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("receive an array of numbers and should return the sum of any numbers which are a multiple of 3 or 5", () => {
    const multiples = [1,3,5,15];     
    
    expect(sumMultiples(multiples)).toEqual(23);
  });

  test("receive an array return the sum of any numbers return 0 if there are no multiple of 3 or 5", () => {
    const multiples = [1,4,7,43];
    expect(sumMultiples(multiples)).toEqual(0);
  });
});


