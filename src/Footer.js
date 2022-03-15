import React from 'react'
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__icons'>
    <FacebookIcon className='footer__icon'/>
    <InstagramIcon className='footer__icon'/>
    <YouTubeIcon className='footer__icon'/>
    <TwitterIcon className='footer__icon'/>
    <LinkedInIcon className='footer__icon'/>
    </div>
    <p>@ All Copyrights reserved 2020-2022</p>
    
    </div>
  )
}

export default Footer