const options = {
    name: "test",
    width: 1024,
    height: 1024,
    color: {
        border: "black",
        bg: "red",
    },
    makeTest: function() {
        console.log("Text");
    }
};

/* console.log(options.name);

delete options.name

console.log(options); */

/* let counter = 0;
for (const key in options) {
    if (typeof (options[key]) === "object") {
        counter++
        for (let i in options[key]) {
            console.log(`Property ${i} matter ${options[key][i]}`);

        }
    } else {
        console.log(`Property ${key} matter ${options[key]}`);
        counter++
    }
}

console.log(counter); */

/* console.log(Object.keys(options)); [ 'name', 'width', 'height', 'color' ] */
console.log(Object.keys(options).length); /* !!!!!!!!!!!!! */
options.makeTest();