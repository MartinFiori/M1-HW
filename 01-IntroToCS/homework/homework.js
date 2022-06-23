'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let total = 0
  num.split('').reverse().forEach((el, index) => {
    total += el * (2 ** index)
  })
  return total
}

function DecimalABinario(num) {
  // tu codigo aca
  let string = ''
  while (num > 0) {
    string = num % 2 === 0 ? 0 + string : 1 + string
    num = num % 2 === 0 ? num / 2 : parseInt(num / 2)
  }
  return string;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}