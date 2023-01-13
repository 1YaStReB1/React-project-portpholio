import React, { useState, useEffect } from 'react'
import "./services.css"
import Modal from './Modal';
import data from "./data.json"
import { CSSTransition } from 'react-transition-group';

const Services = () => {
  const  [toggleState, setToggleState] = useState(0);
  

  const toggleTab = (index) =>{
    setToggleState(index);
  }
  const body = document.body;


  toggleState ? body.classList.add("no-scroll") : body.classList.remove("no-scroll")
 

  return (
    <section className="services section" id="services">
      
      <h2 className="section__title">Что я могу</h2>
      <span className="section__subtitle">А могу я не мало</span>


      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Строитель <br/> Карточных домиков</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>Подглядеть
          <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

      
           
      
        </div>


        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Великолепный <br/> Верстальщик</h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">Чекнуть
          <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          {/* <div className={toggleState===2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Классный создатель</h3>
              <p className="services__modal-description">Делаю абалденные сайты. Работаю за еду</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">Сверстаю любой макет</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">Только если не сложный</p>
                </li>

                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">Желательно что полегче</p>
                </li>

                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">Сделаю адаптивную вёрстку</p>
                </li>

                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">Не факт, что будет работать</p>
                </li>


              

              </ul>
            </div>
          </div> */}
          {/* {toggleState ===2 ?  <Modal closeModal = {toggleTab} data = {data[toggleState-1]} /> : <div></div>} */}
         
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Лучший в мире <br/>Человек</h3>
          </div>

          <span onClick={() => toggleTab(3)}  className="services__button">Глянуть
          <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          {/* <div className={toggleState===3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Потрясающий челик</h3>
              <p className="services__modal-description">Всем советую со мной дружить. Пока что бесплатно </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">Всегда поддержу (нет)</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">Отвечу в любое время дня и ночи, если не сплю</p>
                </li>

                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">Напишу про вас стих</p>
                </li>

                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">И ещё один</p>
                </li>

                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services__modal-info">В общем я классный</p>
                </li>


              

              </ul>
            </div>
          </div> */}
          {/* {toggleState ===3 ?  <Modal closeModal = {toggleTab} data = {data[toggleState-1]} /> : <div></div>} */}

        </div>
      </div>
       
      {data.map(item =>{
            console.log(item);
            return <Modal toggleState={toggleState} closeModal = {toggleTab} data = {item} key={item.title}/> 
        })}
    </section>
  )
}

export default Services