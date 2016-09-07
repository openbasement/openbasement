import React from 'react';

class NavigationComponent extends React.Component {
  render() {
    return (
      <nav id="navigation">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Friends</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    );
  }
}

NavigationComponent.defaultProps = {
};

export default NavigationComponent;
