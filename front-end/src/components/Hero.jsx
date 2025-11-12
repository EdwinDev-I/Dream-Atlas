import { useState } from 'react'
import './styles/Hero.css'
import './styles/Hero-media.css'

function MobileIcon() {
  const [iconIsOpen, setIconIsOpen] = useState(true);

 const toggleMenu = () => setIconIsOpen(!iconIsOpen);

  return(
    <>
    <nav id='hamburger-nav'>
     <div className="hamburger-menu">
       <div className={`hamburger-icon ${iconIsOpen ? '' : 'open'}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
       </div>
       <div className={`menu-links ${iconIsOpen ? '' : 'open'}`}>
        <li>
          <a href="#explore" onClick={toggleMenu}>Explore</a>
          </li>
        <li>
          <a href="#about" onClick={toggleMenu}>About</a>
          </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>   
       </div>
      </div>
      </nav>
    </>
  )
}

function DesktopIcon() {
  return(
    <>
     <div className="nav-link">
         <li>
          <a href="#explore">Explore</a>
          </li>
         <li>
          <a href="#about">About</a>
          </li>
         <li>
          <a href="#contact">Contact</a>
          </li>
         <button className='btn-header'>Share Dream</button>
    </div>
    </>
  )
}


function Hero() {
  return (
    <div id='header'>
      <a href="../public/index.html"  className='logo'>
        <div>Dream Atlas</div>
        </a>
        <DesktopIcon />
        <MobileIcon />
    </div>
  )
}

export default Hero;