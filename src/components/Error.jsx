import React from "react";
import "../assets/styles/components/Error.css";
const Error = () => {
  return (
    <div className="not-found">
      <div className="circles">
        <p>
          500
          <br />
          <small>INTERNAL SERVER ERROR </small>
        </p>
        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </div>
    </div>
  );
};

export default Error;
