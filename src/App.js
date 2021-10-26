import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Button from '@mui/material/Button';

function App() {
  
 const movies=[{name:"Braveheart",image:"https://www.cinemasterpieces.com/bravnmmnov07.jpg",summary:"William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. When he was a young boy, William Wallace's father and brother, along with many others, lost their lives trying to free Scotland. Once he loses another of his loved ones, William Wallace begins his long quest to make Scotland free once and for all, along with the assistance of Robert the Bruce",rating:"8.3/10"},
 {name:"Gladiator",image:"https://www.themoviedb.org/t/p/original/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg",summary:"William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. When he was a young boy, William Wallace's father and brother, along with many others, lost their lives trying to free Scotland. Once he loses another of his loved ones, William Wallace begins his long quest to make Scotland free once and for all, along with the assistance of Robert the Bruce",rating:"8.3/10"},
 {name:"Kimi No Na Wa",image:"https://media-cache.cinematerial.com/p/500x/arfwfem8/kimi-no-na-wa-chinese-movie-poster.jpg",summary:"Mitsuha is the daughter of the mayor of a small mountain town. She's a straightforward high school girl who lives with her sister and her grandmother and has no qualms about letting it be known that she's uninterested in Shinto rituals or helping her father's electoral campaign. Instead she dreams of leaving the boring town and trying her luck in Tokyo. Taki is a high school boy in Tokyo who works part-time in an Italian restaurant and aspires to become an architect or an artist. Every night he has a strange dream where he becomes...a high school girl in a small mountain town",rating:"8.4/10"}]
 const [Aname,setname]=useState(""); 
 const [Aimage,setimage]=useState(""); 
 const [Asummary,setsummary]=useState(""); 
 const [Arating,setrating]=useState(""); 
 const [movie,setmovie]=useState(movies);

 return (
    <div className="main">
      <h1 className="heading1">Top Movies</h1>
       <div className="outerbox">
         
         {movie.map((elements)=>
          <Movies name={elements.name}
              image={elements.image}
              summary={elements.summary}
              rating={elements.rating}
              />
      )}
    </div>
       <div className="toAdd">
         <h2 class="heading3"> Add your own movie </h2>
              <input type="text" placeholder="Name of the movie" 
              onChange={(event)=>setname(event.target.value)}></input>
              <input type="text" placeholder="Image Link" 
               onChange={(event)=>setimage(event.target.value)}></input>
              <input type="text" placeholder="Summary" className="summaryadd"
               onChange={(event)=>setsummary(event.target.value)}></input>
              <input type="text" placeholder="IMDB Rating" 
               onChange={(event)=>setrating(event.target.value)}></input>
              <Button className="addbutton" variant="contained"
              onClick={()=>{
                if(`${Aname}`=="" || `${Aimage}`=="" || `${Asummary}`=="" || `${Arating}`=="")alert("Enter the values as required")
                else setmovie([...movie,{name:`${Aname}`,image:`${Aimage}`,summary:`${Asummary}`,rating:`${Arating}`}])}}>Add movie</Button>
                
                </div> 
         
    </div>
  );
}

function Movies({name,image,summary,rating}){
  const [show,setShow]=useState(true);
  return(
    <div className="eachcard">
    <h1 className="heading">{name}</h1>
    <img className="image" src={image}/>
    <p>{show?summary:""}</p>
    <Button variant="contained" onClick={()=>setShow(!show)}>{show?"Hide description":"Show description"}</Button>
    <p className="rating"><i className="fa fa-imdb fa-2x icon" ></i>{rating}</p>
    </div>
  );
}


export default App;
