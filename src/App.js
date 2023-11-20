import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components";
import { Home, About } from "./pages";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [project, setProject] = useState([]);

  // const getProject = async () => {
  //   const data = await client.fetch(
  //     `*[_type == 'projects']{
  //       _id,
  //       name,
  //       description,
  //       projectImage,
  //       githubLink,
  //       liveProjectLink
  //     }`
  //   );

  //   // console.log(data);
  //   setProject(data);
  // };

  // useEffect(() => {
  //   getProject();
  // }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
