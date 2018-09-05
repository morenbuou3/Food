const loadAllItems = require('../src/items')

const printDetail = (input) => {
  var result = '-----------------------------------\n';
  var items = loadAllItems();

  if (input.type) {
    result += '-----------------------------------\n';
    result += '使用优惠:\n';
    result += input.type + '，省' + input.discount + '元\n';
  }
}

module.exports = printDetail;
