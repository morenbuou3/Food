const loadAllItems = require('../src/items')
const loadPromotions = require('../src/promotions')

const getDecress = (input) => {
  var items = loadAllItems();
  var promotions = loadPromotions();
  var total = 0;

  for (var key in input) {
      total += items.find(n => n.id === key).price * input[key];
  }

  input.discount = 6;
  input.type = promotions[0].type;
  return input;
}

module.exports = getDecress;
