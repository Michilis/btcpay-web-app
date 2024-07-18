import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Store = () => {
  const { user } = useContext(AuthContext);
  const [amount, setAmount] = useState('');
  const [credits, setCredits] = useState(user.credits);

  const handleAddCredits = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/stores/add-credits', { amount }, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    setCredits(res.data.credits);
  };

  return (
    <div>
      <h1>Manage Store</h1>
      <p>Current Credits: {credits} BTC</p>
      <form onSubmit={handleAddCredits}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Credits</button>
      </form>
    </div>
  );
};

export default Store;
