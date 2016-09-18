import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import T from 'i18n-react';

import { openProfileAction, closeProfileAction } from 'actions/UiActions';

class ProfileComponent extends React.Component {
  render() {
    const isProfileOpened = this.props.isProfileOpened;
    const closeProfile = this.props.actions.closeProfile;
    const openProfile = this.props.actions.openProfile;
    return (
      <li>
        <T.a text="Profile" href="#" onClick={openProfile} />
        <Modal
            isOpen={isProfileOpened}
            className="modal">
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
