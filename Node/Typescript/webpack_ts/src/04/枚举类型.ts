// type Direction ='left'|'right'|'top'|'bottom'

// 有值 默认从0开始
// 可以更改值 数字或字符串常量
enum Direction {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}

function turnDirection(direction:Direction) {
    console.log(direction);
}
turnDirection(Direction.LEFT); // 0
turnDirection(Direction.RIGHT); // 1
turnDirection(Direction.TOP); // 2

export {}