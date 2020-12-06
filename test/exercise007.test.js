const {
    sumDigits, createRange
  } = require("../challenges/exercise007");
  
describe("sumDigits", () => {
    test("receive an array of numbers and should return the sum of numbers", () => {
      const multiples = [1,3,5,15];        
      expect(sumDigits(multiples)).toEqual(24);
    });
    test("receive an empty array of numbers and should return 0", () => {
        const multiples = [];        
        expect(sumDigits(multiples)).toEqual(0);
      });
  
 });

fdescribe("createRange", () => {
     test("create an array start = 3, end = 11 step = 2 the result: [3, 5, 7, 9, 11]", () => {
        expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);        
     });

     test("create an array start = 0, end = 20 step = 5", () => {
         expect(createRange(0,20,5)).toEqual([0,5,10,15,20]);
     });

     test("create an array start 1, end 5 no step use default", () => {
        expect(createRange(1,5)).toEqual([1,2,3,4,5]);
    })

 })

 