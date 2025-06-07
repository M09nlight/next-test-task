'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('counter changed', counter);
  }, [counter]);

  return (
    <div className='flex justify-between gap-2'>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      {counter}
      <button onClick={() => setCounter(counter - 1)}>decrease</button>
      <button onClick={() => setCounter(counter - 1)}>decrease</button>
    </div>
  );
}
