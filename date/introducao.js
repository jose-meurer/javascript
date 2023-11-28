//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(Date.UTC(2023, 10, 28));
console.log(Date.now());
console.log(date.getTimezoneOffset()); //Difenca da minha hora local para UTC(GMT-3)

date.setDate(10);
date.setFullYear(2012);
date.setTime(0);
console.log(date);

console.log("\n\n-------\n");
date = new Date();
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toUTCString());
console.log(date.toISOString());

console.log(date.valueOf());
console.log(date.toLocaleString("en-US"));
console.log(date.toLocaleString());
console.log(date.toLocaleString("pt-PT", {month: "long", weekday: "long", day: "numeric", year: "numeric"}));
console.log(date.toLocaleString(undefined, {hour12: true}))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options