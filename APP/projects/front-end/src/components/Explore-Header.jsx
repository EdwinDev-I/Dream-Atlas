import { useState } from 'react'
import { Search, Moon } from 'lucide-react'



function ExploreInput({dreamTags , dreams, setDreams, initialDreams}) {
  const [searchWord , setSearchWord] = useState("");
  const [selectedTags, setSelectedTags] = useState("");
  const [allDreams] = useState(initialDreams);


  function getSearchItem(event) {
    const value = event.target.value 
    setSearchWord(value);
    setSelectedTags("");

    const filtered = allDreams.filter((dream) => 
      dream.comment.toLowerCase().includes(value.toLowerCase()) || 
      dream.state.toLowerCase().includes(value.toLowerCase()) ||
      dream.country.toLowerCase().includes(value.toLowerCase())
    );

    setDreams(filtered);
  }

 const handleClick = (tag) => {
  setSelectedTags(tag);
  setSearchWord("")

  const filtered = allDreams.filter((dream) => 
   dream.tag.includes(tag)
  );

  if (tag === 'All tags') {
   return(setDreams(allDreams))
  }

  setDreams(filtered);
 };

  return(
   <>
    <h1 className="title"><Moon className='moon-icon' style={{width:'30px', height:"30px"}}/> Explore Dreams</h1>
     <div className="tag-input-box">
      <span className="icon">
      <Search
       style={{ width:'18px'}}
      />
      </span>
      <input
       type="text"
       placeholder="Search dreams by content or tags..."
       onChange={getSearchItem}
       value={searchWord}
       />
     </div>
     <div className="tags-container">
      {dreamTags.map((dreamTag, index) => {
      return(<button 
        key={index}
        className={`tags-btn ${selectedTags === dreamTag ? "color-2" : ""}`}
        onClick={() => {
          handleClick(dreamTag)
        }}
       >
        {dreamTag}
       </button>)
     })}
     </div>
   </>  
  );
}

export default ExploreInput;