import React from 'react'
import FooterBrand from './FooterBrand'
import QuickLinks from './QuickLinks'
import CategoryLinks from './CategoryLinks'
import FooterContactSection from './FooterContactSection'
import FooterCopyright from './FooterCopyright'
import PaymentIcons from './PaymentIcons'

function Footer() {
  return (
    <footer>
    <div className="container">
        <div className="footer-grid">
            <FooterBrand/>
            <QuickLinks/>
            <CategoryLinks/>
            <FooterContactSection/>
        </div>
        
        <div className="footer-bottom">
            <FooterCopyright/>
            <PaymentIcons/>
        </div>
    </div>
</footer>
  )
}

export default Footer