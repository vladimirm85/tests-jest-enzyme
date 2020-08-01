import React from 'react';

export interface StateInterface {
  counter: number;
  isError: boolean;
}

export class ClickCounter extends React.Component<{}, StateInterface> {
  state = {
    counter: 0,
    isError: false,
  };

  render() {
    return (
      <div data-test="component-click-counter">
        <h1 data-test="counter-display">The count is: {this.state.counter}</h1>
        {this.state.isError && (
          <h2 data-test="error-message">The counter cannot go below 0</h2>
        )}
        <button
          data-test="button-increment"
          onClick={() => {
            this.state.isError &&
              this.setState({ ...this.state, isError: false });
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
            this.state.counter
              ? this.setState(({ counter }) => ({
                  ...this.state,
                  counter: counter - 1,
                }))
              : this.setState({ ...this.state, isError: true });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
