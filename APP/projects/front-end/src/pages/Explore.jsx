import { useState } from "react";
import { Search, MapPin, Tag } from "lucide-react";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import Hero from "../components/Hero";
import './page-styles/Explore.css'
import './page-styles/Explore-media.css'

function ExploreBody({locationsAndComments,setLocationAndComments}) {

  return(
   <div >
    <div className="explore-dream-container">
      {locationsAndComments.map((locationAndComment) => {
       return(
        <div 
        key={crypto.randomUUID()}
        >
        <div 
        className="location"
        >
          <MapPin style={{color: "#1a81aa"}}/>
          <div>{locationAndComment.state}, </div>
           <div> {locationAndComment.country}</div>
        </div>
        <div>{locationAndComment.comment}</div>
        <div className="tags">{locationAndComment.tag}</div>
       </div>
      )
      })}
    </div>
   </div>
  );
}

function ExploreInput({dreamTags}) {
  const [click , setClick] = useState(null);

 const handleClick = (index) => {
  setClick(index);
 };

  return(
   <>
    <h2 className="title">Explore Dreams</h2>
     <div className="tag-input-box">
      <span className="icon">
      <Search
       style={{ width:'18px'}}
      />
      </span>
      <input
       type="text"
       placeholder="Search dreams by content or tags..."
       />
     </div>
     <div className="tags-container">
      {dreamTags.map((dreamTag, index) => {
      return(<button 
        key={index}
        className={`tags-btn ${click === index ? "color-2" : ""}`}
        onClick={() => handleClick(index)}
       >
        {dreamTag}
       </button>)
     })}
     </div>
   </>
  );
}

function Explore() {
  const [dreamTags , setDreamTags] = useState([
    "All tags",
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
    "giant"
  ]);

  const [locationsAndComments, setLocationAndComments] = useState([
    {
     country : 'USA',
     state : 'California',
     comment : "I was floating above a city made entirely of glass. The buildings reflected countless verions of myself, each living a different life. When I tired to land, the ground turned to water.",
     tag: [
      "flying",
      "water",
      "reflection",
      "cities"
     ]
    },
    {
      country : 'Nigeria',
      state : 'Lagos',
      comment : "Running through an endless forest where the tree whispered secrets in languages I almost understood. Every path led back to the same clearing with a door that wouldn't open.",
      tag : [
        "running",
        "forest",
        "doors",
        "mystery"
      ]
    }, 
    {
      country : 'Australia',
      state : 'Sydney',
      comment : "I could breathe underwater and discovered an ancient library at the bottom of the ocean. The books were alive, their pages swimming like fish.",
      tag : [
        "water",
        "underwater",
        "books",
        "discovery"
      ]
    }, 
    {
      country : 'South African',
      state : 'Gauteng',
      comment : "I entered a white empty room, and objects began forming wherever my mind wandered. I thought of fear, and the lights flicker. I thought of hope, and warm sunlight appears. A door forms only when I decide what I truly want.",
      tag : [
        "transformation",
        "rooms",
        "emotion",
        "psychology",
        "magic"
      ]
    },
    {
      country : 'Germany',
      state : 'Berlin',
      comment : "I looked up and saw enormous giants lying peacefully across the clouds. Their breathing controls the weather: rain when they sigh, wind when they turn. One giant woke up and suddenly looks directly at me with glowing blue eyes. He whispers my name, and every cloud instantly stops moving.",
      tag : [
        "giants",
        "sky",
        "supernatural",
        "mystery"
      ]
    },
    {
      country : 'Nigeria',
      state : 'Enugu',
      comment : "I was walking under a streetlamp at night, and I notice my shadow was missing. Instead, a different shadow appears beside me-taller, older and moving on it's ow. It lead me into an abandoned house and points at a locked door. Behind it, I heard a voice that sounds exactly like mine.",
      tag : [
        "shadows",
        "fear",
        "mystery",
        "darkness",
        "identity",
        "abandoned"
      ]
    },
    {
      country : 'Germany',
      state : 'Hamburg',
      comment : "I walk through glowing garden where plants whisper as P pass. Each flower told me a truth someone in my life was hiding from me. The vines wrap around my arm gently, showing memories from my childhood. When I rached the center, a tree asks, 'Are you ready to know everything?'",
      tag : [
        "nature",
        "garden",
        "secrets",
        "voices",
        "childhood"
      ]
    },
    {
      country : 'Kent',
      state : 'Canterbury',
      comment : "I found myself walking on a long wooden bridge that stretches across an endless ocean. Above me flloat a giant glass library with books drifting in the air like birds. When I pick one, the pages glow and show memories I've never lived before. A soft voice says, 'Choose the life you want to read next.'",
      tag : [
        "ocean",
        "floating",
        "mystery",
        "sky",
        "magic",
        "library",
        "memory"
      ]
    }
  ]);

  return(
    <>
    <div className="top-container">
    <Hero />
    </div>
    <div className="explore-container">
     <ExploreInput
      dreamTags={dreamTags}
      setDreamTags={setDreamTags}
     />
     <ExploreBody 
      locationsAndComments={locationsAndComments}
      setLocationAndComments={setLocationAndComments}
     />
    </div>
    </>
  )
}

export default Explore;