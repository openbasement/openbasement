import React from 'react';
import T from 'i18n-react';

class InteractionsComponent extends React.Component {
  render() {
    return (
      <section id="interactions">
        <h3><i className="fa fa-group" /> {T.translate('Interactions')}</h3>
        <T.div text="no-interactions" />
      </section>
    );
  }
}

InteractionsComponent.defaultProps = {
};

export default InteractionsComponent;
