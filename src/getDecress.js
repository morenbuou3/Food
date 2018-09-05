const loadPromotions = require('../src/promotions')

const getDecress = (input) => {
  var promotions = loadPromotions();

  input.discount = 6;
  input.type = promotions[0].type;
  return input;

}

module.exports = getDecress;
