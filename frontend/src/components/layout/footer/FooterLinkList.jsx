import React from 'react'

function FooterLinkList({footerLinks}) {
  return (
    <ul>
        {footerLinks.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.href}>
                <i className="fas fa-chevron-right"></i> {link.label}
              </a>
            </li>
          );
        })}
      </ul>
  )
}

export default FooterLinkList