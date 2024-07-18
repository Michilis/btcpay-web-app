import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Subscription from './components/Subscription';
import Store from './components/Store';
import AuthProvider from './context/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/subscribe" component={Subscription} />
          <Route path="/store" component={Store} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
