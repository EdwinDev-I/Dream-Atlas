import Hero from "../components/Hero";
import PromptMessage from "../components/PromptModal";
import { Moon, Sparkles, Users, Heart, Globe, Shield, Brain, Book } from "lucide-react";
import { useState, useEffect } from "react";
import "./page-styles/About.css";
import "./page-styles/About-media.css"

function AboutBody({showPrompt, setShowPrompt}) {
  const values = [{
    icon: <Heart className="values-icon"/>,
    subtitle: 'Human Connection',
    words: 'We belive dreams are a universal language that connects all of humanity, transcending borders, culture and time.'
  }, {
    icon: <Shield className="values-icon"/>,
    subtitle: 'Privacy First',
    words: 'Your dreams are deeply personal. We use end-to-end encryption and give you complete control over what you share.'
  }, {
    icon: <Brain className="values-icon"/>,
    subtitle: 'Scientific Curiosity',
    words: "We're driven by wonder about the human mind and committed to advancing our understanding of consciousness."
  }, {
    icon: <Globe className="values-icon"/>,
    subtitle: 'Open Access',
    words: 'Knowledge should be free. We provide researchers, artists, and dreamers worldwide with access to this collective resource.'
  }]

  const teams = [{
    icon: <Users className="team-icon" />,
    title: 'Founder & Visionary',
    discription: 'A lifelong lucide dreamer fascinated by the patterns in human subconsciousness.'
  }, {
    icon: <Users className="team-icon" />,
    title: 'Lead Developer',
    discription: "Building the technical infrastructure to preserve humanity's dreams for generations."
  }, {
    icon: <Users className="team-icon" />,
    title: 'Research Director',
    discription: 'PhD in Psychology, specializing in dream analysis and collective consciousness studies.'
  }, {
    icon: <Users className="team-icon" />,
    title: 'Community Manager',
    discription: 'Fostering a safe, welcoming space for dreamers from every corner of the world.'
  }]

  const journeys = [{
    year: '2024',
    discription: 'Dream Atlas conceived during a particularly vivid dream & also a question'
  }, {
    year: '2025',
    discription: 'Platform launched with first 1,000 dreams archived'
  }, {
    year: '2026',
    discription: 'Reached 50,000+ dreams from 120+ countries'
  }, {
    year: '2026',
    discription: 'Partnership with major psychology research institutions'
  }, {
    year: 'Future',
    discription: 'Expand to 1 million dreams and launch AI dream interpretation tools'
  }]


  return(
    <div>
      <div className="mission-container">
        <h2 className="mission-title">Our Mission</h2>
        <div className="missions">
          <div>Every night, 8 billion people experience vivid, complex worlds that disappear by morning. These dreams contain insights about our fears, hopes, creativity, and shared humanity-but they vanish without a trace.
          </div>
          <div>
            Dream Altas exists to change that. We're creating the world's largest collection of human dreams, making them searchable, analyzable, and accessible to researchers, artists, and anyone curious about the landscape of human consciousness.
          </div>
        </div>
      </div>
      <div className="storys">
        <h2 className="sty-title">Our Story</h2>
        <div className="sty-container">
          <div className="sty-1">
            <Sparkles className="sty-icon" />
            <div className="sty-subtitle">How it Began</div>
            <div className="words">
              Dream Atlas was born from a simple question: "Did anyone else dream about being in heaven last night?" Our founder realized that while we spend a third of our lives dreaming, we have no way to know what the rest of humanity is dreaming about. Are certain symbols universal? Do people in different cultures dream different? We had no data to answer these questions. 
            </div>
          </div>
          <div className="sty-2">
            <Book className="sty-icon" />
            <div className="sty-subtitle">Why It Matters</div>
            <div className="words">
              Dreams have inspired art, literature, and scientific breakthroughs throughout history. By collecting and analyzing dreams at scale, we can uncover patterns in human psychology, track how collective anxieties shift over time and provide researchers with unprecedented data about consciousness itself.
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="value-title">Our Values</h2>
        <div className="values">
          {values.map((value) => {
            return(
              <div 
               key={value.subtitle}
               className="values-container"
              >
                <div>{value.icon}</div>
                <div className="values-subtitle">{value.subtitle}</div>
                <div className="words">{value.words}</div>
              </div>
            );
          })}
        </div>
      </div> 
      <div className="teams-container">
        <h2 className="team-title">Our Team</h2>
        <div className="teams">
          {teams.map((team) => {
            return(
              <div 
               key={team.title}
               className="values-container"
              >
                <div>{team.icon}</div>
                <div className="values-subtitle">{team.title}</div>
                <div className="words">{team.discription}</div>
              </div>
            );
          })}
        </div>
      </div> 
      <div className="addition">
        Plus a passionate community of dreamers, developers, and researchers from around the world.
      </div>
       <div>
        <h2 className="journey-title">Our Journey</h2>
        <div className="journey">
          {journeys.map((journey, index) => {
            return(
              <div 
               key={index}
               className="journey-container"
              >
                <div className="years-container">
                  <div className={journey.year === "Future" ? 'future' : 'years'}>
                    {journey.year}
                  </div>
                </div>
                <div className="dis-container">
                  <div className="dis-word">
                    {journey.discription}
                  </div>
                </div> 
              </div>
            );
          })}
        </div>
      </div> 
      <div>
        <h2 className="build">What We're Building</h2>
        <div className="building-word">
          <div>
            <strong>For Dreamers:</strong> A safe space to record, reflect on, and share your inner worlds. Find others who've had similar dreams. Discover patterns in your own subconsious.
          </div>
          <div>
            <strong>For Researchers:</strong> Access to unprecedented data about human consciousness. Study how dreams vary across cultures, change with major world events, and reflect universal human experience.
          </div>
          <div>
            <strong>For Artists & Writers:</strong> An infinite wellspring of surreal imagery, emotional landscapes, and narrative structures drawn from the collective human imagination.
          </div>
          <div>
            <strong>For Humanity:</strong> A monument to our inner lives. Proof that while we may speak different languages and live in different worlds by day, at night we all inhabit similarly strange and wonderful places.
          </div>
        </div>
      </div>
      <div className="join-container">
        <h2 className="join-title">Join Us</h2>
        <div className="share-container">
         <div>
          Every dream you share helps us understand humanity a little better. Whether you remember epic adventures or brief fragments, your dreams matter. Together, we're mapping the landscape of human consciousness.
          </div>
         <button onClick={() => setShowPrompt(true)}>
          Share Your First Dream
          </button>
        </div>
      </div>
      <div>
        <h2 className="get-title">Get in Touch</h2>
        <div className="quest-wrd">Questions? Ideas? Want to collaborate?</div>
        <div className="links">
          <a 
          href="mailto:nondhim@gmail.com?subject=Hello%20dream%20world&body=I%20want%20to%20get%20started%20on%20dream%20sharing%20with%20you!!"
          target="_blank"
          className="email-link"
          >hello@dreamatlas.com</a>
          <span className="dots">.</span>
          <a 
           href=""
           className="twit-link"
          >Twitter</a>
          <span className="dots">.</span>
          <a 
          href="https://github.com/EdwinDev-I/Dream-Atlas"
          target="_blank"
          className="github-link"
          >GitHub</a>
        </div>
      </div>
      <PromptMessage
        open={showPrompt}
        onClose={() => setShowPrompt(false)}
      />
    </div>
  )
}

function AboutTitle() {
  return(
    <>
    <h1 className="about-title"> <Moon className="moon-icon" style={{width:'30px', height:"30px"}}/> About Dream-Atlas</h1>
    <div className="about-subtitle">We're building a monument to the human imagination a place where the fleeting worlds we visit each night are preserved, studied, and celebrated.</div>
    </>
  ) 
}

function About() {
 const [showPrompt, setShowPrompt] = useState(false);

 useEffect(() => {
     if (typeof window === 'undefined') return;
     const arrow = document.querySelector('.arrow');
     if (!arrow) return;
     const onScroll = () => {
       if (window.scrollY > 30) arrow.classList.add('visible');
       else arrow.classList.remove('visible');
     };
     // init
     onScroll();
     window.addEventListener('scroll', onScroll, { passive: true });
     return () => window.removeEventListener('scroll', onScroll);
   }, []);
 
   const scrollToTop = (e) => {
     e.preventDefault();
     window.scrollTo({ top: 0, behavior: 'smooth' });
   };
  
  return (
  <>
    <div className="top-container">
    <Hero />
    </div>
    <div className="about-container">
     <AboutTitle />
     <AboutBody 
      showPrompt={showPrompt}
      setShowPrompt={setShowPrompt}
     />
     </div>
      <a className="arrow" onClick={scrollToTop} aria-label="Scroll to top">↑</a>
  </>
  )
}

export default About;
