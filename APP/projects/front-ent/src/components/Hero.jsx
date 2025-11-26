import { useState } from 'react'
import {Moon} from 'lucide-react'
import PromptMessage from './PromptModal'
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
          <a href="/explore-page" onClick={toggleMenu}>Explore</a>
          </li>
        <li>
          <a href="/about-page" onClick={toggleMenu}>About</a>
          </li>
        <li>
          <a href="/contact-page" onClick={toggleMenu}>Contact</a>
          </li>   
        <li>
          <a href="/privacy-page" onClick={toggleMenu}>Privacy</a>
          </li>   
       </div>
      </div>
      </nav>
    </>
  )
}

function DesktopIcon({showPrompt, setShowPrompt}) {
  function usePromptMessage() {
   setShowPrompt(true)
  }

  function useClosePrompt() {
    setShowPrompt(false)
  }
  return(
    <>
     <div className="nav-link">
         <li>
          <a href="/explore-page" className='nav-link1'>Explore</a>
          </li>
         <li>
          <a href="/about-page" className='nav-link2'>About</a>
          </li>
         <li>
          <a href="/contact-page" className='nav-link3'>Contact</a>
          </li>
         <li>
          <a href="/privacy-page" className='nav-link3'>Privacy</a>
          </li>
         <button className='btn-header'
          onClick={usePromptMessage}
         >Share Dream</button>
         <PromptMessage 
          open={showPrompt}
          onClose={useClosePrompt}
         />
    </div>
    </>
  )
}


function Hero() {
  const [showPrompt, setShowPrompt] = useState(false);

  return (
    <div id='header'>
      <a href="/"  className='logo'>
      <div className='icon-flex'>
        <Moon style={{transform:'scaleX(-1)', width:'25px'}}/><div>Dream Atlas</div>
      </div>
        </a>
        <DesktopIcon 
         showPrompt = {showPrompt}
         setShowPrompt = {setShowPrompt}
        />
        <MobileIcon />
    </div>
  )
}

export default Hero;