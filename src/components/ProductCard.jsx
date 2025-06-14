import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleBuyNow = (product) => {
    localStorage.setItem('cart', JSON.stringify(product));
    window.location.href = '/checkout';
  };

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart_items')) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart_items', JSON.stringify(updatedCart));
    alert(`"${product.name}" ditambahkan ke keranjang 🧺`);
  };

  return (
    <div class="container">
      <h2 class="text-center fw-bold mb-5">Menu Kopi Kenangan ☕</h2>
      <div class="row g-4">
        {products.map(product => (
          <div class="col-md-6 col-lg-4" key={product.id}>
            <div class="card h-100 shadow-sm">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text text-muted">{product.description}</p>
                <p class="mt-auto fw-bold text-danger">Rp {product.price.toLocaleString()}</p>
                <div class="d-flex gap-2 mt-3">
                  <button
                    class="btn btn-outline-dark w-50"
                    onClick={() => handleAddToCart(product)}
                  >
                    + Keranjang
                  </button>
                  <button
                    class="btn btn-dark w-50"
                    onClick={() => handleBuyNow(product)}
                  >
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
