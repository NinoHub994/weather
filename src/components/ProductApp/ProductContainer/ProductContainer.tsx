import React, { ReactElement} from 'react';
import './ProductContainer.css';
import 'bootstrap/dist/css/bootstrap.css';

type ContainerProps ={children:ReactElement}
const ProductContainer = (props:ContainerProps) => {
  return (
    <div id="root" className="Container d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center">
        {props.children}
      </div>
    </div>)
}

export default ProductContainer;