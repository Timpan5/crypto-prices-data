import { connect } from 'react-redux';
import Header from '../components/Header';
import { coinNameUpdate } from '../actions/headerActionCreators';
import { Map } from 'immutable';
import { getCoinList } from '../sources/searchSources';
import { setCoinSearchOptions } from '../actions/headerActionCreators';

const coinOptions = new Map({
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
});

function handleInputChange(text) {
  alert(text);
}

const actions = {
  coinNameUpdate,
  setCoinSearchOptions,
}

const mapStateToProps = (state) => {
  const currentCoin = state.get('currentCoin');
  return ({
    coin: currentCoin,
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps)  => {
  return ({
    coin: stateProps.coin,
    coinNameUpdate: dispatchProps.coinNameUpdate,
    coinOptions,
    handleInputChange,
    getCoinList,
    setCoinSearchOptions: dispatchProps.setCoinSearchOptions,
  });
};

export default connect(mapStateToProps, actions, mergeProps)(Header);
