import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import { I18n } from 'react-redux-i18n';

import { closeWelcomeAction } from '../actions';
import SetLocale from './SetLocale';

class WelcomeComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      closeWelcome: React.PropTypes.func.isRequired
    }),
    isWelcomeOpened: React.PropTypes.bool,
    locale: React.PropTypes.string.isRequired
  }

  render() {
    const { isWelcomeOpened } = this.props;
    const { closeWelcome } = this.props.actions;
    return (
      <Modal
          className="modal"
          isOpen={isWelcomeOpened}>
        <h2>{I18n.t('welcome.title')}</h2>
        <i className="fa fa-close close-modal" onClick={closeWelcome} />
        <div>
          <p>{I18n.t('welcome.content-1')}</p>
          <p>{I18n.t('welcome.content-2')}</p>
          <p>{I18n.t('welcome.content-3')}</p>
          <p>{I18n.t('welcome.content-4')}</p>
          <ul>
            <li>{I18n.t('welcome.content-5')}</li>
            <li>{I18n.t('welcome.content-6')}</li>
            <li>{I18n.t('welcome.content-7')}</li>
            <li>{I18n.t('welcome.content-8')}</li>
            <li>{I18n.t('welcome.content-9')}</li>
          </ul>
          <SetLocale />
        </div>
      </Modal>
    );
  }
}

WelcomeComponent.defaultProps = {
  actions: {
    closeWelcome: () => undefined
  },
  isWelcomeOpened: true,
  locale: ''
};

function mapStateToProps(state) {
  return {
    isWelcomeOpened: state.ui.isWelcomeOpened,
    locale: state.i18n.locale
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      closeWelcome: () => dispatch(closeWelcomeAction())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeComponent);
