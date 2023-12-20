import React from "react";
import { Link } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb";
import "./About.css";

const fromTop = () => {
  let page = window.scroll({
    top: 0,
    left: 0,
  });
  return page;
};
const About = () => {
  return (
    <div className="about">
      <Link
        className="back"
        to="/"
        onClick={() => {
          fromTop();
        }}
      >
        <TbArrowBack className="t" />
      </Link>

      <header className="about-header">
        <div className="title">
          <h1>About Me </h1>
        </div>
      </header>

      <section className="about-content">
        <div className="introduction">
          <p>
            I am a <span>Front-End Developer</span> with experience in building
            elegant UIs.
          </p>
          <p>I use React.js to consume APIs and build scalable applications.</p>
          <p>
            In terms of technologies, I use React, TailwindCSS, Bootstrap,
            Node.JS, Framer Motion, SaSS, Figma, Adobe Illustrator, Adobe
            Photoshop and Github
          </p>
          <p>
            As a Front-End Developer, I have sharpen my skills in front-end
            development which includes implementing responsive designs, Search
            Engine Optimization(SEO),User Interface and User
            Experience(UI/UX),Attention to Detail, Creativity, Content
            Management Systems(CMS).
          </p>
        </div>
      </section>

      <section className="experience">
        <div>
          <h1>Experience</h1>
          <div>
            <div>
              <h1>PLace 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, ea maxime, alias porro sint eius quod expedita tempora
                atque magni nulla iste assumenda repudiandae aliquid omnis,
                incidunt veniam natus minima!
              </p>
            </div>
            <div>
              <h1>PLace 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, ea maxime, alias porro sint eius quod expedita tempora
                atque magni nulla iste assumenda repudiandae aliquid omnis,
                incidunt veniam natus minima!
              </p>
            </div>
            <div>
              <h1>PLace 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, ea maxime, alias porro sint eius quod expedita tempora
                atque magni nulla iste assumenda repudiandae aliquid omnis,
                incidunt veniam natus minima!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
