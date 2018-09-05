const loadAllItems = require('../src/items')
const loadPromotions = require('../src/promotions')

const getHalfDiscount = (input) => {
  var items = loadAllItems();
  var promotions = loadPromotions();
  var total = 0;

  for (var key in input) {
    if (promotions[1].items.includes(key)) {
      total += items.find(n => n.id === key).price / 2 * input[key];
    }
  }

  input.total = total;
  input.type = promotions[1].type;
  return input;
}

module.exports = getHalfDiscount;
