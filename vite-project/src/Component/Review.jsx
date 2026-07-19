import React from 'react'
import Rcard from './Rcard'

const Review = () => {
  return (
    <section id="Review">

      <p className="review-heading">SOCIAL PROOF</p>
      <h1>What clients say</h1>

      <div className="review">

        <Rcard
          id="rcard1"
          title="Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend."
          name="Sarah Müller"
          post="CPO, Novu"
          img="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <Rcard
          id="rcard2"
          title="Working with Eliott is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined. Our best hire of 2024."
          name="Thomas Renault"
          post="Founder, Finlo"
          img="https://randomuser.me/api/portraits/men/32.jpg"
        />

        <Rcard
          id="rcard3"
          title="We had a tight deadline and a vague brief. Eliott turned both into a polished site in under two weeks. Clean code, zero hand-holding needed."
          name="Camille Dufresne"
          post="Creative Director, Orea"
          img="https://randomuser.me/api/portraits/women/68.jpg"
        />

      </div>

    </section>
  )
}

export default Review