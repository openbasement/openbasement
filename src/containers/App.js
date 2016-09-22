import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from '../components/Main';

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  render() {
    const { actions } = this.props;
    return (
      <Main actions={actions} />
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
