import React from 'react';

export const ClickCounter: React.FC = (): JSX.Element => {
  return (
    <div data-test="component-click-counter">
      <h1>The count is: </h1>
    </div>
  );
  // const [counter, setCounter] = React.useState(0);
  // return (
  //   <div>
  //     <h1>The count is: {counter}</h1>
  //     <button
  //       type={'button'}
  //       onClick={() => {
  //         setCounter(counter + 1);
  //       }}
  //     >
  //       +
  //     </button>
  //     <button
  //       type={'button'}
  //       onClick={() => {
  //         setCounter(counter - 1);
  //       }}
  //     >
  //       -
  //     </button>
  //   </div>
  // );
};
