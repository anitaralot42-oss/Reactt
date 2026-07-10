import React from 'react'


function Cards(props) {
  return (
   <>
  
    <div className='cards'>
    <div className='card'>
        <img src = {props.imgsrc} alt='dark' className='card_img'/>
    </div>

    <div className='card_info'>
    <span className='class_category'>{props.title}</span>
   <h4>{props.sname}</h4>
    <a href={props.link} target='_blank'>
    <button>Watch Now</button>
    </a>

    </div>

    </div>  
</>
  )
}

export default Cards
