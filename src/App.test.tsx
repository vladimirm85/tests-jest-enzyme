import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
