import { connect } from 'react-redux';
import Header from '../components/Header';
import { coinNameUpdate, beginCoinSearch } from '../actions/headerActionCreators';
import { Map } from 'immutable';
import { getCoinList } from '../sources/searchSources';
import { setCoinSearchOptions } from '../actions/headerActionCreators';

const coinOptions = new Map({
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
});

const actions = {
  coinNameUpdate,
  setCoinSearchOptions,
  beginCoinSearch,
}

const mapStateToProps = (state) => {
  const coin = state.get('currentCoin');
  const coinSearchOptions = state.get('coinSearchOptions');
  return ({
    coin,
    coinSearchOptions,
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps)  => {
  const coinSearchOptions = stateProps.coinSearchOptions.map((option) => JSON.parse(option));
  return ({
    coin: stateProps.coin,
    coinNameUpdate: dispatchProps.coinNameUpdate,
    coinOptions,
    handleInputChange: dispatchProps.beginCoinSearch,
    getCoinList,
    setCoinSearchOptions: dispatchProps.setCoinSearchOptions,
    coinSearchOptions,
  });
};

export default connect(mapStateToProps, actions, mergeProps)(Header);
