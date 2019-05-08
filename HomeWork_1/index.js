"use strict";

// Первая задача

const productPrice = [200, 550, 4000, 23, 58, 5000, 485, 711];

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

// Вторая задача

let balanceIntrger;

balanceIntrger = 5004;
function endWord(n, text_forms) {  
        n = Math.abs(n) % 100; 
        let n1 = n % 10;
        if (n > 10 && n < 20) { 
          return text_forms[2]; 
        }
        if (n1 > 1 && n1 < 5) { 
          return text_forms[1]; 
        }
        if (n1 == 1) { 
          return text_forms[0]; 
        }
        return text_forms[2];
    }

function balanceString(string, balance) {
    let str = string[0];
    return `${str} ${balance} ${endWord(balance,["балл", "балла", "баллов"])}`;
}

const balance = balanceString`Ваш баланс: ${balanceIntrger}`;
console.log(balance);

// Третья задача

const userScore;

userScore = [74989, 74990, 84990, 62000, 58480, 61800];

const endArr = userScore.sort(function(a,b) { 
      return b - a ;
     });

console.log(endArr[0]);

// Среднее из трех максимальных

const average = (maxArr[0] + maxArr[1] + maxArr[2]) / 3;

console.log(average);
