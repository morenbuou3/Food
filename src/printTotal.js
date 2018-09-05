const getTotal = require('../src/getTotal')

const printTotal = (input) => {
  var result = '-----------------------------------\n';
  result += '总计：' + getTotal(input) - input.discount + '元\n';
  result += '===================================';

  return result;
}

module.exports = printTotal;
