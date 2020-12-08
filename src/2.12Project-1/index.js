export const numberOfFilms = () => {
  const count = window.prompt("How many films have you watched?");
  return count;
};

export const personalMovieDB = () => {
  return {
    count: numberOfFilms(),
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };
};
