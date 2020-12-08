import { numberOfFilms, personalMovieDB } from "./index";

describe("movie count test", () => {
  test("count", () => {
    jest.spyOn(global.window, "prompt").mockImplementation(() => 4);
    expect(numberOfFilms()).toBe(4);
    jest.spyOn(global.window, "prompt").mockImplementation(() => 7);
    expect(numberOfFilms()).toBe(7);
  });
});
describe("Movie DB", () => {
  test("DB", () => {
    jest.spyOn(global.window, "prompt").mockImplementation(() => 4);
    expect(personalMovieDB().movies).toBe(4);
  });
});
