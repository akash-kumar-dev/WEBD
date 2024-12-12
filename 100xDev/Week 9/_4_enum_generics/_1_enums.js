"use strict";
// enum Direction {
//     Up, //  0
//     Down,   // 1
//     Left,   // 2
//     Right   // 3
// }
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    // do something
    if (keyPressed == Direction.Up) {
        // do something
    }
    // 
}
doSomething(Direction.Up);
doSomething(Direction.Down);
// javaScript dont have enums, it stores them as objects in number format
console.log(Direction.Up);
