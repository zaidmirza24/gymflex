import React, { useState, useEffect } from 'react';
// import Logo from '../../assets/logo.png';
import Logo1 from "../../assets/logo1.png"
import Logo2 from "../../assets/logo2.png"
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <img src={Logo2} alt="" className="logo" />

      {isMobile && (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: 'auto'
          }}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <img
            src={Bars}
            alt="menu"
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>
      )}

      {(!isMobile || menuOpened) && (
        <ul className={`header-menu ${isMobile ? 'header-menu-mobile' : ''}`}>
          <li>
            <Link onClick={() => setMenuOpened(false)} activeClass="active" to="home" span={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="programs" span={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="reasons" span={true} smooth={true}>
              Why us
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="plans" span={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="testimonials" span={true} smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
