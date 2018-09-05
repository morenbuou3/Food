const getHalfDiscount = require('../src/getHalfDiscount')
const getDecress = require('../src/getDecress')

const Judge = (input) => {
  var half = getHalfDiscount(input);
  var descr = getDecress(input);

  return half.total < descr.total ? half : descr;
}

module.exports = Judge;
