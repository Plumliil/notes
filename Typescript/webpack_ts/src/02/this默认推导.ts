type ThisType = { name: string };
function eating(this: ThisType) {
    console.log(this.name + 'eating');
}
const pl = {
    name: 'pl',
    eating: eating
}
pl.eating();
eating.call({ name: 'zs' })
export { };