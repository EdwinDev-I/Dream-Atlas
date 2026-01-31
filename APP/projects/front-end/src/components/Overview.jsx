import { useState, useEffect } from "react";
import { Moon , Eye, Heart, Users,TrendingUp, Tag } from "lucide-react";
import { CountUpValue, CountUp, CountUp2, CountUp3, CountUp4, CountUp5 } from "./CountUps";
import "./styles/Overview.css"
import "./styles/Overview-media.css"

function Overview() { 
  const dreamActivity = [
    {month: "Feb", count: 5},
    {month: "Mar", count: 9},
    {month: "Apr", count: 14},
    {month: "May", count: 12},
    {month: "Jun", count: 10},
    {month: "Jul", count: 6}
  ];

  const themes = [
    {label: "Flying", value: 12},
    {label: "Water", value: 9},
    {label: "Cities", value: 7},
    {label: "Animals", value: 6},
    {label: "Family", value: 5},
  ];

  const max = Math.max(...themes.map(t => t.value));

  const num = [47]
  const num2 = [1243]
  const num3 = [188]
  const num4 = [23];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
   setTimeout(() => setAnimate(true), 200);
  }, []);

  return(
    <div>
      <div className="user-stats-container">
        <div className="user-stats">
          <Moon className="user-stats-icon"/>
          <CountUp2 value={num} />
          <div className="user-description">Total Dreams</div>
        </div>
        <div className="user-stats user-stats2">
          <Eye className="user-stats-icon2"/>
          <CountUp3 value={num2} />
          <div className="user-description">Total Views</div>
        </div>
        <div className="user-stats">
          <Heart className="user-stats-icon"/>
          <CountUp4 value={num3} />
          <div className="user-description">Reactions</div>
        </div>
        <div className="user-stats user-stats2">
          <Users className="user-stats-icon2"/>
          <CountUp5 value={num4} />
          <div className="user-description">Followers</div>
        </div>
      </div>

      <div className="overall-view-container">
       <div className="user-A-T">
         <div className="activity-container">
           <div className="activity-title">
             <TrendingUp className="activity-icon"/>
             <h2>Dream Activity (Last 6 Months)</h2>
           </div>
         </div>
 
         <div className="months-container">
          {dreamActivity.map((item, index) => {
           return(
             <div
              key={index}
              className="months"
             >
               <div 
                className={`bar ${animate ? "bar-animate" : ""}`}
                style={{height: animate ? `${item.count * 6}px` : "0px"}}
               />
               <span className="month-name">
                 {item.month}
               </span>
               <CountUp value={item.count} />
             </div>
           )
          })}
         </div>
       </div>
 
       <div className="themes-container">
         <div className="themes-header">
           <Tag className="themes-icon" />
           <h2>Your Most Common Dream Themes</h2>
         </div>
         <div className="themes-list">
          {themes.map((theme, index) => {
            return(
              <div
               key={index}
               className="theme-row"
              >
               <span className="theme-label">{theme.label}</span>
               <div className="bar-track">
                <div 
                className="bar-fill"
                 style={{
                  "--value": `${(theme.value / max) * 100}%`,
                  "--i": index
                }}
                />
               </div>
              <CountUpValue values={theme.value} />
              </div>
            )
          })}
         </div>
       </div>
      </div>
    </div>
  )
}

export default Overview;