import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';

  test('returns correct count when there is not matching letter', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);

    expect(letterMatchCount).toBe(0);
  });

  test('returns correct count when there are three matching letter', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);

    expect(letterMatchCount).toBe(3);
  });

  test('returns correct count when there are duplicate letter in match', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);

    expect(letterMatchCount).toBe(3);
  });
});
