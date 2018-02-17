import { connect } from 'react-redux';
import { Map } from 'immutable';
import SelectDropdown from '../components/SelectDropdown';

function mapStateToProps(state, ownProps) {
  return ({
    historyValues: state.get(ownProps.historyBoundary) || new Map(),
  });
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const historyValues = stateProps.historyValues;
  const changeHandler = ownProps.changeHandler;

  return ({
    label: ownProps.label,
    year: historyValues.get('year', null),
    month: historyValues.get('month', null),
    date: historyValues.get('date', null),
    yearChangeHandler: (year) => changeHandler('year', year),
    monthChangeHandler: (month) => changeHandler('month', month),
    dateChangeHandler: (date) => changeHandler('date', date),
  });
}

export default connect(mapStateToProps, null, mergeProps)(SelectDropdown);
