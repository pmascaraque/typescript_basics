//variables
var myNum = 5.321;
var obj = {
    x: 5.321,
    y: 6
};
obj.z = 123;
console.log(obj);
var add = function (x, y) { return x + y; };
var add2 = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
};
add(123, obj.x);
//unions
var maybeNum = 5;
maybeNum = "Hello";
maybeNum = add;
var dogCat = {
    bark: "bark",
    purr: "purr"
};
dogCat = 5;
if (typeof dogCat === "number") {
    console.log("number: " + dogCat);
}
//casting
add(dogCat, dogCat);
//any
var logAnything = function (x) {
    console.log(x);
};
logAnything(function () { return 5; });
