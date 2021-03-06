import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import { I18n } from 'react-redux-i18n';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';

@connect(mapStateToProps, mapDispatchToProps)
export default class FriendsComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      closeFriends: React.PropTypes.func.isRequired,
      openFriends: React.PropTypes.func.isRequired
    }),
    i18n: React.PropTypes.shape({
      locale: React.PropTypes.string.isRequired
    }),
    ui: React.PropTypes.shape({
      isFriendsOpened: React.PropTypes.bool
    })
  }

  render() {
    const { isFriendsOpened } = this.props.ui;
    const { closeFriends, openFriends } = this.props.actions;
    return (
      <li>
        <a onClick={openFriends}>{I18n.t('friends.menu')}</a>
        <Modal
            className="modal"
            isOpen={isFriendsOpened}>
          <h2>{I18n.t('friends.title')}</h2>
          <i className="fa fa-close close-modal" onClick={closeFriends} />
          <div>{I18n.t('friends.content')}</div>
        </Modal>
      </li>
    );
  }
}
