import React from 'react';
import { Provider } from 'react-redux';
import getStore from '../store/pricesStore';
import AppLayout from '../components/AppLayout';

function PricesApp(props) {
  return (
    <Provider store={getStore(props.dev_environment)}>
      <AppLayout />
    </Provider>
  );
}

export default PricesApp;
