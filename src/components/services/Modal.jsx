import React from "react";
import "./services.css";
import ModalItem from "./ModalItem";
const Modal = ({ data, closeModal, toggleState }) => {
  return (
    <div
      className={toggleState ===data.id ? "services__modal active-modal" : "services__modal"}
      onClick={() => closeModal(0)}
    >
      <div
        className="services__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <i
          onClick={() => closeModal(0)}
          className="uil uil-times services__modal-close"
        ></i>

        <h3 className="services__modal-title">{data.title}</h3>
        <p className="services__modal-description">{data.description}</p>

        <ul className="services__modal-services grid">
          {data.items.map((item) => (
            <ModalItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
