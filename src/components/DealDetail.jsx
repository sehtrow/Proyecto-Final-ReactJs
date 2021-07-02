import React from "react";
import "../assets/styles/components/DealDetail.css";

const DealDetail = (props) => {
  const { data } = props;
  const { thumb, title, releaseDate, lastChange, dealRating } = data;
  const parseDateLastChange = new Date(lastChange * 1000);
  const parseDateRealease = new Date(releaseDate * 1000);
  return (
    <div className="deal_detail">
      <img className="deal_detail-img" src={thumb} alt="DealImage" />
      <div className="deal_detail-container">
        <h2 className="deal_detail-name">{title}</h2>
        <p className="deal_detail-item">
          <span className="deal_detail-item-type">Release Date:</span>{" "}
          {parseDateRealease.toUTCString()}
        </p>
        <p className="deal_detail-item">
          <span className="deal_detail-item-type">Last Change:</span>{" "}
          {parseDateLastChange.toUTCString()}
        </p>
        <p className="deal_detail-item">
          <span className="deal_detail-item-type">Rating:</span> {dealRating}
        </p>
      </div>
    </div>
  );
};

export default DealDetail;
