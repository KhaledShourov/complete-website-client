import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import OrderSummary from '../OrderSummary/OrderSummary'
const Dashboard = () => {
  return (
    <div className="container-fluid row">
      <div className="col-md-3">
        <Sidebar/>
      </div>
      <div className="col-md-9">
        <OrderSummary/>
      </div>
    </div>
  );
};

export default Dashboard;