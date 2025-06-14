# 🛍️ Kopi Keangan E-Commerce

## 🇮🇩 Bahasa Indonesia

### Deskripsi
Kopi Keangan adalah aplikasi e-commerce berbasis web yang memungkinkan pengguna untuk:
- Menjelajahi daftar produk kopi.
- Menambahkan produk ke keranjang.
- Melakukan pembelian langsung atau checkout.

### Teknologi yang Digunakan
- Vite
- Preact (JavaScript)
- Bootstrap 5 CDN (tanpa CSS custom)
- localStorage (untuk menyimpan data keranjang dan checkout)
- Dummy JSON file untuk data produk

### Struktur Folder
```
├── public/
│   └── data/
│       └── products.json      # Data produk dummy (4 item)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigasi utama responsive
│   │   ├── Footer.jsx         # Footer kecil responsif
│   │   ├── ProductCard.jsx    # Kartu produk dengan tombol beli & keranjang
│   │   ├── CartItem.jsx       # Komponen item dalam keranjang
│   │   └── CheckoutForm.jsx   # Form checkout dengan validasi
│   ├── pages/
│   │   ├── Home.jsx           # Halaman awal
│   │   ├── Cart.jsx           # Halaman keranjang
│   │   └── Checkout.jsx       # Halaman checkout
│   ├── router/
│   │   └── index.js           # Routing menggunakan preact-router
│   ├── App.jsx                # Layout utama + router
│   └── main.jsx               # Entry point aplikasi
└── index.html                 # HTML utama, include Bootstrap 5
```

### Fitur
- Tambah ke Keranjang: Simpan banyak item di localStorage.cart_items
- Beli Sekarang: Simpan 1 produk ke localStorage.cart lalu redirect ke checkout
- Checkout: Isi nama, WhatsApp, dan catatan tambahan

---

## 🇬🇧 English Version

### Description
Kopi Keangan is a web-based e-commerce app that allows users to:
- Browse coffee products
- Add items to a cart
- Purchase directly or go to checkout

### Tech Stack
- Vite
- Preact (JavaScript)
- Bootstrap 5 via CDN (no custom CSS)
- localStorage for cart & checkout
- Dummy JSON file for product data

### Folder Structure
```
.
├── public/
│   └── data/
│       └── products.json      # Dummy product data (4 items)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Responsive navigation
│   │   ├── Footer.jsx         # Simple responsive footer
│   │   ├── ProductCard.jsx    # Product cards with buy & cart buttons
│   │   ├── CartItem.jsx       # Item component in cart
│   │   └── CheckoutForm.jsx   # Checkout form with validation
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── Cart.jsx           # Shopping cart page
│   │   └── Checkout.jsx       # Checkout page
│   ├── router/
│   │   └── index.js           # preact-router routing config
│   ├── App.jsx                # Main layout + router
│   └── main.jsx               # App entry point
└── index.html                 # Base HTML, includes Bootstrap 5
```

### Features
- Add to Cart: Store multiple items in localStorage.cart_items
- Buy Now: Store 1 product in localStorage.cart and redirect to checkout
- Checkout: Fill in name, WhatsApp, and extra note

---

🧋 Built with izzi van satoru