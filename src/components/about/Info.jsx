import React from 'react'
import AboutBox from './AboutBox'
const Info = () => {
  return (
    <div className="about__info grid">
      
      <AboutBox  icon="bx-award" title="Опыт" subtitle="18 дней"/>
      <AboutBox  icon="bx-briefcase-alt" title="Выполнено" subtitle="3 проекта"/>
      <AboutBox  icon="bx-support" title="Связь" subtitle="Всегда онлайн"/>
     

    </div>
  )
}

export default Info