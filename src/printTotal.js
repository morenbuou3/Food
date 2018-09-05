const getTotal = require('../src/getTotal')

const printTotal = (input) => {
  var result = '-----------------------------------\n';
  var total = getTotal(input) - input.discount;
  result += '总计：' + total + '元\n';
  result += '===================================';

  return result;
}

module.exports = printTotal;
