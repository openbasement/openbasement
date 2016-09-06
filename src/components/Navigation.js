import React from 'react';

class NavigationComponent extends React.Component {
  render() {
    return (
      <nav id="navigation">
        <ul>
          <li><a href="#">Home</a></li>
        </ul>
      </nav>
    );
  }
}

NavigationComponent.defaultProps = {
};

export default NavigationComponent;
