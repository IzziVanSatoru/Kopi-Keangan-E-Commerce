import { h } from 'preact';
import { Link } from 'preact-router/match';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <Link class="navbar-brand fw-bold text-warning" href="/">☕ Kopi Keangan</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link activeClassName="active" class="nav-link" href="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link activeClassName="active" class="nav-link" href="/products">Menu</Link>
            </li>
            <li class="nav-item">
              <Link activeClassName="active" class="nav-link" href="/cart">Cart</Link>
            </li>
            <li class="nav-item">
              <Link activeClassName="active" class="nav-link" href="/checkout">Checkout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
