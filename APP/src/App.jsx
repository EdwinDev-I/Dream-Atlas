import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/signup'
import Login from './pages/login'
import Explore from './pages/Explore'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'


const App = () => {
  return (
    <Router>
      <Routes >
       <Route path='/' element={<Home />}/>
       <Route path='/login-page' element={<Login />}/>
       <Route path='/signup-page' element={<SignUp />}/>
       <Route path='/explore-page' element={<Explore />}/>
       <Route path='/about-page' element={<About />}/>
       <Route path='/contact-page' element={<Contact/>} />
       <Route path='/privacy-page' element={<Privacy/>} />

       {/*404 Page*/}
       <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </ Router>
  )
}

export default App;