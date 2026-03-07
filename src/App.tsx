import './App.css';
import { useState, useEffect, useRef } from 'react';

import products from "./data/products";
import Product from "./components/card/products/product";
import CartSummary from "./components/cart/CartSummary";
import Header from "./components/header/Header";
import type { ProductsSelectionMap } from './types';

function debounce(
  fn: Function,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (map: ProductsSelectionMap) {
    clearTimeout(timeoutId);       
    timeoutId = setTimeout(() => { 
      fn(map);
    }, delay);
  };
}



function updateProductsSelectionMap(productsSelectionMap: ProductsSelectionMap){
  // call the BE here
  console.log("Updating selections on BE: ", productsSelectionMap);
}



function App() {
 
  const [productsSelectionMap, setProductsSelectionMap] = useState<ProductsSelectionMap>(() => {
    const cachedData = localStorage.getItem("productSelectionMap");
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    
    // Create the initial map if no cache exists
    const map: ProductsSelectionMap = {};
    products.forEach(product => {
      map[product.id] = 0;
    });
    return map;
  });

  const debouncedUpdate = useRef(debounce(updateProductsSelectionMap, 3000));

  useEffect(() => {
    // every time productsSelectMap is updated: update the localStorage
    localStorage.setItem("productSelectionMap", JSON.stringify(productsSelectionMap));
    debouncedUpdate.current(productsSelectionMap);
  }, [productsSelectionMap]);

  return (
    <div className="app-wrapper">
      <Header productsSelectionMap={productsSelectionMap} />
      <div className="main-container">
        <CartSummary productsSelectionMap={productsSelectionMap} />
        <div className="slider-container">
          {products.map((product) => (
            <Product 
              key={product.id} 
              productInfo={product} 
              productsSelectionMap={productsSelectionMap} 
              setProductsSelectionMap={setProductsSelectionMap} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
