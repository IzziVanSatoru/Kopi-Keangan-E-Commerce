import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './router/index.jsx';

const App = () => {
  useEffect(() => {
    // Load Bootstrap 5 CDN once
    const bootstrap = document.createElement('link');
    bootstrap.rel = 'stylesheet';
    bootstrap.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrap);

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div class="d-flex flex-column min-vh-100">
      <Navbar />
      <main class="flex-grow-1">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
