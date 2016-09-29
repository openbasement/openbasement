import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions';
import Main from '../components/Main';

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
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
