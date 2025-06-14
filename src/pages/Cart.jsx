import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart_items')) || [];
    setItems(cartData);
  }, []);

  const handleCheckout = (item) => {
    localStorage.setItem('cart', JSON.stringify(item));
    window.location.href = '/checkout';
  };

  const handleRemove = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    localStorage.setItem('cart_items', JSON.stringify(updated));
    setItems(updated);
  };

  return (
    <div class="container py-5">
      <h2 class="fw-bold mb-4 text-center">Keranjang Kamu 🧺</h2>

      {items.length === 0 ? (
        <div class="alert alert-warning text-center">
          Belum ada produk di keranjang.
          <div class="mt-3">
            <a href="/" class="btn btn-dark">Kembali ke Menu</a>
          </div>
        </div>
      ) : (
        <div class="list-group">
          {items.map((item, index) => (
            <div key={index} class="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h6 class="mb-0">{item.name}</h6>
                <small class="text-muted">Rp {item.price.toLocaleString()}</small>
              </div>
              <div class="d-flex gap-2">
                <button
                  class="btn btn-sm btn-success"
                  onClick={() => handleCheckout(item)}
                >
                  Checkout
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  onClick={() => handleRemove(index)}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
