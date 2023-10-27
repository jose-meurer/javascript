const arr = new Array();
const arr2 = new Array(true, "José", 21, new Array(5, 2, 10));
arr[0] = "José";
arr[1] = 11;
console.log(arr);
console.log(arr2[3][2]);
console.log(arr2[3][arr2.length - 1]);

const arr3 = ["José", 32, [4, 6, 1], true];
arr3[4] = "a";
arr3[arr3.length] = "b";
arr3.push("push");
arr3.push("a", "b", "c");

console.log(arr3);
console.log(arr3[2]);
console.log(arr3[2][0]);
let n = 6;
console.log(arr3);
console.log();


let x = 6;
let y = 10;