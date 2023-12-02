import React, { createContext, useEffect, useState } from "react";
//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import "./ProductApp.css";
import ProductCard from "./ProductCard/ProductCard"
import ProductContainer from "./ProductCard/ProductCard";
import { Counter } from "./Counter/Counter";
import { QuantityButton } from "./QuantityButton/QuantityButton";

export const CardTheme = createContext('dark');
const url="https://fakestoreapi.com/products";

export interface Product {
  id:number;
  image:string;
  title:string;
  price:number;
  quantity:number;
}

const ProductApp = () => {
  const[cardTheme, setCardTheme] = useState('dark');
  let [total, setTotal] = useState(0);
  const [items, setItems] = useState<Product[]>([]);
  const ctotal = () => {
    setTotal(
      (total = items.reduce((total, product) => {
        return (total += product.quantity * product.price);
      }, 0))
    );
  };
  async function fetchData() {
    // get the data from the api
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    data = data.map(
      (Element: {
        id: number;
        image: string;
        title: string;
        price: number;
      }) => {
        return {
          id: Element.id,
          image: Element.image,
          title: Element.title,
          price: Element.price,
        };
      }
    );
    console.log(data);
    setItems(data);
  }
  useEffect(() => {
    // declare the async data fetching function
    fetchData();
  }, []);
  items.forEach((el) => ({ ...el, quantity: 0 }));
  //console.log(phones)
  return (
    <div className="App container d-flex justify-content-start align-items-center flex-column">
      <div className="row">
      <CardTheme.Provider value={cardTheme}>
        {items.map((item) => (
          <div className="col" key={item.id}>
              <ProductCard
                title={item.title}
                price={item.price}
                image={item.image}
                setTotal={ctotal}
                setItems={setItems}
              >
                <QuantityButton
                  quantity={item.quantity}
                  setTotal={setTotal}
                  price={item.price}
                  total={total}
                  setCardTheme={setCardTheme}
                />
              </ProductCard>
          </div>
        ))}
        <h2>{total.toFixed(2) + "$"}</h2>
        </CardTheme.Provider>
      </div>
      <div className="row ">
        <Counter />
      </div>
    </div>
  );
};

export default ProductApp;
