import Hero from './components/Hero'
import './App.css';

const App = () => {
  return (
    <>
     <div className='bubbles'>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
      </div>
      <Hero />
    </>
  )
}

export default App;