import React from 'react'

const Bcard = ({ title, p }) => {
  return (
    <div className="card-content">
      <h3>{title}</h3>
      <p>{p}</p>
      <button>Read More →</button>
    </div>
  )
}

export default Bcard