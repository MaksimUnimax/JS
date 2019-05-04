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

function balanceString(balance) {
    return `Ваш баланс: ${balance} ${endWord(balance,["балл", "балла", "баллов"])}`;
}

console.log(balanceString(balanceIntrger));

// Третья задача

let userScore;

userScore = [74989, 74990, 84990, 62000, 58480, 61800];
function maxScore(score) {
  let max = 0;
  let maxValue = 0;
  for(let value of score) {
    if (value > max) {
      maxValue = value;
      max = value;
    }
  }
  return maxValue;
}

console.log(maxScore(userScore));

// Среднее из трех максимальных

function averageScore(score) {
  let maxValue = 0;
  let endArr = [];
  let sum = 0;
  let average = 0;
  while (endArr.length < 3) {
    let index = 0;
    let max = 0;
    for(let value of score){
      if (value > max) {
        maxValue = value;
        max = value;
      }
    }
    endArr.push(maxValue);
    index = score.indexOf(maxValue);
    score.splice(index, 1);
  }
  for(let value of endArr) {
    sum += value;
    average = sum / 3;
  }
  return average;
}

console.log(averageScore(userScore));