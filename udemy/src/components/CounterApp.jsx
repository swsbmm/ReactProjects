import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
// import './CounterApp.css';

export default function CounterApp({ value }) {
  const [count, setCount] = useState(value);
  const sumar = (event) => {
    setCount(count + 1);
  };
  const restar = () => setCount(count - 1);
  const reset = () => setCount(value);

  return (
    <Fragment>
      <div className="container">
        <h1>Counter App</h1>
        <div>
          <p>{count}</p>
          <div>
            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>reset</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
