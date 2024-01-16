import React, { useState } from 'react';
import './QuantityButton.css';
import 'bootstrap/dist/css/bootstrap.css';


type ButtonProps = {
	onClick?:Function,
  quantity:number,
  setTotal:Function,
  total:number,
  price:number,
  setCardTheme: React.Dispatch<React.SetStateAction<string>>,
}

export const QuantityButton = (props:ButtonProps) => {
  const [x, f] = useState(0); //[x, f]
  //const [y, setY] = useState<"pippo" | "caio">("pippo"); //[x, f]

  //const arr=useState(0);
  //let x = arr[0]; // nella funzione 0 abbiamo la variabile di stato
  //let f = arr[1];// nella seconda la funzione che aggiornera questa variabile
  const {setCardTheme} = props;
  
  const increment = () => {
    f(x + 1);
    props.setTotal(props.total+props.price)
  }

  const decrement = () => {
    if(x>0 && props.total>0){
      f(x - 1);
      props.setTotal(Math.abs(props.total-props.price))
    }
  }

  const dark = () =>{
    setCardTheme(theme => theme ==='white'?'dark':'white')
  }

  const white = () =>{
    setCardTheme(theme => theme ==='dark'?'white':'dark')
  }

  //const toggleY = () => {
    //y === "pippo" ? setY("caio") : setY("pippo")
  //}
  //style={{width:"200px"}}
  return (
    <div className="Button d-flex justify-content-between align-items-center">
      <button onClick={decrement} className="btn btn-danger">-</button>
      <h2>{x}</h2>
      <button onClick={increment} className="btn btn-success">+</button>
      <div>
        <button className="btn btn-secondary" onClick={white}>white</button>
        <button className="btn btn-primary ms-3 me-3" onClick={dark}>dark</button>
      </div>
    </div>
  )
}