const {
  sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered
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

describe("createMatrix", () => {
  test("take number 3, return array filled with fill paramater foo", () => {
    const expected =       [
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ]
    let results = createMatrix(3, "foo");
    expect(results.toString()).toBe(expected.toString());  
  });

  test("take number 4, return array filled with fill paramater bar", () => {
    const expected =       [
      ["bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar"]
    ]
    let results = createMatrix(4, "bar");
    expect(results.toString()).toBe(expected.toString());  
  });

  test("take number 0 return empty array", () => {
    let results = createMatrix(0, "diditwork");
    const expected = [];
    expect(results.toString()).toBe(expected.toString());  
  });
});

describe("areWeCovered", () => {
  test("take array return false if < 3 staff - 1 staff", () =>{
    const staff = [ { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] }];
    expect(areWeCovered(staff,"Monday")).toBeFalsy();
  });
});

describe("areWeCovered", () => {
  test("take array return false if < 3 staff to cover - 2 here", () =>{
    const staff = [ 
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] }];
    expect(areWeCovered(staff,"Monday")).toBeFalsy();
  });

  describe("areWeCovered", () => {
    test("take array return true if >= 3 staff to cover", () =>{
      const staff = [ 
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Sinéad", rota: ["Saturday", "Sunday", "Monday", "Wednesday"] },
        { name: "Tim", rota: ["Saturday", "Sunday", "Monday", "Friday"] },
        { name: "Anne", rota: ["Saturday", "Sunday", "Wednesday", "Friday"] },
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] }
      ];

      expect(areWeCovered(staff,"Friday")).toBeTruthy();
    });
  });
});
