import {LogIn , UserPlus, XIcon} from  'lucide-react';
import './styles/prompt.css'

export default function PromptMessage({ open, onClose}) {
  if (!open) return null;

  const handleOverLayClick = (e) =>
 {
  if (e.target.classList.contains('promt-overlay')) {
    onClose();
  }
 };
 return (
  <div className='prompt-container' onClick={handleOverLayClick}>
    <div className='prompt-box'>
      <h2>Select an option</h2>
      <p>Please choose how you want to continue.</p>

      <div className='prompt-buttons'>
        <a href='/Dream-Atlas|login-page' className='login-btn'>
          <LogIn size={18}/>
          Login
        </a>
        <a href='/Dream-Atlas|signup-page' className='signup-btn'>
          <UserPlus size={18}/>
          Sign Up
        </a>
      </div>

      <button className='close-x' onClick={onClose}><XIcon/></button>
    </div>
  </div>
 );
}