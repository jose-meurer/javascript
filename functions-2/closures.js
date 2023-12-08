const test = (function (n) {
  return function internalTest() {
    console.log("internal test called ", ++n);
    return "Internal test return " + n;
  };
})(10);

let str = test();
test();
test();
let str2 = test();
console.log(str);
console.log(str2);
