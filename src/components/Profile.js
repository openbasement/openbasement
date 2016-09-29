import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import { I18n } from 'react-redux-i18n';

import { openProfileAction, closeProfileAction } from '../actions';

class ProfileComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      closeProfile: React.PropTypes.func.isRequired,
      openProfile: React.PropTypes.func.isRequired
    }),
    isProfileOpened: React.PropTypes.bool,
    locale: React.PropTypes.string.isRequired
  }

  render() {
    const { isProfileOpened } = this.props;
    const { closeProfile, openProfile } = this.props.actions;
    return (
      <li>
        <a onClick={openProfile}>{I18n.t('profile.menu')}</a>
        <Modal
            className="modal"
            isOpen={isProfileOpened}>
          <h2>{I18n.t('profile.title')}</h2>
          <i className="fa fa-close close-modal" onClick={closeProfile} />
          <div>{I18n.t('profile.content')}</div>
        </Modal>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    isProfileOpened: state.ui.isProfileOpened,
    locale: state.i18n.locale
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      closeProfile: () => dispatch(closeProfileAction()),
      openProfile: () => dispatch(openProfileAction())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
