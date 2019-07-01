import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { SwapiServiceProvider } from '../../context/swapi-service-context';
import SwapiService from '../../services/swapi-service';

import Layout from './../layout';
import store from '../../store';

import './style.css';

const swapiService = new SwapiService();

const App = () => {
  return (
    <Provider store={store}>
      <SwapiServiceProvider value={swapiService}>
        <Router>
          <Layout />
        </Router>
      </SwapiServiceProvider>
    </Provider>
  );
};

export default App;
