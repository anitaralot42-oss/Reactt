import React from 'react'
import darkImage from "./images.jpg";
import games from "./games.jpg"
import  strangerthing from "./strangerthing.jpg"
import nh from "./images (1).jpg"
import thewire from "./thewire.jpg"
import every from "./EveryYearAfter.jpg"
import Cards from './Cards';
import Netflix from './Netflix';


function ParencardComponent() {
  return (
    <div>
    <h3>List Of Top 5 Netflix series</h3>
    <Netflix />

    
      <Cards imgsrc = {darkImage}
      title = "A Netflix Original Series"
      sname = "Dark"
      link = "https://www.netflix.com/title/80100172" />

    
     
     <Cards imgsrc = {games}
      title = "A Netflix Original Series"
      sname = "Game of Thrones"
      link = "https://www.netflix.com/title/70177064"
      
     /> 

     <Cards imgsrc ={strangerthing}
      title = "A Netflix Original Series"
      sname = "Stranger Things"
      link = "https://www.netflix.com/title/70177064"
     />

       <Cards  imgsrc = {nh}
      title = "A Netflix Original Series"
      sname = "NH6"
      link ="https://www.justwatch.com/in/tv-show/nh6"
     />

       <Cards imgsrc = {thewire}
      title = "A Netflix Original Series"
      sname = "The Wire"
      link = "https://www.netflix.com/title/70157149"
     />

      <Cards imgsrc = {every}
      title = "A Amazon Original Series"
      sname = "Every Year After"
      link = "https://www.primevideo.com/detail/0H54EQHZIV8TEJOVYJBDCTFLF1"
     />



      
    </div>
  )
}

export default ParencardComponent
