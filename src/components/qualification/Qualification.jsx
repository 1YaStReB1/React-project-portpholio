import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
  const  [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) =>{
    setToggleState(index);
  }
  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Квалификация</h2>
      <span className="section__subtitle">Мой путь (Только начинается)</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className= {toggleState === 1
          ? "qualification__button  qualification__active button--flex" 
          : "qualification__button button--flex"}
          onClick={()=>toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Жизненный путь
          </div>

          <div className={toggleState === 2
           ? "qualification__button  qualification__active button--flex"
            : "qualification__button button--flex"}
            onClick={()=>toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Опыт
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 
          ? "qualification__content qualification__content-active"
          : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Родился</h3>
                <span className="qualification__subtitle">В жопе мира</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2001
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Пошёл в школу</h3>
                <span className="qualification__subtitle">Там же</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Я хз когда. Пусть будет 2007
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Не умер</h3>
                <span className="qualification__subtitle">Выжил</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2001-Сегодня
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Поступил в вуз</h3>
                <span className="qualification__subtitle">SUSU (сосу)</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 
          ? "qualification__content qualification__content-active"
          : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Изучил вёрстку</h3>
                <span className="qualification__subtitle">Могу умею</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Годик назад
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Изучил JS</h3>
                <span className="qualification__subtitle">Тоже могу и умею</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Пару недель назад
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Изучаю React</h3>
                <span className="qualification__subtitle">Пока не очень могу и не очень умею</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  В будущем
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
