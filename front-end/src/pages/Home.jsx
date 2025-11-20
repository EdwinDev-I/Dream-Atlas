import Hero from '../components/Hero'
import Body from '../components/Body';
import { useEffect } from 'react';
import './page-styles/Home.css'

function Home() {
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
      <div className='bubbles'>
      <div className='bubble'></div>
      <div className='bubble'></div>
      <div className='bubble'></div>
      <div className='bubble'></div>
      <div className='bubble'></div>
    </div>
      <Hero id="top" />
      <Body />
      <a className="arrow" onClick={scrollToTop} aria-label="Scroll to top">↑</a>
   </>
  )
}

export default Home;

