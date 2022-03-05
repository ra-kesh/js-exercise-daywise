const rectangleDiagonal = require("./rectangleDiagonal");

describe("rectangleBlock", () => {
  it("calculates rectangle diagonal", () => {
    expect(rectangleDiagonal(3, 4)).toBe(5);
  });
});
