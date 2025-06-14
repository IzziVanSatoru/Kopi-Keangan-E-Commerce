import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === parseInt(id));
        if (!found) return route('/products');
        setProduct(found);
      });
  }, [id]);

  if (!product) return <div class="text-center mt-5">Loading...</div>;

  return (
    <div class="container py-5">
      <div class="card shadow-sm p-4">
        <h2 class="fw-bold">{product.name}</h2>
        <p class="text-muted">{product.description}</p>
        <p class="fw-bold text-danger">Rp {product.price.toLocaleString()}</p>
        <button class="btn btn-warning">Beli Sekarang</button>
      </div>
    </div>
  );
};

export default ProductDetail;
