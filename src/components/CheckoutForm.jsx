import { h } from 'preact';
import { useState } from 'preact/hooks';

const CheckoutForm = ({ product }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert('Nama dan nomor WA wajib diisi!');
      return;
    }

    const checkoutData = {
      ...form,
      product
    };

    localStorage.setItem('checkout', JSON.stringify(checkoutData));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div class="alert alert-success text-center">
        Terima kasih, <strong>{form.name}</strong>! Pesanan <strong>{product.name}</strong> kamu sudah tercatat. Kami akan hubungi via WhatsApp ☕
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label class="form-label">Nama</label>
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="Nama lengkap kamu"
          value={form.name}
          onInput={handleChange}
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Nomor WhatsApp</label>
        <input
          type="tel"
          class="form-control"
          name="phone"
          placeholder="08xxxxxxxxxx"
          value={form.phone}
          onInput={handleChange}
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Catatan Tambahan</label>
        <textarea
          class="form-control"
          name="note"
          placeholder="Tanpa gula / ekstra es / dll (opsional)"
          rows="3"
          value={form.note}
          onInput={handleChange}
        />
      </div>

      <button type="submit" class="btn btn-dark w-100">Checkout Sekarang</button>
    </form>
  );
};

export default CheckoutForm;
