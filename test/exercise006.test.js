const {
  sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix
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

describe("isValidDNA", () => {
  test("receive a string containing only C, G, T or A return true", () => {
    expect(isValidDNA("CGTA")).toBeTruthy();
  }); 

  test("receive a string containing only C, G, T or A return true", () => {
    expect(isValidDNA("CTGA")).toBeTruthy();
  }); 

  test("receive a string containing mix of C, G, T or A return true", () => {
    expect(isValidDNA("CCCCGTATTTCCC")).toBe(true);
  }); 

  test("receive a string containing no C, G, T or A return false", () => {
    expect(isValidDNA("FFFFFZZ")).toBe(false);
  }); 

  test("receive a string containing mix of C, G, T, A  and other letters to return false", () => {
    expect(isValidDNA("CGTAFFCCCFFFZZ")).toBe(false);
  }); 

});

describe("getComplementaryDNA", () => {
  test("string of ACTG would have a complementary DNA string of TGAC", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });

  test("string of many ACTG mixed up returns correct complementary DNA pair", () => {
    expect(getComplementaryDNA("CCAATTGGTAC")).toBe("GGTTAACCATG");
  });  
});

describe("isItPrime", () => {
  test("check a number return true if prime", () => {
    expect(isItPrime(3)).toBe(true);
  });

  test("check a number return true if prime", () => {
    expect(isItPrime(2)).toBeTruthy();
  });

  test("return false if not prime", () =>{
    expect(isItPrime(8)).toBeFalsy();
  });
  
});

fdescribe("createMatrix", () => {
  test("take number 3, return array filled with fill paramater foo", () => {
    const expected =       [
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ]
    let results = createMatrix(3, "foo");
    expect(results.toString()).toBe(expected.toString());  
  });
});
