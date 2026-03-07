import './CartSummary.css';
import type { ProductsSelectionMap } from '../../types';
import products from '../../data/products';

interface CartSummaryProps {
  productsSelectionMap: ProductsSelectionMap;
}

function CartSummary({ productsSelectionMap }: CartSummaryProps) {
  // Calculate total items and total price
  const totalItems = Object.values(productsSelectionMap).reduce((sum, qty) => sum + qty, 0);
  
  const totalPrice = Object.entries(productsSelectionMap).reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === Number(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  const hasItems = totalItems > 0;

  return (
    <div className={`cart-summary ${hasItems ? 'has-items' : ''}`}>
      <div className="cart-summary-content">
        <div className="cart-summary-row">
          <span className="cart-label">Total Items:</span>
          <span className="cart-value">{totalItems}</span>
        </div>
        <div className="cart-summary-row total-row">
          <span className="cart-label">Total Price:</span>
          <span className="cart-value total-price">${totalPrice.toFixed(2)}</span>
        </div>
        {hasItems && (
          <button className="checkout-button" onClick={() => alert('Checkout functionality coming soon!')}>
            Proceed to Checkout
          </button>
        )}
        {!hasItems && (
          <div className="empty-cart-message">
            Your cart is empty. Add items to get started!
          </div>
        )}
      </div>
    </div>
  );
}

export default CartSummary;
