import React from "react";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Project.css";
import project from "./data.js";
// import { urlFor } from "../../client.js";

const Project = () => {
  project.map((data) => {
    return console.log(data.image);
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let observer = new window.IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          self.unobserve(entry.target);
        }
      });
    });
    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);
  const loadImages = (image) => {
    image.src = image.dataset.src;
  };

  const iAnimate = {
    offscreen: { y: 400, opacity: 1 },
    onscreen: { y: 0, opacity: 1 },
    transition: {
      delay: 3,
      duration: 3,
      type: "spring",
    },
  };
  const tAnimate = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1 },
    transition: {
      delay: 5,
      duration: 5,
    },
  };

  return (
    <div className="project" id="project">
      <div className="head">
        <h2>Projects</h2>
      </div>
      <div className="project-card">
        {project.map((data) => (
          <motion.div
            className="card"
            key={data.id}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <div className="image">
              <a href={data.link}>
                <motion.img
                  variants={iAnimate}
                  src={""}
                  data-src={data.image}
                  alt={""}
                  className={loaded ? "loaded" : "loading"}
                  onLoad={() => setLoaded(true)}
                />
              </a>
            </div>
            <div className="info">
              <div className="name">
                <motion.h2 variants={tAnimate}>{data.name}</motion.h2>

                <motion.p variants={tAnimate}>{data.type}</motion.p>
              </div>

              <div className="links">
                <a href={data.git}>
                  <div className="github">
                    <BsGithub
                      className="g"
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                </a>

                <a href={data.link}>
                  {" "}
                  <div className="weblink">
                    <FiExternalLink
                      className="w"
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
