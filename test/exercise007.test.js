const {
    sumDigits, createRange,  getScreentimeAlertList//, hexToRGB, findWinner
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

describe("createRange", () => {
     test("create an array start = 3, end = 11 step = 2 the result: [3, 5, 7, 9, 11]", () => {
        expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);        
     });

     test("create an array start = 0, end = 20 step = 5", () => {
         expect(createRange(0,20,5)).toEqual([0,5,10,15,20]);
     });

     test("create an array start 1, end 5 no step use default", () => {
        expect(createRange(1,5)).toEqual([1,2,3,4,5]);
    })

 });

fdescribe("getScreentimeAlertList", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
                     { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                     { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                     { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                     { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                    ]
       },
       {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
                     { date: "2019-05-01", usage: { mapMyRun: 10, twitter: 84, instagram: 5, facebook: 10} },
                     { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                     { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                     { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                    ]
       },
       {
        username: "sinead_1984",
        name: "Sinéad Magennis",
        screenTime: [
                        { date: "2019-05-01", usage: { mapMyRun: 45, whatsApp: 30, facebook: 0, safari: 60} },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                    ]
      },
    ];
    test("Return an array of users if screen usage > 100min on a date given", () => {
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(users, "2019-05-01")).toEqual(["sam_j_1989", "sinead_1984"]);
    });
});

 