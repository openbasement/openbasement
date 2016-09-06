import 'normalize.css/normalize.css';
import 'styles/App.scss';

import React from 'react';

import Navigation from 'components/Navigation';
import SideNotes from 'components/SideNotes';
import Journal from 'components/Journal';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <header>
          <h1>OpenBasement</h1>
          <h2>anti-social no-network</h2>
        </header>
        <Navigation />
        <SideNotes />
        <Journal />
        <footer>&not;&copy;2016 OpenBasement and (imagined) friends</footer>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
