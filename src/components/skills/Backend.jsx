import React from "react";
import SkillsData from "./SkillsData";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Бэкенд разработка</h3>
      <div className="skills__box">
        <div className="skills__group">
          <SkillsData title="PHP" subtitle="Начинающий" />
          <SkillsData title="Node JS" subtitle="Начинающий" />
          <SkillsData title="Python" subtitle="Базовый" />
        </div>
        <div className="skills__group">
          <SkillsData title="MySql" subtitle="Профессиональный" />
          <SkillsData title="FireBase" subtitle="Начинающий" />
          <SkillsData title="SQL" subtitle="Профессиональный" />
        </div>
      </div>
    </div>
  );
};

export default Backend;
