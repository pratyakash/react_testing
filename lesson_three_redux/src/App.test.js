import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import App from './App';

import { findByTestAttr, checkProps, storeFactory } from '../test/utils';

jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';

const setup = () => {
  const store = storeFactory({})
  return mount(
    <Provider store={store}>
      <App />
    </Provider>);
};

test('renders without error', () => {
  const wrapper = setup();

  const app = findByTestAttr(wrapper, 'component-app');

  expect(app.length).toBe(1);
});


describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });


  test('get secret word on app mount', () => {
    const wrapper = setup();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  })

  test('not retreive on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  })
})