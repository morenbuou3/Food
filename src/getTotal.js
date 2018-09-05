const loadAllItems = require('../src/items')

const getTotal = (input) => {
  var items = loadAllItems();
  var total = 0;


  for (let key in input) {
    let item = items.find(n => n.id === key);
    total +=  item ? item.price * input[key] : 0;
  }

  return total;
}

module.exports = getTotal;
