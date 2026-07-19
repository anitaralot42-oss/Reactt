import React from 'react'
import Image from '../../Image/Image'

const Wcard = (props) => {
  return (
    <div className="work-card">

      <Image />

      <div className="work-content">

        <div className="work-tags">
          <span>{props.tag1}</span>
          <span>{props.tag2}</span>
        </div>

        <h2>{props.title}</h2>

        <p>{props.desc}</p>

        <a href="/">View Case Study →</a>

      </div>

    </div>
  )
}

export default Wcard