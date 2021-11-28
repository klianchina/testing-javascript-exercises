import React, {useState} from 'react';
import css from './counter.module.css';

function Counter({valuesToCount}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  return (
    <div className={css.root}>
      <h1 className={css.title}>
        Current
        {valuesToCount && ` ${valuesToCount}`} count: {count}
      </h1>
      <button className={css.button} onClick={decrement}>Decrement</button>
      <button className={css.button} onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
