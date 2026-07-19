import React from 'react'

const Rcard = (props) => {
  return (
    <div id={props.id} className="review-card">

      <h3 className="stars">★★★★★</h3>

      <p>{props.title}</p>

      <div className="client">

        <img src={props.img} alt={props.name} />

        <div>
          <h4>{props.name}</h4>
          <span>{props.post}</span>
        </div>

      </div>

    </div>
  )
}

export default Rcard