import React from 'react';

import HeaderContainer from '../../containers/headerContainer';
import GlossaryContainer from '../../containers/glossaryContainer';

import './style.css';

const Layout = () => {
  return (
    <div className="layout">
      <HeaderContainer />

      <main className="main">
        <GlossaryContainer />
      </main>
    </div>
  );
};

export default Layout;
