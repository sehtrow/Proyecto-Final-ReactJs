import React from "react";
import "../assets/styles/components/loading.css";
import loader from "../assets/images/loader.gif";

const Loading = () => (
  <div className="loading">
    <img className="loading-img" src={loader} alt="loading" />
    <span className="loading-text">Loading...</span>
  </div>
);

export default Loading;