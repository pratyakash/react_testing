import App from './App';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render non-empty without crashing', () => {
  const shallowWrapper = shallow(<App />);

  /*
   * console.log(shallowWrapper.debug());
   */

  expect(shallowWrapper.exists()).toBe(true);
});
