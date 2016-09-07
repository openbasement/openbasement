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
};

export default NavigationComponent;
