"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2 * a));
    arr.push((-b - Math.sqrt(d) )/(2 * a));
  }
  else if (d == 0) {
    arr.push(-b / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  countMonths = +countMonths;
  if (typeof(percent) == 'string' || typeof(contribution) == 'string' || typeof(amount) == 'string' || typeof(countMonths) == 'string') {
    return false;
  }
  percent = percent * 0.01 / 12;
  let bodyCredit = amount - contribution;
  let platech =  bodyCredit * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  return +((platech * countMonths).toFixed(2));
}