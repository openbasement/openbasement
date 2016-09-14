import { connect } from 'react-redux';
import React from 'react';
import T from 'i18n-react';

class NotificationsComponent extends React.Component {
  render() {
    return (
      <section id="notifications">
        <h3><i className="fa fa-exclamation" /> {T.translate('Notifications')}</h3>
        <T.div text="no-notifications" />
      </section>
    );
  }
}

NotificationsComponent.defaultProps = {
  actions: {}
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent);
