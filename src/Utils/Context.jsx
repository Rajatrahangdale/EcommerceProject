/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const productsContext = createContext();
const Context = (props) => {
  const [products, setProducts] = useState(null);
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <productsContext.Provider value={[products, setProducts]}>
      {props.children}
    </productsContext.Provider>
  );
};

export default Context;
