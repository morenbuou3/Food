const getHalfDiscount = require('../src/getHalfDiscount')
const getDecress = require('../src/getDecress')
const getTotal = require('../src/getTotal')

const Judge = (input) => {
  var result = getHalfDiscount(input);
  if (result.discount < 6) {
    result = getDecress(input);
  }
  if (getTotal(input) < 30) {
    result.type = undefined;
    result.discount = 0;
  }

  return result;
}

module.exports = Judge;
