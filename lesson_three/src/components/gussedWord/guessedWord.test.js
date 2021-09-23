import { shallow } from 'enzyme';

import GuessedWordComponent from './index';

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

  return shallow(<GuessedWordComponent {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(GuessedWordComponent, defaultProps);
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

describe('if words are guessed', () => {});
