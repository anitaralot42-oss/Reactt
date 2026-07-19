import React from 'react'
import Wcard from './Wcard'

const Work = () => {
  return (
    <section id="work">

      <p className="work-heading">PORTFOLIO</p>

      <div className="work-title">
        <h1>Selected Work</h1>

        <a href="/">All Projects →</a>
      </div>

      <div className="work-container">

        <Wcard
          tag1="UI Design"
          tag2="React"
          title="Portfolio Website"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, pariatur."
        />

        <Wcard
          tag1="Landing Page"
          tag2="HTML"
          title="Creative Landing Page"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, pariatur."
        />

        <Wcard
          tag1="Dashboard"
          tag2="CSS"
          title="Admin Dashboard"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, pariatur."
        />

        <Wcard
          tag1="E-commerce"
          tag2="JavaScript"
          title="Shopping Website"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, pariatur."
        />

      </div>

    </section>
  )
}

export default Work