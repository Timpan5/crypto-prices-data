import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Typeahead } from 'react-bootstrap-typeahead';
import functional from 'react-functional'

var options = [
  'John',
  'Miles',
  'Charles',
  'Herbie',
];

function Header(props) {
  const renderCoinButton = (abbreviation, coinName) => (
    <button type="button" className="btn btn-default navbar-btn" key={abbreviation}
      onClick={() => props.coinNameUpdate(abbreviation)}>
      {coinName}
    </button>
  );

  const coinButtons = props.coinOptions.reduce((buttons, name, abbreviation) => (
    buttons.concat([renderCoinButton(abbreviation, name)])
  ), []);

  function renderTypeahead() {
    return (
      <nav id="typeahead-container">
        <Typeahead
          labelKey="name"
          options={options}
          placeholder="Enter coin name..."
          onInputChange={props.handleInputChange}
        />
      </nav>
    );
  }

  return (
    <div id="header">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">Crypto Prices</span>
            {coinButtons}
            {renderTypeahead()}
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.componentDidMount = (props) => {
  props.getCoinList(props.setCoinSearchOptions);
};

Header.propTypes = {
  coin: PropTypes.string.isRequired,
  coinNameUpdate: PropTypes.func.isRequired,
  coinOptions: ImmutablePropTypes.map.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  getCoinList: PropTypes.func.isRequired,
  setCoinSearchOptions: PropTypes.func.isRequired,
};

export default functional(Header);
