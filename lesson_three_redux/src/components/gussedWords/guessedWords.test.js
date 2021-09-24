import { shallow } from 'enzyme';

import GuessedWordsComponent from './index';

import { findByTestAttr, checkProps } from '../../../test/utils';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3,
    },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };

  return shallow(<GuessedWordsComponent {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(GuessedWordsComponent, defaultProps);
});

describe('if no words are guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessedword');

    expect(component.length).toBe(1);
  });

  test('renders instruction to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');

    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if words are guessed', () => {
  let wrapper;

  const guessedWords = [
    {
      guessedWord: 'train',
      letterMatchCount: 3,
    },
    {
      guessedWord: 'party',
      letterMatchCount: 1,
    },
    {
      guessedWord: 'agile',
      letterMatchCount: 2,
    },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessedword');

    expect(component.length).toBe(1);
  });

  test('renders "guessed word" section', () => {
    const guessedWords = findByTestAttr(wrapper, 'guessed-words');

    expect(guessedWords.length).toBe(1);
  });

  test('correct number of guessed words', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');

    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
