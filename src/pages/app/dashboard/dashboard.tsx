import React from "react";
import { Helmet } from "react-helmet-async";

import DaysOrdersAmountCard from "./days-orders-amount-card";
import MonthCanceledOrdersAmountCard from "./month-canceled-orders-amount-card";
import MonthOrdersAmountCard from "./month-orders-amount-card";
import MonthRevenueCard from "./month-revenue-card";
import PopularProductsChart from "./popular-products-chart";
import RevenueChart from "./revenue-chart";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DaysOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>

      <div className="grid-col-9 grid gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
