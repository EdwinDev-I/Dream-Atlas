import { useState } from "react";
import { Search } from "lucide-react";
import Hero from "../components/Hero";
import './page-styles/Explore.css'
import './page-styles/Explore-media.css'

function ExploreBody() {
  return(<></>);
}

function ExploreInput({DreamTags,setDreamTags}) {
  return(
   <>
    <h2 className="title">Explore Dreams</h2>
    <form action="#">
     <div>
      <span>
      <Search />
      </span>
      <input
       type="text"
       placeholder="Search dreams by content or tags..."
       />
     </div>
     <div>{DreamTags}</div>
     </form>
   </>
  );
}

function Explore() {
  const [dreamTags , setDreamTags] = useState([
   {alltags: 'All tags'}
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
     <ExploreBody />
    </div>
    </>
  )
}

export default Explore;