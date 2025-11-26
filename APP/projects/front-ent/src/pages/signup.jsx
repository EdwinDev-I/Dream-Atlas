import {User2Icon, MailIcon, Lock , XIcon} from "lucide-react";
import { useState } from "react";
import axios from 'axios'
import './page-styles/signup.css'
import './page-styles/signup-media.css'

function SignUp() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [show, setShow] = useState(false);

  function tooglePassword() {
    if (!show) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signup', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return(
    <>
    <div className="signup-container">
      <span className="icon-close"><a href="/"><XIcon /></a></span>
       <div className="form-box signup">
        <h2>Sign Up</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon"><User2Icon size={20} /></span>
            <input 
            type="text"
             required 
             onChange={(e) => setName(e.target.value)}
            />
            <label>Username</label>
          </div>
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
            <span className="icon"><Lock onClick={tooglePassword} size={20} /></span>
            <input
             type={show ? "text" : "password"}
              required 
              onChange={(e) => setPassword(e.target.value)}
              />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />I agree to the terms & conditions</label>
          </div>
          <button type="submit" className="btn">Sign Up</button>
          <div className="signup-register">
            <p>Already have an account?<a href="/login-page" className="register-link">Login</a></p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp;
