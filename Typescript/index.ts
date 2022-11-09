interface IPerson {
  name: string;
  age: number;
}

let person: IPerson = { name: "zs", age: 19 };
type IPartial = Partial<IPerson>;
let person2: IPartial = { name: "ls" };
let person3: IPartial = { age: 21 };
type IOmit = Omit<IPartial, "name">;
let person4: IOmit = { age: 22 };
