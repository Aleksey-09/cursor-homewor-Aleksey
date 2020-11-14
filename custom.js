const xiaomiPrice = 15.678;
const iPhonePrice = 123.965;
const samsungPrice = 90.2345;

let maxPrice = Math.max(xiaomiPrice, iPhonePrice, samsungPrice);
console.log(`Максимальное число ${maxPrice}`);

let minPrice = Math.min(xiaomiPrice, iPhonePrice, samsungPrice);
console.log(`Минимальное число ${minPrice}`);

let fulPrice = xiaomiPrice + iPhonePrice + samsungPrice;
console.log(`сумма всех чисел ${fulPrice}`);

let fulPriceFloor = Math.floor(xiaomiPrice) + Math.floor(iPhonePrice) + Math.floor(samsungPrice);
console.log(`сумма всех чисел(округление в меньшую сторону) ${fulPriceFloor}`);

let fulPriceCeil = (Math.ceil(fulPriceFloor /100) * 100)
console.log(`сумма всех чисел(округление до сотен) ${fulPriceCeil}`);

let fulPriceBoolean = fulPriceFloor % 2 === 0;
console.log(`значение булеан ${fulPriceBoolean}`);

let balancePrice = 500 - (xiaomiPrice + iPhonePrice + samsungPrice);
console.log(`остаток - 500; ${balancePrice}`);

let averaging = (fulPrice / 3).toFixed(2);
console.log(`округление до второго знака после точки; ${averaging}`);

let discount = (Math.random(0,1) * 100).toFixed(0);
console.log(`случайная скидка ${discount}%`)

let payDiscount = (fulPrice - (fulPrice * discount / 100)).toFixed(2);
console.log(`сумма опаты со скидкой ${payDiscount}`);

let profit = (fulPrice / 2 - payDiscount).toFixed(2);
console.log(`прибыль ${profit}`);






console.log(
    `1)Максимальное число ${maxPrice}
     2)Минимальное число ${minPrice}
     3)сумма всех чисел ${fulPrice}
     4)сумма всех чисел(округление в меньшую сторону) ${fulPriceFloor}
     5)сумма всех чисел(округление до сотен) ${fulPriceCeil}
     6)значение булеан ${fulPriceBoolean}
     7)остаток - 500; ${balancePrice}
     8)округление до второго знака после точки; ${averaging}
     9)случайная скидка ${discount}%
     10)сумма опаты со скидкой ${payDiscount}
     11)прибыль ${profit}`
);


