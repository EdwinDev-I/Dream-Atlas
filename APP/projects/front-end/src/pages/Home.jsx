import { useState, useEffect } from "react";
import {
     MapPin, Settings, LogOut, BookOpen, BarChart3, Filter
} from "lucide-react";
import Overview from "../components/Overview";
import MyDreams from "../components/MyDreams";
import Setting from "../components/Settings";
import "./page-styles/User.css";
import "./page-styles/User-media.css";

function Tab({icon: Icon, label, active, onClick}) {

  return(
    <div
     className={`tab ${active ? "active" : ""}`}
     onClick={onClick}
    >
      <Icon className="tab-icon"/>
     <span className="tab-label">{label}</span>
     
    </div>
  )
}

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return(
    <div className="dashboard">
      <div className="dash-views">
        <Tab 
         label="Overview"
         icon={BarChart3}
         active={activeTab === "overview"}
         onClick={() => setActiveTab("overview")}
        />
        <Tab 
         label="My Dreams"
         icon={BookOpen}
         active={activeTab === "dreams"}
         onClick={() => setActiveTab("dreams")}
        />
        <Tab
         label="Settings"
         icon={Settings}
         active={activeTab === "settings"}
         onClick={() => setActiveTab("settings")}
        />
      </div>

      <div className="tab-content">
        {activeTab === "overview" && <Overview />}
        {activeTab === "dreams" && <MyDreams/>}
        {activeTab === "settings" && <Setting/>}
      </div>
    </div>
  );
}

function Home() {
  const username = 'Edwin_Dreamer';

  useEffect(() => {
             if (typeof window === 'undefined') return;
             const arrow = document.querySelector('.arrow');
             if (!arrow) return;
             const onScroll = () => {
               if (window.scrollY > 30) arrow.classList.add('visible');
               else arrow.classList.remove('visible');
             };
             // init
             onScroll();
             window.addEventListener('scroll', onScroll, { passive: true });
             return () => window.removeEventListener('scroll', onScroll);
           }, []);
         
           const scrollToTop = (e) => {
             e.preventDefault();
             window.scrollTo({ top: 0, behavior: 'smooth' });
           };

  return (
    <>
    <div className="user-hero">
      <div className="user-top-container">
        <div className="top-icon">🌙</div>
        <div className="user-name">
         <h2 className="username" title={username}>{username}</h2>
        <div>Member since January 2025</div>
        </div>
        <div className="log-out">
         <LogOut/> 
         <div>Logout</div>
        </div>
      </div>
    </div>
    <div className="user-container">
      <Dashboard/>
    </div>
     <a className="arrow" onClick={scrollToTop} aria-label="Scroll to top">↑</a>
    </>
  )
}

export default Home;
