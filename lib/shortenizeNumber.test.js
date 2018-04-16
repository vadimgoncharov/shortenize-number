const sn = require('./shortenizeNumber');

test('', () => {
  expect(sn(100)).toBe('100');
  expect(sn(1000)).toBe('1\u00A0тыс.');
  expect(sn(1120)).toBe('1,1\u00A0тыс.');
  expect(sn(10000)).toBe('10\u00A0тыс.');
  expect(sn(100000)).toBe('100\u00A0тыс.');
  expect(sn(1000000)).toBe('1\u00A0млн');
  expect(sn(10000000)).toBe('10\u00A0млн');
  expect(sn(100000000)).toBe('100\u00A0млн');
  expect(sn(1000000000)).toBe('1\u00A0млрд');
  expect(sn(10000000000)).toBe('10\u00A0млрд');
  expect(sn(100000000000)).toBe('100\u00A0млрд');

  expect(sn(4689541457)).toBe('4,7\u00A0млрд');
  expect(sn(548807026)).toBe('548,8\u00A0млн');
  expect(sn(9255266314)).toBe('9,3\u00A0млрд');
});
