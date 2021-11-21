import React, {useState} from 'react';

function Counter({valuesToCount}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  return (
    <div>
      <h1>
        Current
        {valuesToCount && ` ${valuesToCount}`} count: {count}
      </h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
