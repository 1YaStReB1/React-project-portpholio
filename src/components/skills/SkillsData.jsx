import React from "react";

const SkillsData = ({icon,title,subtitle}) => {
  return (
    <div className="skills__data">
      <i className="bx bx-badge-check"></i>
      <div>
        <h3 className="skills__name">{title}</h3>
        <span className="skills__level">{subtitle}</span>
      </div>
    </div>
  );
};

export default SkillsData;
