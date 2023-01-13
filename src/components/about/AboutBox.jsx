import React from 'react'

const AboutBox = ({icon,title,subtitle}) => {
  return (
    <div className="about__box">
      <i className={`bx ${icon} about__icon`}></i>
        <h3 className="about__title">
          {title}
        </h3>
        <span className="about__subtitle ">{subtitle}</span>
      </div>
  )
}

export default AboutBox