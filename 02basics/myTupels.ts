// const user: (string | number)[] = ["hc" , 1]

let User: [string, number, boolean];

User = ["ak", 12, true];

// let rgb: number[] = [112, 11, 22];
let rgb: [number, number, number] = [112, 11, 22];

type User = [number, string];

const newUser: User = [112, "aa"];

newUser[1] = "ak.com";

newUser.unshift("amklu");
