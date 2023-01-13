import React from 'react'
import SkillsData from './SkillsData'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Фронтенд разработка</h3>
        <div className="skills__box">
          <div className="skills__group">
            
            <SkillsData  title="HTML" subtitle="Профессионал" />
            <SkillsData  title="CSS" subtitle="Профессионал" />
            <SkillsData  title="JavaScript" subtitle="Начинающий" />
           
            </div>
            

          <div className="skills__group">
            

            <SkillsData  title="Bootstrap" subtitle="Миддл" />
            <SkillsData  title="Git" subtitle="Миддл" />
            <SkillsData  title="React" subtitle="Начинающий" />



            </div>
      </div>
    </div>
  )
}

export default Frontend