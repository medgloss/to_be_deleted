import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,  reset } from '../counterSlice';
import { RootState, AppDispatch } from '../store';
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [incrementValue, setIncrementValue] = useState<number>(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      
    </div>
  );
};

export default Counter;