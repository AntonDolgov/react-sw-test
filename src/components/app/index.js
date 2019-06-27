import React from 'react';
import { Provider } from 'react-redux';

import Layout from './../layout';
import store from '../../store';

import './style.css';

const App = () => {
  return (
    <Provider store={store}>
        <Layout />
    </Provider>
  );
};

export default App;
