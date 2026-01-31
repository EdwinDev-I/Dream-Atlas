import { useState } from "react";
import { Download, Trash2 ,ChevronUp, ChevronDown} from "lucide-react";
import "./styles/Settings.css"
import "./styles/Settings-media.css"

function Setting() {
  const [bio, setBio] = useState();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Public");
      const [types, setTypes] = useState([
        "Public",
        "Private",
        "Anonymous"
      ])

  return(
    <div>
      <div className="settings-container">
        <h2 className="profile-setting">Profile Setttings</h2>
        <form action="#" className="form-section">
         <div className="name-section">
          <label>Username</label>
          <input 
           type="text" 
           placeholder="John Deo" 
           required
          />
         </div>
         <div className="email-section">
          <label>Email</label>
          <input 
           type="email" 
           placeholder="johndeo@com"
           required
           />
         </div>
         <div className="bio-section">
          <label>Bio</label>
          <textarea 
           type="text" 
           placeholder="Tell us about your dream journey..."
           value={bio} 
           onChange={(e) => {
            setBio(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
           }}
          />
         </div>
         <button 
          className="reset-btn"
          type="submit"
         >Re-set Profile</button>
        </form>
      </div>

      <div className="settings-container2">
        <h2 className="privacy-settings">Privacy Settings</h2>
        <div className="privacy-type-container">
          <div className="type-container">
            <div>
              <div className="settings-title">Default Dream Visibility</div>
              <div className="settings-des">Choose default privacy for new dreams</div>
            </div>
            <div className="select-wrapper">
             <button className="select-btn" onClick={() => setOpen(!open)}>
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
          <div>
            <div className="share-location">
              <div>
                <div className="settings-title">Share Location</div>
                <div className="settings-des">Allow city/region to be shown</div>
              </div>
              <div>
                <button className="share-btn">Yes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="handle-data-container">
        <h2>Data Management</h2>
        <div className="data-div">
          <button className="download-btn">
            <Download className="down-icon" size={20}/> 
            Download All My Data
          </button>
          <button className="account-delete-btn">
            <Trash2 className="account-delete-icon" size={20}/>
            Delete My Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Setting;