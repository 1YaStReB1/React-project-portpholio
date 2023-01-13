import React, { useState } from 'react'
import "./header.css";
import NavItem from './NavItem';
import data from "./data.json"

const Header = () => {

// Change background header
  window.addEventListener("scroll",function (e) {
    const header = document.querySelector(".header");
    if(this.scrollY >= 80)
       header.classList.add("scroll-header");
    else
      header.classList.remove("scroll-header");

  })
  // Toggle Menu
  const [Toggle,showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Димасик</a>

        <div className={Toggle? "nav__menu show-menu" : "nav__menu" }>
            <ul className="nav__list grid">
                
                

                {data.map((item)=>(
                  <NavItem name={`#${item.id}`} icon={`uil ${item.icon} nav__icon`} activeNav={activeNav} setActiveNav={setActiveNav} key={item.id}>{item.text}</NavItem>
                ))
                }

            </ul>

            <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>


        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
           <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header