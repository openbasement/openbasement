import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import { I18n } from 'react-redux-i18n';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';
import SetLocale from './SetLocale';

@connect(mapStateToProps, mapDispatchToProps)
export default class WelcomeComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      closeWelcome: React.PropTypes.func.isRequired
    }),
    i18n: React.PropTypes.shape({
      locale: React.PropTypes.string.isRequired
    }),
    ui: React.PropTypes.object.isRequired
  }

  render() {
    const { wasWelcomeClosed } = this.props.ui;
    const { closeWelcome } = this.props.actions;
    return (
      <Modal
          className="modal"
          isOpen={!wasWelcomeClosed}>
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
