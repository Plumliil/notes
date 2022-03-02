type IDType = number | string;
function printID(id: IDType) {
    if (typeof id === 'string') {
        console.log(id);
    } else {
        console.log(id);
    }
}
printID(1);
printID('1');
type Direction = 'left' | 'right' | 'top' | 'bottom';
function printDirection(direction: Direction) {
    switch (direction) {
        case 'left':
            console.log(direction);
            break;
        case 'right':
            console.log(direction);
            break;
        case 'top':
            console.log(direction);
            break;
        case 'bottom':
            console.log(direction);
            break;
        default:
            break;
    }
}
printDirection('top')
function printTime(time: string | Date) {
    if (time instanceof Date) {
        console.log(time.toUTCString());
    } else {
        console.log(time);
    }
}
printTime(new Date())
class Stu {
    studying() {
        console.log('i am a student');
        
    }
}
class Tea {
    teaching() {
        console.log('i am a teacher');
    }
}
function work(p: Stu | Tea) {
    if (p instanceof Stu) {
        p.studying()
    } else {
        p.teaching()
    }
}
work(new Stu()) // i am a student


type Fish={
    swimming:()=>void
}
type Dog={
    running:()=>void
}

function walk(animal:Fish|Dog) {
    if('swimming' in animal){
        animal.swimming()
    }else{
        animal.running()
    }
}
const fish:Fish={
    swimming(){
        console.log('fish swimming');
    }
}
const dog:Dog={
    running(){
        console.log('dog running');
    }
}
walk(fish)