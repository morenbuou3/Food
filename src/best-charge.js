const commandResolve = require('../src/commandResolve')
const Judge = require('../src/Judge')
const printDetail = require('../src/printDetail')
const printDiscount = require('../src/printDiscount')
const printTotal = require('../src/printTotal')

function bestCharge(selectedItems) {
  var result = '';

  var input = commandResolve(selectedItems);
  input = Judge(input);

  result += printDetail(input);
  result += printDiscount(input);
  result += printTotal(input);

  return result;
}

var input1 = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]
var input = {ITEM0001:1, ITEM0013:2, ITEM0022:1}
console.log(bestCharge(input1))

module.exports = bestCharge;
