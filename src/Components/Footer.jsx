import React from 'react'
import { useGlobalContext } from './utils/Global.context'

const Footer = () => {

  const { Theme } = useGlobalContext()

  return (
    <footer style={{ background: Theme.bgNavbarFooter, color: Theme.color }}>
      <p>Powered by</p>
      <img src="./images/DH.png" alt='DH-logo' />
      <img className='iconos' src="/images/ico-facebook.png" alt="facebookIcon" />
      <img className='iconos' src="/images/ico-instagram.png" alt="instagramIcon" />
      <img className='iconos' src="/images/ico-tiktok.png" alt="instagramIcon" />
      <img className='iconos' src="/images/ico-whatsapp.png" alt="whatsAppIcon" />
    </footer>
  )
}

export default Footer
