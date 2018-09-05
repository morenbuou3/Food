const commandResolve = (input) => {
  const result = {};
  input.forEach(n => {
    result[n.split(' x ')[0]] = parseInt(n.split(' x ')[1]);
  })
  return result;
}

module.exports = commandResolve;
