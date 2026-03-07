import './App.css';
import { useState, useMemo } from 'react';

// importing data
import products from "./data/products";
import Product from "./components/card/products/product";
import CartSummary from "./components/cart/CartSummary";
import Header from "./components/header/Header";
import type { ProductsQuantityMap } from './types';

function App() {
  const initialMap = useMemo<ProductsQuantityMap>(() => {
    const map: ProductsQuantityMap = {};
    products.forEach(product => {
      map[product.id] = 0;
    });
    return map;
  }, []);
  
  const [productsQuantityMap, setProductsQuantityMap] = useState<ProductsQuantityMap>(initialMap);

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
