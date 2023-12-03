
const async = require("./async.js");
const mod_test = require("./mod_test.js");
const callback = require("./callback.js");

function main() {
    async.func();

    console.log(mod_test.add(100,200));

    const display = callback.display;
    const order = callback.order;

    order("아메리카노", display);

    

}


main();