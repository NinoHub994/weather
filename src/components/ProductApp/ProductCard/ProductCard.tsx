import React, { ReactElement, useContext } from 'react';
import './ProductCard.css';
import 'bootstrap/dist/css/bootstrap.css';
import { CardTheme } from '../ProductApp';

type CardProps ={
  title:string,
  price:number, 
  quantity?:number, 
  image?:string,
  children:ReactElement, 
  setTotal?:Function, 
  setItems?:Function,
}//children?:JSX.Element}
//style={{ width: "18rem" }}
//style={{background:"green"}}
const ProductCard = (props:CardProps) => {
  const cardTheme = useContext(CardTheme);
  return (
    <div id="root" className="">
      <div className={`${cardTheme} card mt-3 mb-3 justify-content-between align-items-center flex-column`}>       
        <div className="card-body col">
          <p className="card-text">{props.title}</p>
          <img src={props.image} alt="products" className='mt-5 mb-5 img-fluid'/>
          <h5 className="card-text">{props.price}</h5>
          <div className=''>{props.children}</div>  
        </div>
      </div>
    </div>)
}

export default ProductCard;