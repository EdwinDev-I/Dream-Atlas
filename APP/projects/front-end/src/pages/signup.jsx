import {User2Icon, MailIcon, ArrowLeft, EyeClosed, Eye} from "lucide-react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import './page-styles/signup.css'
import './page-styles/signup-media.css'

function SignUp() {
  const [name, setName] = useState()
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
    axios.post('http://localhost:3001/signup', {name, email, password})
    .then(result => {console.log(result)
     navigate('/Dream-Atlas|login-page');
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
    <div className="signup-container">
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
            <span className="icon">{show?<Eye onClick={tooglePassword} size={20} />: <EyeClosed onClick={tooglePassword} size={20}/>}</span>
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
            <p>Already have an account?<a href="/Dream-Atlas|login-page" className="register-link">Login</a></p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp;
