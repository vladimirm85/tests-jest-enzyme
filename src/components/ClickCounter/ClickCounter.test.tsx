import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { ClickCounter, StateInterface } from './ClickCounter';
import { findByTestAttr } from '../../../utils/testsUtils';

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
  const wrapper = wrapperSetup({}, { counter, isError: false });

  const incrementButton = findByTestAttr(wrapper, 'button-increment');
  incrementButton.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking decrement button decrements counter display', () => {
  const counter = 6;
  const wrapper = wrapperSetup({}, { counter, isError: false });

  const incrementButton = findByTestAttr(wrapper, 'button-decrement');
  incrementButton.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
});

test('clicking decrement button dont decrement below zero', () => {
  const wrapper = wrapperSetup({}, { counter: 0, isError: false });

  const decrementButton = findByTestAttr(wrapper, 'button-decrement');
  decrementButton.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(0);
});

test('clicking decrement button when counter=0 display error', () => {
  const wrapper = wrapperSetup({}, { counter: 0, isError: false });

  const decrementButton = findByTestAttr(wrapper, 'button-decrement');
  decrementButton.simulate('click');

  const counterError = findByTestAttr(wrapper, 'error-message');
  expect(counterError.length).toBe(1);
});

test('clicking increment button when error displayed', () => {
  const wrapper = wrapperSetup({}, { counter: 0, isError: true });

  const incrementButton = findByTestAttr(wrapper, 'button-increment');
  incrementButton.simulate('click');

  const counterError = findByTestAttr(wrapper, 'error-message');
  expect(counterError.length).toBe(0);
});
