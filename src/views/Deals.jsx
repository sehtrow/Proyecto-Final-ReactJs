import React from "react";
import DealList from "../components/DealList";
import ErrorBoundary from '../components/HandlerError/ErrorBoundary';

const Deals = () => (
  <ErrorBoundary>
    <section className="deals_section">
      <DealList />
    </section>
  </ErrorBoundary>
);

export default Deals;