import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem('cart'));
    if (storedProduct) {
      setProduct(storedProduct);
    }
  }, []);

  return (
    <section class="container py-5">
      <h2 class="mb-4 text-center fw-bold">Checkout Kopimu</h2>

      {!product ? (
        <div class="alert alert-warning text-center">
          Keranjang kamu kosong. Pilih produk dulu ya ☕
          <div class="mt-3">
            <a href="/" class="btn btn-dark">Kembali ke Menu</a>
          </div>
        </div>
      ) : (
        <>
          <div class="text-center mb-4">
            <h4 class="fw-bold">{product.name}</h4>
            <p class="text-muted">Rp {product.price.toLocaleString()}</p>
          </div>

          <div class="card shadow-sm p-4">
            <CheckoutForm product={product} />
          </div>
        </>
      )}
    </section>
  );
};

export default Checkout;
