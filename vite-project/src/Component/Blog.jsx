import React from 'react'
import Bcard from './Bcard'
import Image from '../Image/Image'

const Blog = (props) => {
  return (
    <div id='Blog'>
      <p>Thoughts</p>
      <h1>From the blog</h1>
      <Image />
      <Bcard
      title = "Why I ditched heavy CSS framework for Talwind"
      p = "After years of fighting specificity wars, here's what finally convinced me to make the switch."
       />
       
        <Image />
      <Bcard
      title = "Why I ditched heavy CSS framework for Talwind"
      p = "After years of fighting specificity wars, here's what finally convinced me to make the switch."
       />

        <Image />
      <Bcard
      title = "Why I ditched heavy CSS framework for Talwind"
      p = "After years of fighting specificity wars, here's what finally convinced me to make the switch."
       />

    </div>
  )
}

export default Blog
