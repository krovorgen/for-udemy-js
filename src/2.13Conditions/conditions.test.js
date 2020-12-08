import { conditions, check } from "./conditions";

describe("test conditions", () => {
  test("test 1", () => {
    expect(conditions(4, 6)).toBe("Меньше");
    expect(conditions(5, 5)).toBe("Равны");
    expect(conditions(6, 4)).toBe("Больше");
  });
});

describe("ternary operator", () => {
  test("test 2", () => {
    expect(check(4, 6)).toBe(6);
    expect(check(99, 99)).toBe(99);
    expect(check(6, 4)).toBe(6);
  });
});
