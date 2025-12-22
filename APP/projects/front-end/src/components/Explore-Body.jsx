import { MapPin, Tag } from "lucide-react";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import "./styles/Explore-body.css"
import { useState, useEffect } from "react";


function ExploreBody({dreams, setDreams}) {
  const today = dayjs().format('YYYY-M-D');

  const [reaction, setReaction] = useState(() => {
    const saved = localStorage.getItem("dreamReactions");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("dreamReactions", JSON.stringify(reaction));
  }, [reaction])
   
  const handleReact = (dreamId, emoji) => {
    const float = {
      id: Date.now() + Math.random(),
      emoji,
      left: Math.random() * 80 + 10
    };

    setDreams(prev => 
      prev.map(dream => 
        dream.id === dreamId
         ? {
          ...dream,
          floating: [...dream.floating, float]
         }
         : dream
      )
    );

    console.log(dreamId)

    setReaction(prev => ({
      ...prev,
      [dreamId]: {
        ...prev[dreamId],
        [emoji]: (prev[dreamId]?.[emoji] || 0) + 1
      }
    }))

    setTimeout(() => {
      setDreams(prev =>
        prev.map(dream =>
          dream.id === dreamId
           ? {
            ...dream,
            floating: dream.floating.filter( (f) => {
              f.id !== float.id
            })
           }
           : dream
        )
      )
    }, 1500);
  }

  return(
   <div >
    <div className="explore-dream-container">
      {dreams.map((dream) => {
       return(
        <div 
        key={dream.id}
        className="dream-container"
        >
        <div 
        className="location"
        >
          <MapPin 
          style={{
            color: "#599de2",
            width: "15px",
            marginRight: "10px"
          }}
          />
          <div className="region">{dream.state}, </div>
           <div className="country"> {dream.country}</div>
           <span className="dot">.</span>
           <div className="date">{today}</div>
        </div>
        <div className="dream-comment">{dream.comment}</div>
        <div className="dream-tags-container">
          {
          dream.tag.map((tag) => {
          return (
          <div 
          key={`${dream.id} - ${tag}`}
          className="container-tags"
          ><Tag style={{
            width:"13px",
            marginTop:"-4px"
          }}/><div>{tag}</div></div>
         );
          })
         }
        </div>
        <div>
        <div className="reaction-container">
        <button onClick={() => handleReact(dream.id, "❤")}>❤</button>
        <button onClick={() => handleReact(dream.id, "😄")}>😄</button>
        <button onClick={() => handleReact(dream.id, "👻")}>👻</button>
        <button onClick={() => handleReact(dream.id, "😱")}>😱</button>
        <button onClick={() => handleReact(dream.id, "🔥")}>🔥</button>
        </div>
        <div className="counters-container">
          <span className="counter">{reaction[dream.id]?.["❤"]}</span>
          <span className="counter">{reaction[dream.id]?.["😄"]}</span>
          <span className="counter">{reaction[dream.id]?.["👻"]}</span>
          <span className="counter">{reaction[dream.id]?.["😱"]}</span>
          <span className="counter">{reaction[dream.id]?.["🔥"]}</span>
        </div>
        </div>
        <div className="floating-container">
          {dream.floating.map((f) => {
            return(
            <span
             key={f.id}
             className="floating-emoji"
             style={{left: `${f.left}%`}}
            >
              {f.emoji}
            </span>
          )})}
        </div>
       </div>
      )
      })}
    </div>
   </div>
  );
}

export default ExploreBody;