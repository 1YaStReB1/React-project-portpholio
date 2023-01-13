import React from 'react'

const ContactCard = ({icon,title,subtitle,href}) => {
  return (
    <div className="contact__card">
              <i className={`bx ${icon} contact__card-icon`}></i>

              <h3 className="contact__card-title">{title}</h3>
              <span className="contact__card-subtitle">{subtitle}</span>

              <a
                href={href}
                className="contact__button"
              >
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
  )
}

export default ContactCard