import React from 'react';
import PropTypes from 'prop-types';
import SelectDropdownContainer from '../containers/SelectDropdownContainer';

function renderDateSelect(label, boundary, changeHandler) {
  return (
    <SelectDropdownContainer
      label={label}
      historyBoundary={boundary}
      changeHandler={changeHandler}
    />
  );
}

function History(props) {
  return (
    <div id="history-container">
      <h1 className="display-4">Historical Data</h1>
      {renderDateSelect("Start Date", "historyStart", props.setHistoryStartAttr)}
      {renderDateSelect("End Date", "historyEnd", props.setHistoryEndAttr)}
      <button onClick={props.beginHistoryLookup}>Lookup</button>
    </div>
  );
}

History.propTypes = {
  setHistoryStartAttr: PropTypes.func.isRequired,
  setHistoryEndAttr: PropTypes.func.isRequired,
  beginHistoryLookup: PropTypes.func.isRequired,
};

export default History;
