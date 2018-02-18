import { connect } from 'react-redux';
import History from '../components/History';
import { setHistoryStartAttr, setHistoryEndAttr, beginHistoryLookup } from '../actions/historyActionCreators';

const actions = {
  setHistoryStartAttr,
  setHistoryEndAttr,
  beginHistoryLookup,
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return ({
    setHistoryStartAttr: dispatchProps.setHistoryStartAttr,
    setHistoryEndAttr: dispatchProps.setHistoryEndAttr,
    beginHistoryLookup: dispatchProps.beginHistoryLookup,
  });
}

export default connect(null, actions, mergeProps)(History);
