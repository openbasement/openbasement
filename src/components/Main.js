import 'normalize.css/normalize.css';
import 'styles/App.scss';

import { connect } from 'react-redux';
import React from 'react';
import T from 'i18n-react';

import Navigation from 'components/Navigation';
import SideNotes from 'components/SideNotes';
import Journal from 'components/Journal';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <header>
          <div className="wrapper">
            <img src="images/logo.svg" />
            <T.text tag="h1" text="title"/>
            <T.text tag="h2" text="subtitle"/>
          </div>
        </header>
        <Navigation />
        <div id="content-container">
          <SideNotes />
          <Journal />
        </div>
        <footer>{T.translate('footer')} - <a href="https://github.com/openbasement/openbasement#openbasement">{T.translate('about')}</a></footer>
      </div>
    );
  }
}

AppComponent.defaultProps = {
  actions: {}
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
