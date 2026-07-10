import React from 'react'
import Cards from './Cards';
import darkImage from "./images.jpg";

function Netflix() {
    const favseries = "netflix";

    if(favseries == "netflix"){
        return(
          <Cards imgsrc = {darkImage}
      title = "A Netflix Original Series"
      sname = "Dark"
      link = "https://www.netflix.com/title/80100172" />
        )   

    }

    else{

         <Cards imgsrc = {every}
      title = "A Amazon Original Series"
      sname = "Every Year After"
      link = "https://www.primevideo.com/detail/0H54EQHZIV8TEJOVYJBDCTFLF1"
     />

    }
 
   
}

export default Netflix
