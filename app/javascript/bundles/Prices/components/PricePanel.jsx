import React from 'react';
import PropTypes from 'prop-types';
import Sockette from 'sockette';

//Bitfinex ++

class PricePanel extends React.Component {
  constructor(props) {
    super(props);

    const ws = new Sockette('wss://api.bitfinex.com/ws/2', {
      timeout: 5e3,
      maxAttempts: 10,
      onopen: e => console.log('Connected!', e),
      onmessage: e => console.log('Received:', e),
      onreconnect: e => console.log('Reconnecting...', e),
      onmaximum: e => console.log('Stop Attempting!', e),
      onclose: e => console.log('Closed!', e),
      onerror: e => console.log('Error:', e)
    });

    this.state = { ws };
  }

  sendPing() {
    this.state.ws.json({
      "event": "subscribe",
      "channel": "ticker",
      "symbol": "tBTCUSD"
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.sendPing.bind(this)}>Ping</button>
      </div>
    );
  }
}

PricePanel.propTypes = {
  currentCoin: PropTypes.string.isRequired,
};

export default PricePanel;
