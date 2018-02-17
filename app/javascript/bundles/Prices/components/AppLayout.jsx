import React from 'react';
import PricesContainer from '../containers/PricesContainer';
import HeaderContainer from '../containers/HeaderContainer';
import HistoryContainer from '../containers/HistoryContainer';

function AppLayout() {
  return (
    <div>
      <HeaderContainer />
      <PricesContainer />
      <HistoryContainer />
    </div>
  );
}

export default AppLayout;
