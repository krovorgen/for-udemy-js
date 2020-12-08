import { numConvert } from "./cycle";

describe("", () => {
  test("test 1", () => {
    jest.spyOn(console, "log");
    expect(numConvert(44)).toBe(56);
    expect(console.log).lastCalledWith("we + 1");
  });
});
