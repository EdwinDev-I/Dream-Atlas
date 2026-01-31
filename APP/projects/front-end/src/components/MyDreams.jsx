import { useState } from "react";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import {useNavigate} from "react-router-dom"
import { 
  Search, Plus, Calendar, Edit, Globe, Lock, Trash2, Eye, Heart, ChevronUp, ChevronDown
} from "lucide-react";
import "./styles/MyDreams.css"
import "./styles/MyDreams-media.css"

function MyDreams() {
  const navigate = useNavigate();
  const today = dayjs().format('YYYY-M-D');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("All Tags")
  const [searchWord , setSearchWord] = useState("");
  const [selectedTags, setSelectedTags] = useState("");
  const [tags, setTags] = useState([
    "All Tags",
    "falling",
    "flying",
    "running",
    "water",
    "fire",
    "future"
  ])

   const myInitialDreams = [
    {
     id: 1,
     title: "Flying Over Glass City",
     date: today,
     views: 40,
     reactions: 10,
     comment : "I was floating above a city made entirely of glass. The buildings reflected countless verions of myself, each living a different life. When I tired to land, the ground turned to water.",
     tag: [
      "flying",
      "water",
      "reflection",
      "cities"
     ],
     type: "public"
    },
    {
      id: 2,
      title: "Forest of Whispers",
      date: today,
      views: 45,
      reactions: 12,
      comment : "Running through an endless forest where the tree whispered secrets in languages I almost understood. Every path led back to the same clearing with a door that wouldn't open.",
      tag : [
        "running",
        "forest",
        "doors",
        "mystery"
      ],
     type: "private"
    }, 
    {
      id: 3,
      title: "Underwater Library",
      date: today,
      views: 4,
      reactions: 0,
      comment : "I could breathe underwater and discovered an ancient library at the bottom of the ocean. The books were alive, their pages swimming like fish.",
      tag : [
        "water",
        "underwater",
        "books",
        "discovery"
      ],
     type: "public"
    }, 
    {
      id: 4,
      title: "Empty Room Mind Wanders",
      date: today,
      views: 0,
      reactions: 0,
      comment : "I entered a white empty room, and objects began forming wherever my mind wandered. I thought of fear, and the lights flicker. I thought of hope, and warm sunlight appears. A door forms only when I decide what I truly want.",
      tag : [
        "transformation",
        "rooms",
        "emotion",
        "psychology",
        "magic"
      ],
     type: "private"
    }
  ]

  const [myDreams, setMyDreams] = useState(myInitialDreams);
  const [allDreams] = useState(myInitialDreams);

   function getSearchItem(event) {
    const value = event.target.value 
    setSearchWord(value);
    setSelectedTags("");

    const filtered = allDreams.filter((myDream) => 
      myDream.title.toLowerCase().includes(value.toLowerCase()) || 
      myDream.comment.toLowerCase().includes(value.toLowerCase())
    );

    setMyDreams(filtered);
  }

  const handleClick = (tag) => {
  setSelectedTags(tag);
  setSearchWord("")

  const filtered = allDreams.filter((myDream) => 
   myDream.tag.includes(tag)
  );

  if (tag === 'All Tags') {
   return(setMyDreams(allDreams))
  }

  setMyDreams(filtered);
 };

  return(
    <>
    <div className="tag-input-box">
      <span className="icon">
      <Search
       style={{ width:'18px'}}
      />
      </span>
      <input
       type="text"
       placeholder="Search your dreams by content or tags..."
       onChange={getSearchItem}
       value={searchWord}
       />
    </div>
    <div className="dream-search-add">
     <div className="select-wrapper">
      <button className="select-btn" onClick={() => setOpen(!open)}>
        <span>{value}</span>
        {open ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
      </button>

      {open && (
        <ul className="select-menu">
          {tags.map((tag) => {
           return(
            <li
             key={tag}
             onClick={() => {
              setValue(tag)
              setOpen(false);
              handleClick(tag)
             }}
            >
              {tag}
            </li>
           )
          })}
        </ul>
      )}
     </div>
     <div 
      className="add-dream"
      onClick={() => navigate('/Dream-Atlas|share-dream')}
     >
      <Plus className="plus-icon" />
      <div>New Dream</div>
     </div>
    </div>

    <div>
      <div className="my-dreams-container">
        {myDreams.map((myDream) => {
          return(
            <div 
             key={myDream.id}
             className="my-dream"
            >
             <div className="my-dream-title">
              <h3>{myDream.title}</h3>
              <div>
              {
               myDream.type === 'public' 
               ? 
               <Globe className="globe" size={15}/>
               :
               <Lock className="dream-lock" size={15}/> 
               }
               
              </div>
              <div>
              <Edit className="edit-dream" size={20}/>
              <Trash2 className="delete-dream" size={20}/>
               </div>
             </div>

             <div className="date-section">
              <div ><Calendar className="calender" size={20}/></div>
              <div>{myDream.date}</div>
              <div className="my-view-section">
                <Eye className="eye-view" size={20}/>
                <div>{myDream.views}</div>
              </div>
              <div className="my-reaction-section">
                <Heart className="reaction-view" size={20}/>
                <div>{myDream.reactions}</div>
              </div>
             </div>
             <div className="my-dream-comment">{myDream.comment}</div>
             <div className="my-dream-tags-container">
              {myDream.tag.map((myTag) => {
                return(
                  <div
                   key={`${myDream.id} - ${myTag}`}
                   className="my-dream-tag"
                  >
                    {myTag}
                  </div>
                )
              })}
             </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default MyDreams;