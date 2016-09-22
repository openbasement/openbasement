import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import { I18n } from 'react-redux-i18n';

import { openSettingsAction, closeSettingsAction } from '../actions';
import SetLocale from './SetLocale';

class SettingsComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      closeSettings: React.PropTypes.func.isRequired,
      openSettings: React.PropTypes.func.isRequired
    }),
    isSettingsOpened: React.PropTypes.bool,
    locale: React.PropTypes.string.isRequired
  }

  render() {
    const { isSettingsOpened } = this.props;
    const { closeSettings, openSettings } = this.props.actions;
    return (
      <li>
        <a onClick={openSettings}>{I18n.t('settings.menu')}</a>
        <Modal
            className="modal"
            isOpen={isSettingsOpened}>
          <h2>{I18n.t('settings.title')}</h2>
          <i className="fa fa-close close-modal" onClick={closeSettings} />
          <div>
            <p>{I18n.t('settings.content')}</p>
            <SetLocale />
          </div>
        </Modal>
      </li>
    );
  }
}

SettingsComponent.defaultProps = {
  actions: {
    closeSettings: () => undefined,
    openSettings: () => undefined
  },
  isSettingsOpened: false,
  locale: ''
};

function mapStateToProps(state) {
  return {
    isSettingsOpened: state.ui.isSettingsOpened,
    locale: state.i18n.locale
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      closeSettings: () => dispatch(closeSettingsAction()),
      openSettings: () => dispatch(openSettingsAction())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsComponent);
