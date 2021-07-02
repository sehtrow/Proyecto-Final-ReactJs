import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/WishGames.css";
import Deal from "./Deal";
import Empty from "./Empty";
import propTypes from "prop-types";

const WishGames = (props) => {
  const { desiredOffer } = props;

  return (
    <div className="wishList">
      {!desiredOffer.length ? (
        <Empty />
      ) : (
        desiredOffer.map((offert) => (
          <Deal key={offert.data.dealID} data={offert.data} />
        ))
      )}
    </div>
  );
};

WishGames.propTypes = {
  desiredOffer: propTypes.array,
};

const mapStateToProps = (state) => {
  return {
    desiredOffer: state.desiredOffer,
  };
};

export default connect(mapStateToProps, null)(WishGames);