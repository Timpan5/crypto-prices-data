import { connect } from 'react-redux';
import PricePanel from '../components/PricePanel';

function mapStateToProps(state) {
  return {
    currentCoin: state.get('currentCoin'),
  };
}

export default connect(mapStateToProps)(PricePanel);
