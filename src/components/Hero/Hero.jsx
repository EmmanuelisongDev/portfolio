import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillSquareFill } from "react-icons/bs";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import ParallaxText from "../ParallaxText/ParallaxText.js";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { DiIllustrator } from "react-icons/di";
import { BiLogoSass } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { SiFramer } from "react-icons/si";

import "./Hero.css";

const Hero = () => {
  return (
    <motion.div
      className="hero"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3, staggerChildren: 1 }}
    >
      <ParallaxText />

      <motion.div
        className="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p>
          "HEY,I am a FRONT-END{" "}
          {/* <AiFillStar
            style={{
              display: "inline",
              fontSize: "100%",
              color: "#39ff14",
            }}
          />{" "} */}
          <br />
          DEVELOPER and ux engineer <br />
          proficient in{" "}
          {/* <BsFillSquareFill
            style={{
              fontSize: "100%",
              display: "inline",
              color: "#9d00ff",
            }}
          />{" "} */}
          creating <br />
          <span className="under"> visually pleasing</span> digital
          experiences."
          {/* <TbTriangleInvertedFilled
            style={{
              display: "inline",
              fontSize: "100%",
              color: "#ff3131",
            }}
          /> */}
        </p>
      </motion.div>

      <div className="marqueeContainer">
        <div className="marqueeContent">
          <span>
            <FaReact className="logo" />
          </span>
          <span>
            <SiTailwindcss className="logo" />
          </span>
          <span>
            {" "}
            <AiFillGithub className="logo" />
          </span>
          <span>
            {" "}
            <DiIllustrator className="logo" />
          </span>
          <span>
            {" "}
            <BiLogoSass className="logo" />
          </span>
          <span>
            {" "}
            <FaFigma className="logo" />
          </span>
          <span>
            {" "}
            <SiNodedotjs className="logo" />
          </span>
          <span>
            {" "}
            <SiFramer className="logo" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
