import React from "react";
import { Hero, Project, Navbar } from "../../components";
import "./Home.css";

const Home = ({ project }) => {
  return (
    <div className=" font-nun">
      <Navbar />
      <Hero />
      <Project project={project} />
    </div>
  );
};

export default Home;
