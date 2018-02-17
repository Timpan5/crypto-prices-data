import { connect } from 'react-redux';
import History from '../components/History';
import { setHistoryStartAttr, setHistoryEndAttr } from '../actions/historyActionCreators';

const actions = {
  setHistoryStartAttr,
  setHistoryEndAttr,
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return ({
    setHistoryStartAttr: dispatchProps.setHistoryStartAttr,
    setHistoryEndAttr: dispatchProps.setHistoryEndAttr,
  });
}

export default connect(null, actions, mergeProps)(History);
