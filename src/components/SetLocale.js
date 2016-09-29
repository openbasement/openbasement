import { connect } from 'react-redux';
import React from 'react';
import { I18n } from 'react-redux-i18n';

import mapDispatchToProps from '../actions';

@connect(mapStateToProps, mapDispatchToProps)
export default class SetLocaleComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      setLocaleTo: React.PropTypes.func.isRequired
    }),
    locale: React.PropTypes.string.isRequired
  }

  render() {
    const { setLocaleTo } = this.props.actions;
    return (
      <p>
        <b><a onClick={setLocaleTo('en')}>{I18n.t('settings.locale.en')}</a></b>
        &nbsp; &nbsp;
        <b><a onClick={setLocaleTo('pl')}>{I18n.t('settings.locale.pl')}</a></b>
      </p>
    );
  }
}

function mapStateToProps(state) {
  return {
    locale: state.i18n.locale
  };
}
