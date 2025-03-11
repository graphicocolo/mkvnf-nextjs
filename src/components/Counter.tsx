'use client';

import React, { useState } from 'react';

import { Button } from '@/components/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button label="Increment" onClick={() => setCount(count + 1)} />
      <Button label="Decrement" onClick={() => setCount(count - 1)} />
    </div>
  );
};

export default Counter;
