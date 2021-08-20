import React from 'react';
import './style.css';
import Counter from './Counter';
import Apis from './components/Apis';

export default function App() {
  return (
    <>
      <div>
        <h1>Hello Camada!</h1>
        <p>Dale Click al botón</p>
      </div>
      <Counter />
      <Apis />
    </>
  );
}
