import { connect } from 'react-redux';
import History from '../components/History';
import { setHistoryStartAttr, setHistoryEndAttr, beginHistoryLookup } from '../actions/historyActionCreators';

const actions = {
  setHistoryStartAttr,
  setHistoryEndAttr,
  beginHistoryLookup,
};

function mapStateToProps(state) {
  return ({
    historyData: state.get('historyData', null),
  });
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return ({
    setHistoryStartAttr: dispatchProps.setHistoryStartAttr,
    setHistoryEndAttr: dispatchProps.setHistoryEndAttr,
    beginHistoryLookup: dispatchProps.beginHistoryLookup,
    historyData: stateProps.historyData,
  });
}

export default connect(mapStateToProps, actions, mergeProps)(History);
