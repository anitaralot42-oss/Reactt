
import React from "react";

const Contact = () => {
  return (
    <section id="contact">

      <div className="contact-left">

        <p className="heading">GET IN TOUCH</p>

        <h1>Let's work together</h1>

        <p className="text">
          I'm open to UI/UX and frontend projects, freelance work,
          internships, or full-time opportunities. Let's connect!
        </p>

        <div className="info">
          <span>📧</span>
          <p>anitameghwal@gmail.com</p>
        </div>

        <div className="info">
          <span>💼</span>
          <p>linkedin.com/in/anitameghwal</p>
        </div>

        <div className="info">
          <span>💻</span>
          <p>github.com/anitaralot42-oss</p>
        </div>

      </div>

      <div className="contact-right">

        <div className="row">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
        </div>

        <input type="text" placeholder="Subject" />

        <textarea
          rows="7"
          placeholder="Tell me about your project..."
        ></textarea>

        <button>Send Message →</button>

      </div>

    </section>
  );
};

export default Contact;