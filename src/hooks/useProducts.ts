import { useEffect, useState } from "react";

export interface Product {
  id:number;
  image:string;
  title:string;
  price:number;
  quantity:number;
}
export const useProducts = (url: string) => {
  let [total, setTotal] = useState(0);
  const [items, setItems] = useState<Product[]>([]);
  const cTotal = () => {
    setTotal(
      (total = items.reduce((total, product) => {
        return (total += product.quantity * product.price);
      }, 0))
    );
  };
  async function fetchData() {
    // get the data from the api
    let response = await fetch(url);
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
    setItems(data);
  }
  useEffect(() => {
    // declare the async data fetching function
    fetchData();
  }, []);
    return [total, cTotal,items, setItems] as [number, Function,Product[], Function];
}