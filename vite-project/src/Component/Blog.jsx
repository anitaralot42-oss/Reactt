import React from 'react';
import Bcard from './Bcard';
import Image from '../Image/Image';

const Blog = () => {
  return (
    <div id="Blog">
      <p className="blog-heading">THOUGHTS</p>
      <h1>From the blog</h1>

      <div className="blog-container">

        <div className="blog-card">
          <Image src="https://picsum.photos/500/300?random=1" />
          <Bcard
            title="Why I ditched heavy CSS frameworks for Tailwind"
            p="After years of fighting specificity wars, here's what finally convinced me to make the switch."
          />
        </div>

        <div className="blog-card">
          <Image src="https://picsum.photos/500/300?random=2" />
          <Bcard
            title="Building a design system from scratch"
            p="Tokens, components and docs — the process I follow to build a design system."
          />
        </div>

        <div className="blog-card">
          <Image src="https://picsum.photos/500/300?random=3" />
          <Bcard
            title="5 lessons from my first year of freelancing"
            p="Contracts, pricing and client communication that helped me grow."
          />
        </div>

      </div>
    </div>
  );
};

export default Blog;