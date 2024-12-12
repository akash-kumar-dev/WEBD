type keyInput = "up" | "down" | "left" | "right";

// enum Direction {
//     Up, //  0
//     Down,   // 1
//     Left,   // 2
//     Right   // 3
// }

enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

function doSomething(keyPressed: Direction) {
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