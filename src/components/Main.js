import 'normalize.css/normalize.css';
import '../styles/App.scss';

import { connect } from 'react-redux';
import React from 'react';
import { I18n } from 'react-redux-i18n';

import Navigation from './Navigation';
import SideNotes from './SideNotes';
import Journal from './Journal';
import Welcome from './Welcome';

import mapDispatchToProps from '../actions';

const mapStateToProps = state => ({
  locale: state.i18n.locale
});

@connect(mapStateToProps, mapDispatchToProps)
export default class AppComponent extends React.Component {
  static propTypes = {
    locale: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="index">
        <header>
          <div className="wrapper">
            <img src="images/logo.svg" />
            <h1>{I18n.t('page.title')}</h1>
            <h2>{I18n.t('page.subtitle')}</h2>
          </div>
        </header>
        <Navigation />
        <div id="content-container">
          <SideNotes />
          <Journal />
        </div>
        <footer>{I18n.t('page.footer')} - <a href="https://github.com/openbasement/openbasement#openbasement">{I18n.t('page.about')}</a></footer>
        <Welcome />
      </div>
    );
  }
}
