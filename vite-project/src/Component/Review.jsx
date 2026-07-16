import React from 'react'
import Rcard from './Rcard'

const Review = (props) => {
  return (
    <>
    <p>Social proof</p>
    <h1>What clients say</h1>

    <div className='review'>

    <Rcard  
        id = "rcard1"
        title = "Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend."
    />

     <Rcard  
     id = "rcard2"

     title = "Working with Eliott is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined. Our best hire of 2024."

    />

    
     <Rcard  
     id = "rcard3"
      
        title = "We had a tight deadline and a vague brief. Eliott turned both into a polished site in under two weeks. Clean code, zero hand-holding needed."
     />
      
      </div>
    </>
  )
}

export default Review
