import React from "react";

const NavItem = ({ name, icon,activeNav,setActiveNav,children }) => {
  return (
    <li className="nav__item">
      <a
        href={name}
        onClick={() => setActiveNav({name})}
        className={activeNav == {name} ? "nav__link active-link" : "nav__link"}
      >
        <i className={icon}></i>{children}
      </a>
    </li>
  );
};

export default NavItem;
