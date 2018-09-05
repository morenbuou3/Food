const loadAllItems = require('../src/items')

const printDetail = (input) => {
  var result = '============= 订餐明细 =============\n';
  var items = loadAllItems();

  for (let key in input) {
    let item = items.find(n => n.id === key);
    result += (item.name + " x " + input[key] + " = " + item.price * input[key] + "元\n");
  }
}

module.exports = printDetail;
