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

  input.discount = total;
  input.type = promotions[1].type + "(黄焖鸡，凉皮)";
  return input;
}

module.exports = getHalfDiscount;
