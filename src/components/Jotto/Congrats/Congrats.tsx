import React from 'react';

export interface CongratsPropsInterface {
  success: boolean;
}

export const Congrats = (props: CongratsPropsInterface) => (
  <React.Fragment>
    <div data-test="component-congrats">
      {props.success && (
        <span data-test="congrats-message">
          Congrats! You guessed the word!
        </span>
      )}
    </div>
  </React.Fragment>
);
