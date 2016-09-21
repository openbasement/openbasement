import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import T from 'i18n-react';

import { closeWelcomeAction } from '../actions';

class WelcomeComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      closeWelcome: React.PropTypes.func.isRequired
    }),
    isWelcomeOpened: React.PropTypes.bool
  }

  render() {
    const { isWelcomeOpened } = this.props;
    const { closeWelcome } = this.props.actions;
    return (
      <Modal
          className="modal"
          isOpen={isWelcomeOpened}>
        <h2>{T.translate('welcome-title')}</h2>
        <i className="fa fa-close close-modal" onClick={closeWelcome} />
        <div>{T.translate('welcome-content')}</div>
      </Modal>
    );
  }
}

WelcomeComponent.defaultProps = {
  actions: {
    closeWelcome: () => undefined
  },
  isWelcomeOpened: true
};

function mapStateToProps(state) {
  return {
    isWelcomeOpened: state.ui.isWelcomeOpened
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
