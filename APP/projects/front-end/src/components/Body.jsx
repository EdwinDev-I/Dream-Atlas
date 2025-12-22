import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import {Moon} from 'lucide-react'
import { useState } from 'react'
import PromptMessage from './PromptModal'
import './styles/body.css'
import './styles/body-media.css'

function FootersSection() {
  const year = dayjs().format('YYYY');
  return(
    <>
   <p className='footer-text'>Copyright &#169; {year} <Moon style={{transform:'scaleX(-1)', width:'20px'}}/>Dream Atlas.com ‖ All Rights Reserved.</p>
   </>
  )
}

function ExplanationsSection() {
  return(
    <>
    <h2 className='explanation-text'>Why This Matters</h2>
    <div className='explanation-container'>
         <div className="explanation-card">
        <h3>For Dreams</h3>
        <p>A safe space to preserve and reflect onyour inner world. Discover meanings through shared experience.</p>
      </div>
      <div className="explanation-card">
        <h3>For Researchers</h3>
        <p>Access anonymized data to study collective consciousness, cultural patterns, and psychological insight.</p>
      </div>
      <div className="explanation-card">
        <h3>For Artists & Writers</h3>
        <p>Mine the richest source of surreal imagery and storytelling inspiration humanity hos to offer.</p>
      </div>
      <div className="explanation-card">
        <h3>For Humanity</h3>
        <p>Build a monument to our shared inner lives. What we dream reveals what it means to be human.</p>
      </div>
    </div>
    </>
  )
}

function FeatureSection() {
  return(
    <div className="features-container">
      <div className="feature-card">
        <div className="feature-icon">🗺</div>
        <h3>Global Dream Map</h3>
        <p>See where dreams are happening around the world. Discover patterns across cultures and geographies beneath the surface.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">📊</div>
        <h3>Pattern Recognition</h3>
        <p>Explore recurring symbols, seasonal trends, amd universal themes in human dreaming through deep data analysis.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🤝</div>
        <h3>Find Your Dream Twins</h3>
        <p>Connect with others who share similar dream experiences. You're not alone in your subconscious journeys.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🔒</div>
        <h3>Private & Secure</h3>
        <p>Your dreams are protected with end-to-end encryption. Share anonymously or create a dream profile-your choice.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🎨</div>
        <h3>AI Dream Art</h3>
        <p>Transform your dreams into stunning visual art with AI. Turn fleeting memories into permanent masterpieces.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">📚</div>
        <h3>Research Portal</h3>
        <p>Access anonymized data for psychological research, creative, writing, and understanding the collective unconscious.</p>
      </div>
    </div>
  )
}

function StatsSection() {
  return(
    <div className="stats-container">
     <div className="stat">
      <div className="stat-number">100K+</div>
      <div className="stat-label">Dreams Archived</div>
     </div>
     <div className="stat">
      <div className="stat-number">120+</div>
      <div className="stat-label">Countries</div>
     </div>
     <div className="stat">
      <div className="stat-number">25K+</div>
      <div className="stat-label">Dreams</div>
     </div>
    </div>
  )
}

function DescriptionSection({showPrompt, setShowPrompt}) {

  return(
   <div className="description-container" id='top'>
    <svg className="moon-logo animate-wave" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
     <defs>
      <radialGradient id="moonGlow">
       <stop offset="0%" stopColor="#00bfff" stopOpacity={0.6} />
       <stop offset="100%" stopColor="#00bfff" stopOpacity={0} />
      </radialGradient>
     </defs>
     <circle cx="100" cy="100" r="70" fill="url(#moonGlow)" opacity='0.3'>
     <animate attributeName="r" values="70;75;70" dur='3s' repeatCount='indefinite' />
     </circle>
     <path d="M 100 40 A 40 40 0 1 1 100 160 A 30 30 0 1 0 100 40 Z" fill="#87ceeb" opacity='0.95' />
     <circle cx='110' cy='80' r='6' fill="#00bfff" opacity='0.3' />
     <circle cx='115' cy='110' r='4' fill="#00bfff" opacity='0.25' />
     <circle cx='108' cy='130' r='5' fill="#00bfff" opacity='0.2' />
    </svg>
    <h1>The Dream Archive</h1>
     <p className="subtitle animate-fade-up stagger-1">Dive into the depths of the human subconscious</p>
     <p className="description">Every night, billions of humans experience vivid worlds that vanish by morning. Here, those worlds are preserved, shared, and explored. Join us in creating the largest collection of human dreams ever assembled.</p>
     <a className='sd-btn' onClick={() => setShowPrompt(true)}>Share Your Dream</a>
     <PromptMessage
      open={showPrompt}
      onClose={() => setShowPrompt(false)}
     />
   </div>
  )
}

function Body() {
  const [showPrompt, setShowPrompt] = useState(false);

  return(
    <>
      <div className="container">
       <DescriptionSection 
        showPrompt={showPrompt}
        setShowPrompt={setShowPrompt}
       />
       <StatsSection />
       <FeatureSection />
       <ExplanationsSection/>
       <FootersSection/>
      </div>
    </>
  )
}

export default Body;
