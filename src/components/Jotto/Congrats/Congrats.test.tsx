import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Congrats, CongratsPropsInterface } from './Congrats';
import { findByTestAttr } from '../../../../utils/testsUtils';

const wrapperSetup = (props: CongratsPropsInterface) =>
  shallow(<Congrats {...props} />);

test('renders without errors', () => {
  const CongratsComponent = findByTestAttr(
    wrapperSetup({ success: false }),
    'component-congrats'
  );
  expect(CongratsComponent.length).toBe(1);
});

test('renders no text when `success` props is false', () => {
  const CongratsComponent = findByTestAttr(
    wrapperSetup({ success: false }),
    'component-congrats'
  );
  expect(CongratsComponent.text()).toBe('');
});

test('renders non-empty congrats message when success props is true', () => {
  const CongratsMessage = findByTestAttr(
    wrapperSetup({ success: true }),
    'congrats-message'
  );
  expect(CongratsMessage.length).not.toBe(0);
});
