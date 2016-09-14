import { connect } from 'react-redux';
import React from 'react';
import T from 'i18n-react';

class NavigationComponent extends React.Component {
  render() {
    return (
      <nav id="navigation">
        <ul>
          <li><T.a text="Profile" href="#" /></li>
          <li><T.a text="Friends" href="#" /></li>
          <li><T.a text="Settings" href="#" /></li>
        </ul>
      </nav>
    );
  }
}

NavigationComponent.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);
