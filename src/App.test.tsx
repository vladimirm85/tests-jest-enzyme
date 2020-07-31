import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { App } from './App';
import { ClickCounter } from './components/ClickCounter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<ClickCounter />);
  const ClickCounterComponent = wrapper.find(
    "[data-test='component-click-counter']"
  );
  expect(ClickCounterComponent.length).toBe(1);
});

test('renders increment button', () => {});

test('renders decrement button', () => {});

test('counter starts at 0', () => {});

test('clicking increment button increments counter display', () => {});

test('clicking decrement button decrements counter display', () => {});
