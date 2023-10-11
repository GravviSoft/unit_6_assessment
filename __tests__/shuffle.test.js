const shuffle = require("../src/shuffle");
const bots = require("../src/botsData");


describe("shuffle should return a function.", () => {
  it('check that shuffle returns an array', () => {
     expect(Array.isArray(shuffle(bots))).toBe(true);
  });
  it('checks that all the same items are in the array', () => {
    expect(shuffle(bots)).toEqual(expect.arrayContaining(bots));
  });

  it('check that it returns an array of the same length as the argument sent in', () => {
    expect(shuffle(bots)).toHaveLength(bots.length);
  });
  it('check that it returns an array of the same length as the argument sent in', () => {
     expect(shuffle(bots).length).toBe(bots.length);
  });
});

