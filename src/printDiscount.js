
const printDiscount = (input) => {
  var result = '';

  if (input.type) {
    result += '-----------------------------------\n';
    result += '使用优惠:\n';
    result += input.type + '，省' + input.discount + '元\n';
  }

  return result;
}

module.exports = printDiscount;
