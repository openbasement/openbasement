import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import T from 'i18n-react';

import { openProfileAction, closeProfileAction } from '../actions/uiActions';

class ProfileComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      closeProfile: React.PropTypes.func.isRequired,
      openProfile: React.PropTypes.func.isRequired
    }),
    isProfileOpened: React.PropTypes.bool
  }

  render() {
    const { isProfileOpened } = this.props;
    const { closeProfile, openProfile } = this.props.actions;
    return (
      <li>
        <T.a onClick={openProfile} text="Profile" />
        <Modal
            className="modal"
            isOpen={isProfileOpened}>
          <h2>{T.translate('profile-title')}</h2>
          <i className="fa fa-close close-modal" onClick={closeProfile} />
          <div>{T.translate('profile-content')}</div>
        </Modal>
      </li>
    );
  }
}

ProfileComponent.defaultProps = {
  actions: {
    closeProfile: () => undefined,
    openProfile: () => undefined
  },
  isProfileOpened: false
};

function mapStateToProps(state) {
  return {
    isProfileOpened: state.ui.isProfileOpened
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
