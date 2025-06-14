import { h } from 'preact';
import { Router } from 'preact-router';
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

const AppRouter = () => (
  <Router>
    <Home path="/" />
    <ProductList path="/products" />
    <ProductDetail path="/product/:id" />
    <Cart path="/cart" />
    <Checkout path="/checkout" />
  </Router>
);

export default AppRouter;
