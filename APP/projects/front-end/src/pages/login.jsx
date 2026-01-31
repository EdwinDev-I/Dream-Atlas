import { MailIcon, Lock , XIcon, ArrowLeft} from "lucide-react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import './page-styles/login.css'
import './page-styles/login-media.css'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
  
    function tooglePassword() {
      if (!show) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', {email, password})
      .then(result => {
        console.log(result)
        if(result.data === 'Success') {
         navigate('/Dream-Atlas|user-dashboard');
        }
      })
      .catch(err => console.log(err))
    }

  return(
    <>
    <div 
     className="back-home"
     onClick={() => navigate('/')}
    >
      <ArrowLeft/> 
      <div>Back to Home</div>
    </div>
     <div className="login-container">
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon"><MailIcon size={20} /></span>
            <input 
             type="email"
              required 
              onChange={(e) => setEmail(e.target.value)}
              />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><Lock size={20} onClick={tooglePassword} /></span>
            <input 
             type={show ? "text":"password"} 
             required
             onChange={(e) => setPassword(e.target.value)}
              />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="">Forget Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="login-register">
            <p>Don't have an account?<a href="/Dream-Atlas|signup-page" className="register-link">SignUp</a></p>
          </div>
        </form>
      </div>
     </div>
    </>
  )
}

export default Login;