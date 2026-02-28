import './Header.css';
import type { ProductsQuantityMap } from '../../types';

interface HeaderProps {
  productsQuantityMap: ProductsQuantityMap;
}

function Header({ productsQuantityMap }: HeaderProps) {
  const totalItems = Object.values(productsQuantityMap).reduce((sum, qty) => sum + qty, 0);

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="app-title">🛒 Shopping Cart</h1>
        </div>
        <div className="header-right">
          <div className="cart-icon-container">
            <svg 
              className="cart-icon" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
