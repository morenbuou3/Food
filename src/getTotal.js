const loadAllItems = require('../src/items')

const getTotal = (input) => {
  var items = loadAllItems();
  var total = 0;

  for (var key in input) {
    total += items.find(n => n.id === key).price * input[key];
  }

  return total;
}

module.exports = getTotal;
