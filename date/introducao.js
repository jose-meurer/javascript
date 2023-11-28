//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(Date.UTC(2023, 10, 28));
console.log(Date.now())
console.log(date.getTimezoneOffset()); //Difenca da minha hora local para UTC(GMT-3)

date.setDate(10);
date.setFullYear(2012);
date.setTime(0);
console.log(date)