import { h } from 'preact';

const Footer = () => {
  return (
    <footer class="bg-dark text-white text-center py-3 mt-auto">
      <small>
        &copy; {new Date().getFullYear()} Kopi Keangan. All rights reserved ☕
      </small>
    </footer>
  );
};

export default Footer;
