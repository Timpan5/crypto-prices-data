import React from 'react';
import PropTypes from 'prop-types';
import SelectDropdownContainer from '../containers/SelectDropdownContainer';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

function renderDateSelect(label, boundary, changeHandler) {
  return (
    <SelectDropdownContainer
      label={label}
      historyBoundary={boundary}
      changeHandler={changeHandler}
    />
  );
}

function renderHistoryChart(historyData) {
  return (
    <div id="historychart">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={800} height={400} data={historyData}
           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="dateString" minTickGap={20} interval="preserveStartEnd" />
           <YAxis type="number" domain={['dataMin - 5', 'dataMax + 5']} allowDecimals={false} scale="linear" label={{ value: 'Price (USD)', angle: -90, position: 'insideLeft' }}/>
           <CartesianGrid strokeDasharray="3"/>
           <Tooltip/>
           <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={3.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function History(props) {
  return (
    <div id="history-container">
      <h1 className="display-4">Historical Data</h1>
      {renderDateSelect("Start Date", "historyStart", props.setHistoryStartAttr)}
      {renderDateSelect("End Date", "historyEnd", props.setHistoryEndAttr)}
      <button className="btn btn-info" onClick={props.beginHistoryLookup}>Lookup</button>
      {renderHistoryChart(props.historyData)}
    </div>
  );
}

History.propTypes = {
  setHistoryStartAttr: PropTypes.func.isRequired,
  setHistoryEndAttr: PropTypes.func.isRequired,
  beginHistoryLookup: PropTypes.func.isRequired,
  historyData: PropTypes.array,
};

export default History;
