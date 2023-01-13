import React from 'react'

const ServicesContent = ({icon, title,toggleTab,index}) => {
  return (
    <div className="services__content">
          <div>
            <i className={`uil ${icon} services__icon`}></i>
            <h3 className="services__title">{title}</h3>
          </div>

          <span onClick={() => toggleTab(index)} className="services__button">Чекнуть
          <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

         
        </div>
  )
}

export default ServicesContent