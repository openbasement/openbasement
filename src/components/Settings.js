import { connect } from 'react-redux';
import Modal from 'react-modal';
import React from 'react';
import T from 'i18n-react';

import { openSettingsAction, closeSettingsAction } from 'actions/UiActions';

class SettingsComponent extends React.Component {
  render() {
    const isSettingsOpened = this.props.isSettingsOpened;
    const closeSettings = this.props.actions.closeSettings;
    const openSettings = this.props.actions.openSettings;
    return (
      <li>
        <T.a text="Settings" href="#" onClick={openSettings} />
        <Modal
            isOpen={isSettingsOpened}
            className="modal">
          <h2>{T.translate('settings-title')}</h2>
          <i className="fa fa-close close-modal" onClick={closeSettings} />
          <div>{T.translate('settings-content')}</div>
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
  isSettingsOpened: false
};

function mapStateToProps(state) {
  return {
    isSettingsOpened: state.ui.isSettingsOpened
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
