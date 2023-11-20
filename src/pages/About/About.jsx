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
            I am a <span>Front-End Developer</span> and ux engineer with a
            degree in Computer Science. With skills in JavaScript, TailwindCSS,
            React.{" "}
          </p>
          <p>
            In terms of technologies, I am proficient in React, TailwindCSS,
            Bootstrap, Node.JS, Framer Motion, SaSS, Figma, Adobe Illustrator,
            Adobe Photoshop and Github
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
    </div>
  );
};

export default About;
