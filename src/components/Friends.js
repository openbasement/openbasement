import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import T from 'i18n-react';

import { openFriendsAction, closeFriendsAction } from 'actions/UiActions';

class FriendsComponent extends React.Component {
  render() {
    const isFriendsOpened = this.props.isFriendsOpened;
    const closeFriends = this.props.actions.closeFriends;
    const openFriends = this.props.actions.openFriends;
    return (
      <li>
        <T.a text="Friends" href="#" onClick={openFriends} />
        <Modal
            isOpen={isFriendsOpened}
            className="modal">
          <h2>{T.translate('friends-title')}</h2>
          <i className="fa fa-close close-modal" onClick={closeFriends} />
          <div>{T.translate('friends-content')}</div>
        </Modal>
      </li>
    );
  }
}

FriendsComponent.defaultProps = {
  actions: {
    closeFriends: () => undefined,
    openFriends: () => undefined
  },
  isFriendsOpened: false
};

function mapStateToProps(state) {
  return {
    isFriendsOpened: state.ui.isFriendsOpened
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      closeFriends: () => dispatch(closeFriendsAction()),
      openFriends: () => dispatch(openFriendsAction())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsComponent);
