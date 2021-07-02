import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import DealDetail from './DealDetail';
import Modal from './Modal';
import { setWish, deleteWish } from "../actions";
import SVGWish from '../assets/static/wish.svg'
import useModal from "../custom-hooks/useModal";
import "../assets/styles/components/Deal.css";



const Deal = (props) => {
  const { modal, handleCloseModal, handleOpenModal } = useModal();
  const [wish, setWish] = useState(false);

  const { data, desiredOffer } = props;
  const { dealID, thumb, title, normalPrice, salePrice, steamRatingText,savings } = data;

  const handleSetWish = () => {
    props.setWish({ data });
    setWish(true);
  };

  const handleDeleteWish = (dealId) => {
    props.deleteWish(dealId);
    setWish(false);
  };

  const isAWish = () => {
    const result = desiredOffer.filter(
      (wishGame) => wishGame.data.dealID === dealID
    );
    if (result.length) {
      setWish(true);
    }
  };

  useEffect(() => {
    isAWish();
  });

  return (
    <div className="deal">
      <img className="img_deal" src={thumb} alt="Saving" />
      <div className="deal_details">
        <h3 className="deal-title">{title}</h3>
        {wish ? (
          <SVGWish
            onClick={() => handleDeleteWish(dealID)}
            className="deal-wish-svg wish"
          />
        ) : (
          <SVGWish
            onClick={handleSetWish}
            className="deal-wish-svg noWish"
          />
        )}
        <p className="deal_item_default">
          <span className="deal_item_default-n">Saving:</span>{" "}
          {Math.floor(savings)}%
        </p>
        <p className="deal_item_default">
          <span className="deal_item_default-n">Normal Price:</span>{" "}
          ${normalPrice}
        </p>
        <p className="deal_item_default">
          <span className="deal_item_default-n">Sale Price:</span>{" "}
          ${salePrice}
        </p>
        <p className="deal_item_default">
          <span className="deal_item_default-n">Rating Steam:</span>{" "}
          {steamRatingText}
        </p>
        <p onClick={handleOpenModal} className="deal_item_default-more">
          See More
        </p>
      </div>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <DealDetail data={data} />
      </Modal>
    </div>
  );
};

Deal.propTypes = {
  data: propTypes.object.isRequired,
};

// Native functions react-redux (HOC)
const mapStateToProps = (state) => {
  return {
    desiredOffer: state.desiredOffer,
  };
};

const mapDispatchToProps = {
  setWish,
  deleteWish,
};

export default connect(mapStateToProps, mapDispatchToProps)(Deal);