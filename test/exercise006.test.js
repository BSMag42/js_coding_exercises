const {
  sumMultiples, isValidDNA
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

  test("receive an array return the sum of any numbers multiple of 3 or 5", () => {
    expect(sumMultiples([1,7,15,33])).toEqual(48);
  });
});

fdescribe("isValidDNA", () => {
  test("receive a string containing only C, G, T or A return true", () => {
    expect(isValidDNA("CGTA")).toBeTruthy();
  }); 

  test("receive a string containing mix of C, G, T or A return true", () => {
    expect(isValidDNA("CCCCGTATTT")).toBeTruthy();
  }); 

  test("receive a string containing no C, G, T or A return false", () => {
    expect(isValidDNA("FFFFFZZ")).toBe(false);
  }); 
});


