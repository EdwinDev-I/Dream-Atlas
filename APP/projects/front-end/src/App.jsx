import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/Landing-Page'
import SignUp from './pages/signup'
import Login from './pages/login'
import Explore from './pages/Explore'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ShareDream from './pages/Share-dream'


const App = () => {
  return (
    <Router>
      <Routes >
       <Route path='/' element={<LandingPage />}/>
       <Route path='/Dream-Atlas|login-page' element={<Login />}/>
       <Route path='/Dream-Atlas|signup-page' element={<SignUp />}/>
       <Route path='/Dream-Atlas|explore-page' element={<Explore />}/>
       <Route path='/Dream-Atlas|about-page' element={<About />}/>
       <Route path='/Dream-Atlas|contact-page' element={<Contact/>} />
       <Route path='/Dream-Atlas|privacy-page' element={<Privacy/>} />
       <Route path='/Dream-Atlas|home-page' element={<Home />} />
       <Route path='/Dream-Atlas|share-dream' element={<ShareDream />} />

       {/*404 Page*/}
       <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </ Router>
  )
}

export default App;