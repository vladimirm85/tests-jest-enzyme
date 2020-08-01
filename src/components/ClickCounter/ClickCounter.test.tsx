import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { ClickCounter, StateInterface } from './ClickCounter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @returns ShallowWrapper
 * @param {object} props - Component props specific to this setup
 * @param {StateInterface} state - initial state for setup
 */
const wrapperSetup = (props = {}, state?: StateInterface) => {
  const wrapper = shallow(<ClickCounter {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Function return ShallowWrapper containing node(s) with the given data-test attribute
 * @function findByTestAttr
 * @returns ShallowWrapper
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} attr - data-test attribute
 */
const findByTestAttr = (wrapper: ShallowWrapper, attr: string) =>
  wrapper.find(`[data-test='${attr}']`);

test('renders without error', () => {
  const clickCounterComponent = findByTestAttr(
    wrapperSetup(),
    'component-click-counter'
  );
  expect(clickCounterComponent.length).toBe(1);
});

test('renders increment button', () => {
  const incrementButton = findByTestAttr(wrapperSetup(), 'button-increment');
  expect(incrementButton.length).toBe(1);
});

test('renders decrement button', () => {
  const decrementButton = findByTestAttr(wrapperSetup(), 'button-decrement');
  expect(decrementButton.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = wrapperSetup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking increment button increments counter display', () => {
  const counter = 7;
  const wrapper = wrapperSetup({}, { counter });

  const incrementButton = findByTestAttr(wrapper, 'button-increment');
  incrementButton.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking decrement button decrements counter display', () => {
  const counter = 6;
  const wrapper = wrapperSetup({}, { counter });

  const incrementButton = findByTestAttr(wrapper, 'button-decrement');
  incrementButton.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
});
