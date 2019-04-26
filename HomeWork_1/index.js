"use strict";

const productPrice = [200, 550, 4000, 23, 58, 5000, 485, 711];
let user;
let bonus;

function calcBonus(price) {
  let sum = 0;
  let endPrice;
  for (let value of price) {
    sum += value;
  }
  if (sum > 10000) {
    endPrice = (sum * 5)/100;
  }
  return Math.round(endPrice);
}

console.log(calcBonus(productPrice));

