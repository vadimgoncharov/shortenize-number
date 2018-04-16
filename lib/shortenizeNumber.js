const MIN = 999;
const MAX = 999999999999; // 999 млрд

const VALUES = [
  [1000, 'тыс.'],
  [1000000, 'млн'],
  [1000000000, 'млрд'],
];


function shortenizeNumber(num) {
  if (typeof num !== 'number') {
    return num;
  }
  if (num < MIN || num > MAX) {
    return num.toString();
  }

  for (let i = 0; i < VALUES.length; i++) {
    const [currValue, currSuffix] = VALUES[i];
    const nextValue = typeof VALUES[i + 1] !== 'undefined'
      ? VALUES[i + 1][0]
      : MAX;
    if (num >= currValue && num < nextValue) {
      return format(num / currValue, currSuffix);
    }
  }
}


function format(num, suffix) {
  const numFormatted = (
    trimLeadingZero(num.toFixed(1)).replace('.', ',')
  );
  return `${numFormatted}\u00A0${suffix}`;
}


function trimLeadingZero(num) {
  return num.replace(/(\.[0]+)+$/, '');
}


module.exports = shortenizeNumber;
