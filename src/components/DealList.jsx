import React, { useEffect } from "react";
import "../assets/styles/components/DealList.css";
import Deal from "./Deal";
import Error from "./Error";
import Loading from "./Loading";
import useGetDeals from "../custom-hooks/useGetDeals";

const DealsList = () => {
  const { deals, loading, error, getDeals } = useGetDeals();

  useEffect(() => {   
    getDeals();
  });

  return (
    <div className="dealList">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error/>
      ) : (
        deals.map((deal) => (
          <Deal key={deal.dealID} data={deal} />
        ))
      )}
    </div>
  );
};

export default DealsList;