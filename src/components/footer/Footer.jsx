import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import Logo2 from '../../assets/logo2.png';
import arrow from '../../assets/up-arrow.png'

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="social-links">
                <a href="https://www.instagram.com/sameerflex7/" target='#blank'><img src={Github} alt=""/></a>
                <a href="https://www.instagram.com/sameerflex7/" target='#blank'><img src={Instagram} alt=""/></a>
               <a href="https://www.instagram.com/sameerflex7/" target='#blank'> <img src={LinkedIn} alt=""/></a>
            </div>
            <div className="logo-f">
                <img src={Logo2} alt=""/>
            </div>
        <div className='copy'>Developed by Zaid Mirza &copy;
          <a href="https://www.github.com/zaidmirza24" target='#blank'><img width={30} src={arrow} alt="" /></a>
          
        </div>
        
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer