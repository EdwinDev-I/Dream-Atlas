import { useState } from "react";
import Hero from "../components/Hero";
import ExploreBody from "../components/Explore-Body";
import ExploreInput from "../components/Explore-Header";
import './page-styles/Explore.css'
import './page-styles/Explore-media.css'

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
    "giants"
  ]);

  const initialDreams = [
    {
     id: 1,
     country : 'USA',
     state : 'California',
     comment : "I was floating above a city made entirely of glass. The buildings reflected countless verions of myself, each living a different life. When I tired to land, the ground turned to water.",
     tag: [
      "flying",
      "water",
      "reflection",
      "cities"
     ],
     floating: []
    },
    {
      id: 2,
      country : 'Nigeria',
      state : 'Lagos',
      comment : "Running through an endless forest where the tree whispered secrets in languages I almost understood. Every path led back to the same clearing with a door that wouldn't open.",
      tag : [
        "running",
        "forest",
        "doors",
        "mystery"
      ],
     floating: []
    }, 
    {
      id: 3,
      country : 'Australia',
      state : 'Sydney',
      comment : "I could breathe underwater and discovered an ancient library at the bottom of the ocean. The books were alive, their pages swimming like fish.",
      tag : [
        "water",
        "underwater",
        "books",
        "discovery"
      ],
     floating: []
    }, 
    {
      id: 4,
      country : 'SouthAfrican',
      state : 'Gauteng',
      comment : "I entered a white empty room, and objects began forming wherever my mind wandered. I thought of fear, and the lights flicker. I thought of hope, and warm sunlight appears. A door forms only when I decide what I truly want.",
      tag : [
        "transformation",
        "rooms",
        "emotion",
        "psychology",
        "magic"
      ],
     floating: []
    },
    {
      id: 5,
      country : 'Germany',
      state : 'Berlin',
      comment : "I looked up and saw enormous giants lying peacefully across the clouds. Their breathing controls the weather: rain when they sigh, wind when they turn. One giant woke up and suddenly looks directly at me with glowing blue eyes. He whispers my name, and every cloud instantly stops moving.",
      tag : [
        "giants",
        "sky",
        "supernatural",
        "mystery"
      ],
     floating: []
    },
    {
      id: 6,
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
      ],
     floating: []
    },
    {
      id: 7,
      country : 'Germany',
      state : 'Hamburg',
      comment : "I walk through glowing garden where plants whisper as P pass. Each flower told me a truth someone in my life was hiding from me. The vines wrap around my arm gently, showing memories from my childhood. When I rached the center, a tree asks, 'Are you ready to know everything?'",
      tag : [
        "nature",
        "garden",
        "secrets",
        "voices",
        "childhood"
      ],
     floating: []
    },
    {
      id: 8,
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
      ],
     floating: []
    }
  ]
  

  const [dreams, setDreams] = useState(initialDreams);

  return(
    <>
    <div className="top-container">
    <Hero />
    </div>
    <div className="explore-container">
     <ExploreInput
      dreamTags={dreamTags}
      setDreamTags={setDreamTags}
      dreams={dreams}
      setDreams={setDreams}
      initialDreams={initialDreams}
     />
     <ExploreBody 
      dreams={dreams}
      setDreams={setDreams}
     />
    </div>
    </>
  )
}

export default Explore;