import React, { useState } from 'react';
import axios from 'axios';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [invoiceUrl, setInvoiceUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/subscriptions/subscribe', { email }, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    setInvoiceUrl(res.data.invoiceUrl);
  };

  return (
    <div>
      <h1>Subscribe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {invoiceUrl && <p>Pay the invoice <a href={invoiceUrl}>here</a></p>}
    </div>
  );
};

export default Subscription;
