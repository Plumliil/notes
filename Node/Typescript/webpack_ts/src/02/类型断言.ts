// <img id="pl" />

// const el = document.querySelector('#pl') as HTMLImageElement;

// el.src='xxx'

// class Person{}
// class Student extends Person{
//     studying(){
//         console.log('studying');
//     }
// }
// function sayHello(p:Person) {
//     (p as Student).studying()
// }
// const stu=new Student();
// sayHello(stu)

// const message = 'hello world';

// const num: number = (message as unknown) as number


function printMsgLen(msg?: string) {
    if(msg){
        console.log(msg.length);
    }
    console.log(msg!.length);
}

printMsgLen('hello world');
printMsgLen('哈哈哈');
printMsgLen();