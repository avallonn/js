const positionLong = 20; 
const positionLat = 10;

const addressLong = 40;
const addressLat = 20;

// Рассчитать расстояние от position до address

const x = Math.abs(positionLong - addressLong);
const y = Math.abs(positionLat - addressLat);
const x2 = Math.pow((x), 2);
const y2 = Math.pow((y), 2);
const xy2 = x2 + y2;
const finalResult = Math.sqrt(x2 + y2);
console.log(finalResult);

// ИЛИ В ВИДЕ ОДНОЙ СТРОЧКИ

const finalResult2 = Math.sqrt(Math.pow((positionLong - addressLong), 2) + Math.pow((positionLat - addressLat), 2));
console.log(finalResult2);