import React, { useState } from 'react';
import './Counter.css';
import 'bootstrap/dist/css/bootstrap.css';



export const Counter = () => {
  const [x, f] = useState(3); //[x, f]
  const [y, setY] = useState<"pippo" | "caio">("pippo"); //[x, f]

  //const arr=useState(0);
  //let x = arr[0]; // nella funzione 0 abbiamo la variabile di stato
  //let f = arr[1];// nella seconda la funzione che aggiornera questa variabile
  const increment = () => {
    f(x + 1);
  }

  const toggleY = () => {
    y === "pippo" ? setY("caio") : setY("pippo")
  }
  return (
    <div className='col'>
      <button onClick={increment}>Counter: {x}</button>
      <button onClick={toggleY}>Counter: {y}</button>
    </div>
  )
}
