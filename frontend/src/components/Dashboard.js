import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [subscriptions, setSubscriptions] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const res = await axios.get('/api/subscriptions', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setSubscriptions(res.data);
    };

    const fetchStores = async () => {
      const res = await axios.get('/api/stores', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setStores(res.data);
    };

    fetchSubscriptions();
    fetchStores();
  }, []);

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <h2>Subscriptions</h2>
      <ul>
        {subscriptions.map(sub => (
          <li key={sub._id}>{sub.period} - {sub.price} EUR - Expires at {new Date(sub.expiresAt).toLocaleDateString()}</li>
        ))}
      </ul>
      <h2>Stores</h2>
      <ul>
        {stores.map(store => (
          <li key={store._id}>Store ID: {store.btcpayStoreId} - Credits: {store.credits} BTC</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
