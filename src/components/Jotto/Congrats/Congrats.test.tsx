import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Congrats } from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const wrapperSetup = (props = {}, state?: {}) => {
  const wrapper = shallow(<Congrats {...props} />);
  // if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without errors', () => {});
