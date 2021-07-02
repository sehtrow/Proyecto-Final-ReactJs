import React from "react";
import { createPortal } from "react-dom";
import "../assets/styles/components/Modal.css";
import SVGClose from "../assets/static/close.svg";

const Modal = (props) =>
  props.isOpen
    ? createPortal(
        <div className="modal">
          <figure onClick={props.onClose} className="modal_close">
            <SVGClose className="modal_close-icon" />
          </figure>
          <div className="modal_container">{props.children}</div>
        </div>,
        document.getElementById("modal"),
      )
    : "";

export default Modal;