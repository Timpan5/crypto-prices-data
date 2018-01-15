import PropTypes from 'prop-types';
import React from 'react';

function Header(props) {
  function generateClickHandler(coinName) {
    props.coinNameUpdate(coinName);
    props.fetchCoinPrice();
  }

  const renderBitcoinButton = () => (
    <button type="button" className="btn btn-default navbar-btn"
      onClick={() => generateClickHandler('BTC', props.coinNameUpdate, props.fetchCoinPrice)}>
      Bitcoin
    </button>
  );

  const renderEthereumButton = () => (
    <button type="button" className="btn btn-default navbar-btn"
      onClick={() => generateClickHandler('ETH', props.coinNameUpdate, props.fetchCoinPrice)}>
      Ethereum
    </button>
  );

  return (
    <div id="header">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">Crypto Prices</span>
            {renderBitcoinButton()}
            {renderEthereumButton()}
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  coin: PropTypes.string.isRequired,
  coinNameUpdate: PropTypes.func.isRequired,
  fetchCoinPrice: PropTypes.func.isRequired,
};

export default Header;