import React, { Fragment } from 'react';

export const Component = ({ counter, label }) => (
  <Fragment>
    <span id="counter">
      {counter}
    </span> {label || 'remaing' }
  </Fragment>
);

Component.displayName = 'Counter';