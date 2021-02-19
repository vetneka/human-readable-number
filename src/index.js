const humanNums = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

module.exports = function toReadable (number) {
  const dozens = humanNums[Math.floor(number / 10) * 10];
  const hundreds = humanNums[Math.floor(number / 100)];

  if (number < 20) return `${humanNums[number]}`.trim();
  if (number < 100) return `${dozens} ${(number % 10) ? toReadable(number % 10) : ''}`.trim();
  if (number < 1000) return `${hundreds} hundred ${(number % 100) ? toReadable(number % 100) : ''}`.trim();

  return 0;
}
