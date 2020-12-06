const {
    sumDigits
  } = require("../challenges/exercise007");
  
  describe("sumDigits", () => {
    test("receive an array of numbers and should return the sum of numbers", () => {
      const multiples = [1,3,5,15];        
      expect(sumDigits(multiples)).toEqual(24);
    });
  
  });