import { h } from 'preact';
import { useState } from 'preact/hooks';
import CheckoutForm from './CheckoutForm';

const CartItem = ({ product }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <div class="card mb-3 border-dark shadow-sm">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 class="fw-bold">{product.name}</h6>
          <p class="mb-1 text-muted">Rp {product.price.toLocaleString()}</p>
        </div>
        <button class="btn btn-success" onClick={handleCheckout}>Checkout</button>
      </div>
      {showCheckout && (
        <div class="p-3 border-top">
          <CheckoutForm product={product} />
        </div>
      )}
    </div>
  );
};

export default CartItem;
