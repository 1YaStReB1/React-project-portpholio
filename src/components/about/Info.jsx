import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i className='bx bx-award about__icon'></i>
        <h3 className="about__title">
          Опыт
        </h3>
        <span className="about__subtitle ">18 дней</span>
      </div>

      <div className="about__box">
      <i className='bx bx-briefcase-alt about__icon' ></i>
        <h3 className="about__title">
          Выполнено
        </h3>
        <span className="about__subtitle">3 проекта</span>
      </div>

      <div className="about__box">
      <i className='bx bx-support about__icon' ></i>
        <h3 className="about__title">
        Связь
        </h3>
        <span className="about__subtitle">Всегда онлайн</span>
      </div>


    </div>
  )
}

export default Info