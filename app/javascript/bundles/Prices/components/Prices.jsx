import PropTypes from 'prop-types';
import React from 'react';
import functional from 'react-functional'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PriceBoxContainer from '../containers/PriceBoxContainer';
import ReactLoading from 'react-loading';
// import PricePanelContainer from '../containers/PricePanelContainer';

const renderSpinner = () => (<ReactLoading className='spinner' type="spokes" color="#94ff11" />);

function renderPriceChart(priceData) {
  return (
    <div id="pricechart">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={800} height={400} data={priceData.toJS()}
           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis type="number" domain={['dataMin - 5', 'dataMax + 5']} allowDecimals={false} scale="linear" label={{ value: 'Price (USD)', angle: -90, position: 'left' }} />
           <CartesianGrid strokeDasharray="3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="Bitfinex" stroke="#8884d8" activeDot={{r: 8}} strokeWidth={2.5}/>
           <Line type="monotone" dataKey="Bittrex" stroke="#82ca9d" activeDot={{r: 8}} strokeWidth={2.5}/>
           <Line type="monotone" dataKey="Poloniex" stroke="#ff60aa" activeDot={{r: 8}} strokeWidth={2.5}/>
           <Line type="monotone" dataKey="Hitbtc" stroke="#15f7d1" activeDot={{r: 8}} strokeWidth={2.5}/>
           <Line type="monotone" dataKey="OKEx" stroke="#f7ab15" activeDot={{r: 8}} strokeWidth={2.5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function Prices(props) {
  return (
    <div>
      <h1 className="display-5">Live Data</h1>
      <PriceBoxContainer />
      {props.renderSpinner ? renderSpinner() : renderPriceChart(props.priceData)}
    </div>
  );
}

Prices.componentDidMount = (props) => {
  props.fetchCoinPrice();
  setInterval(props.fetchCoinPrice, 3500);
};

Prices.propTypes = {
  coin: PropTypes.string.isRequired,
  priceData: ImmutablePropTypes.list.isRequired,
  fetchCoinPrice: PropTypes.func.isRequired,
  renderSpinner: PropTypes.bool.isRequired,
};

export default functional(Prices);
