import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import icon from '../../assets/jicon.png'
const Navbar = () => {
  return (
    
    <nav className='navbar'>
      <div>
      <img src={icon} alt='Logo' className='logo'/>
      </div>  
        <nav>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portofolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact Me</Link>
        </div>
        </nav>
    </nav>
  )
}

export default Navbar;