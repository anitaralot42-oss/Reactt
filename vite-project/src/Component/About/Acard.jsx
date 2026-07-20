import React from "react";

const Acard = () => {
  return (
    <>

      <p className="about-subtitle">ABOUT ME</p>

      <h1 className="about-title">
        A bit about <br /> who I am
      </h1>

      <p className="about-text">
        I'm Anita, a freelance designer and frontend developer based in Paris
        with 5 years of experience shipping digital products for startups,
        agencies and scale-ups across Europe.
      </p>

      <p className="about-text">
        I believe great interfaces are invisible—they get out of the user's
        way. My work is fast, accessible and built to last.
      </p>

      <h4 className="stack">STACK & TOOLS</h4>

      <div className="skills">
        <span>Tailwind CSS</span>
        <span>Alpine.js</span>
        <span>Figma</span>
        <span>HTML / CSS</span>
        <span>JavaScript</span>
        <span>Symfony</span>
        <span>Framer</span>
        <span>Webflow</span>
      </div>

    </>
  );
};

export default Acard;