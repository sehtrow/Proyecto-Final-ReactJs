import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";


const CommonButton = ({ type, to }) => (
  <Link className="btn" to={to}>
    <Button variant="contained" color="primary">
      {type === "back" ? "Go Back" : "Button"}
    </Button>
  </Link>
);

CommonButton.propTypes = {
  type: propTypes.string.isRequired,
  to: propTypes.string.isRequired,
};

export default CommonButton;