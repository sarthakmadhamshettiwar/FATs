import './App.css'

// importing data
import products from "./data/products";
import Product from "./components/card/products/product";

function App() {
  return (
    <div className="main-container">
      <div className="slider-container">
        {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}

export default App
