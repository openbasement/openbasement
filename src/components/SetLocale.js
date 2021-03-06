import { connect } from 'react-redux';
import React from 'react';
import { I18n } from 'react-redux-i18n';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';

@connect(mapStateToProps, mapDispatchToProps)
export default class SetLocaleComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      setLocale: React.PropTypes.func.isRequired
    }),
    i18n: React.PropTypes.shape({
      locale: React.PropTypes.string.isRequired
    })
  }

  render() {
    const { setLocale } = this.props.actions;
    const setLocaleTo = (locale) => () => setLocale(locale);
    return (
      <p>
        <b><a onClick={setLocaleTo('en')}>{I18n.t('settings.locale.en')}</a></b>
        &nbsp; &nbsp;
        <b><a onClick={setLocaleTo('pl')}>{I18n.t('settings.locale.pl')}</a></b>
      </p>
    );
  }
}
