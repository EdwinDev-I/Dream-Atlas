import { MailIcon, Lock , XIcon} from "lucide-react";
import './page-styles/login.css'
import './page-styles/login-media.css'

function Login() {
  return(
    <>
     <div className="login-container">
      <span className="icon-close"><a href="/"><XIcon /></a></span>
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
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
            <label><input type="checkbox" />Remember me</label>
            <a href="">Forget Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="login-register">
            <p>Don't have an account?<a href="/signup-page" className="register-link">SignUp</a></p>
          </div>
        </form>
      </div>
     </div>
    </>
  )
}

export default Login;