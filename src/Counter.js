import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const newDate = Date();
  return (
    <>
      <button text="Contar" onClick={() => setCount(count + 1)}>
      Botón
      </button>
      <h1>Van : {count}</h1>
      <p> el ultimo Click fue el: {newDate}</p>
    </>
  );
}
