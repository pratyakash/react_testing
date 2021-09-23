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
