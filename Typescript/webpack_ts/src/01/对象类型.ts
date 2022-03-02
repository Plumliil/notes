// 如果某个

// function printPoint(point: { x: number, y: number }) {
//     console.log(point.x);
//     console.log(point.y);

// }

// printPoint({x: 1, y: 2})

// 可选类型

function printPoint(point: { x: number, y: number,z?:number }) {
    console.log(point.x);
    console.log(point.y);
    console.log(point.z);

}

printPoint({x: 1, y: 2})