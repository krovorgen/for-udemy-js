function first() {
  setTimeout(() => {
    console.log(1);
  }, 3000);
}
function second() {
  console.log(2);
}
first();
second();

function learnJS(lang, callback) {
  console.log(`я учу ${lang}`);
  callback();
}

learnJS("JavaScript", () => {
  console.log("Я прошел этот урок!");
});
