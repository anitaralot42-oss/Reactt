import React from "react";
import Image from "../../Image/Image";
import Acard from "./Acard";

const About = () => {
  return (
    <section id="about">

      <div className="about-left">
        <Image />
      </div>

      <div className="about-right">
        <Acard />
      </div>

    </section>
  );
};

export default About;