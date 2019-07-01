import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from '../../containers/headerContainer';
import GlossaryContainer from '../../containers/glossaryContainer';

import './style.css';

const Layout = () => {
  return (
    <div className="layout">
      <HeaderContainer />

      <main className="main">
        <Route path="/glossary" component={GlossaryContainer}/>
      </main>
    </div>
  );
};

export default Layout;
