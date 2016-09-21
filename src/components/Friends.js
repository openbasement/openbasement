import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import T from 'i18n-react';

import { openFriendsAction, closeFriendsAction } from '../actions';

class FriendsComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      closeFriends: React.PropTypes.func.isRequired,
      openFriends: React.PropTypes.func.isRequired
    }),
    isFriendsOpened: React.PropTypes.bool
  }

  render() {
    const { isFriendsOpened } = this.props;
    const { closeFriends, openFriends } = this.props.actions;
    return (
      <li>
        <T.a onClick={openFriends} text="Friends" />
        <Modal
            className="modal"
            isOpen={isFriendsOpened}>
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
