import {User2Icon, MailIcon, Lock , XIcon} from "lucide-react";
import './page-styles/signup.css'
import './page-styles/signup-media.css'

function SignUp() {
  return(
    <>
    <div className="signup-container">
      <span className="icon-close"><a href="/"><XIcon /></a></span>
       <div className="form-box signup">
        <h2>Sign Up</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon"><User2Icon size={20} /></span>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon"><MailIcon size={20} /></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><Lock size={20} /></span>
            <input type="password" required />
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
