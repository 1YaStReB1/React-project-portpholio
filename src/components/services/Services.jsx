import React, { useState, useEffect } from 'react'
import "./services.css"
import Modal from './Modal';
import data from "./data.json"
import ServicesContent from './ServicesContent';

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
       
      <ServicesContent index={1} icon="uil-web-grid" title="Строитель Карточных домиков" toggleTab={toggleTab} />
      <ServicesContent index={2} icon="uil-arrow" title="Великолепный Верстальщик" toggleTab={toggleTab} />
      <ServicesContent index={3} icon="uil-edit" title="Лучший в мире Человек" toggleTab={toggleTab} />

        
      </div>
       
      {data.map(item =>{
            return <Modal toggleState={toggleState} closeModal = {toggleTab} data = {item} key={item.title}/> 
        })}
    </section>
  )
}

export default Services