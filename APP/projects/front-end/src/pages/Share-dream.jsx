import { Send, Eye, EyeOff, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import "./page-styles/Share-dream.css";
import "./page-styles/Share-dream-media.css"
import {useNavigate} from "react-router-dom"
import { useState } from "react";

function DreamForm() {
  const [tags , setTags] = useState([
    "falling",
    "flying",
    "running",
    "water",
    "fire",
    "future",
    "freedom",
    "supernatural",
    "pregnancy",
    "storm",
    "time travel",
    "adventure",
    "animals",
    "mirrors",
    "drowing",
    "lucide dreaming",
    "giants",
    "naked",
    "chase",
    "heaven",
    "paradise",
    "AI"
  ]);

  const [emotions, setEmotions] = useState([
    "fear", 
    "joy",
    "anxiety",
    "peace",
    "confusion",
    "wonder",
    "sadness",
    "excitement",
    "anger",
    "love"
  ]);

   const [open, setOpen] = useState(false);

   const [value, setValue] = useState("Public");

   const [types, setTypes] = useState([
        "Public",
        "Private",
        "Anonymous"
      ]);

    const [bio, setBio] = useState();

  return(
    <div className="share-dream-section">
      <form action="#" className="share-dream-form">
        <div className="dream-description">
        <label>Your Dream</label>
        <textarea 
         name="" 
         placeholder="Describe your dream in as much detail as your remember..."
         required
          value={bio} 
           onChange={(e) => {
            setBio(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
           }}
        >
        </textarea>
        </div>
        <div className="tags-section">
          <div className="share-title">Tags (select all that apply)</div>
          <div className="share-dream-tag">
            {tags.map((tag,index) => {
              return(
              <div
               key={index}
               className="share-tag"
              >
               {tag}
              </div>
              )
            })}
          </div>
        </div>
        <div className="emotions-section">
          <div className="share-title">Emotions Felt</div>
          <div className="share-dream-emotion">
            {emotions.map((emotion , index) => {
              return(
                <div
                 className="share-emotion"
                 key={index}
                >
                  {emotion}
                </div>
              )
            })}
          </div>
        </div>
        <div className="location-section">
          <input 
           type="text" 
           placeholder="City"
           required
          />
          <input 
           type="text" 
           placeholder="Region/State"
           required
          />
          <input 
           type="text" 
           placeholder="Country"
           required
          />
        </div>
        <div>
          <div className="select-wrapper">
            <button 
             className="select-btn" 
             onClick={() => setOpen(!open)}
             type="button"
            >
              <span>{value}</span>
              {open ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
            </button>

            {open && (
              <ul className="select-menu">
                {types.map((type) => {
                return(
                  <li
                  key={type}
                  onClick={() => {
                    setValue(type)
                    setOpen(false);
                  }}
                  >
                    {type}
                  </li>
                )
                })}
              </ul>
            )}
          </div>
        </div>
        <button 
         type="submit"
         className="submit-dream-btn"
        >
          <Send size={20} className="share-icon"/> 
          Submit Dream to Archive
        </button>
      </form>
    </div>
  )
}

function ShareDreamCard() {
  return(
    <div className="share-dream-container">
      <div className="share-dream-card">
          <svg className="moon-logo animate-wave " viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="moonGlow">
        <stop offset="0%" stopColor="#00bfff" stopOpacity={0.6} />
        <stop offset="100%" stopColor="#00bfff" stopOpacity={0} />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="70" fill="url(#moonGlow)" opacity='0.3'>
      <animate attributeName="r" values="70;75;70" dur='3s' repeatCount='indefinite' />
      </circle>
      <path d="M 100 40 A 40 40 0 1 1 100 160 A 30 30 0 1 0 100 40 Z" fill="#87ceeb" opacity='0.95' />
      <circle cx='110' cy='80' r='6' fill="#00bfff" opacity='0.3' />
      <circle cx='115' cy='110' r='4' fill="#00bfff" opacity='0.25' />
      <circle cx='108' cy='130' r='5' fill="#00bfff" opacity='0.2' />
      </svg>
      <h2 className="share-dream-title">Share Your Dream</h2>
      </div>
      <DreamForm/>
    </div>
  );
}

function ShareDream() {
  const navigate = useNavigate();

  return(
    <>
     <div 
      className="link-to-dashboard"
      onClick={() => navigate('/Dream-Atlas|user-dashboard')}
     >
       <ArrowLeft className="share-arrow"/> 
       <div>Back to Dashboard</div>
     </div>
     <ShareDreamCard/>
    </>
  )
}

export default ShareDream;