import { h } from 'preact';
import { Link } from 'preact-router/match';

const Home = () => {
  return (
    <section class="container py-5 d-flex flex-column align-items-center text-center">
      <h1 class="fw-bold display-5 mb-3 text-warning">Selamat Datang di Kopi Keangan</h1>
      <p class="lead text-muted mb-4">
        Temukan kopi terenak untuk menemani harimu. Dari klasik hingga modern, semua ada di sini ☕
      </p>
      <Link href="/products" class="btn btn-warning btn-lg px-4 shadow">
        Lihat Menu
      </Link>
    </section>
  );
};

export default Home;
