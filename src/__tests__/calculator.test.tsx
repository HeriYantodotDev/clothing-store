import { sum } from '../calculator';

describe('Calculator tests', () => {
  test('returns sum correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });
  test('returns sum correctly with negative number', () => {
    expect(sum(-2, 3)).toBe(1);
  });
});