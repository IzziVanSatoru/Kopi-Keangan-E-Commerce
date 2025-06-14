import { h } from 'preact';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  return (
    <section class="container py-5">
      <h2 class="mb-4 text-center fw-bold">Menu Kopi Kami</h2>
      <ProductCard />
    </section>
  );
};

export default ProductList;
