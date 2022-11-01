function Parent(): void {
    // name_: string, age_: number
//   console.log(name_ + age_ + "parent");
  console.log("parent");
}

function Son(name_: string, age_: number): void {
  console.log(name_ + age_ + "son");
}
Son.prototype = new Parent();

