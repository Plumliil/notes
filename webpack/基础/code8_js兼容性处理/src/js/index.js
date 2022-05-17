// import '@babel/polyfill'
const add = (a, b) => {
    return a + b
};
console.log(add(1, 2));

const promise = new Promise((resolve) => {
    setTimeout(() => {
        console.log('time over');
        resolve()
    }, 1000);
})

console.log(promise);