import React from 'react';

export interface StateInterface {
  counter: number;
}

export class ClickCounter extends React.Component<{}, StateInterface> {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div data-test="component-click-counter">
        <h1 data-test="counter-display">The count is: {this.state.counter}</h1>
        <button
          data-test="button-increment"
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          +
        </button>
        <button
          data-test="button-decrement"
          onClick={() => {
            this.setState(({ counter }) => ({
              counter: counter - 1,
            }));
          }}
        >
          -
        </button>
      </div>
    );
  }
}
