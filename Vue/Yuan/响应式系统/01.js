// 响应式系统

const info = { counter: 100 }

function doubleCounter() {
    console.log(info.counter * 2);
}

doubleCounter();
info.counter++;
doubleCounter();