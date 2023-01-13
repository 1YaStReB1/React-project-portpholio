import React from "react";
import "./services.css";

const ModalItem = ({item}) => {
  return (

      <li className="services__modal-service">
        <i className="uil uil-check-circle services-modal-icon"></i>
        <p className="services__modal-info">{item}</p>
      </li>

  );
};

export default ModalItem;
