import React from 'react';
import './Layout.scss'
import Home from './Home';

class Layout extends React.Component {
  render() {
    return (
      <main className="default_layout">
        <Home />
      </main>
    );
  }
}

export default Layout;
