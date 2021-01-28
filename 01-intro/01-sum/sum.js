function sum(...arguments) {
  const TypeErrorText = 'Накосячили с типами';

  return arguments.reduce((acc, num) => {
    if (typeof num !== 'number') {
      throw new TypeError(TypeErrorText);
    }
    return acc + num;
  }, 0);
}

module.exports = sum;
