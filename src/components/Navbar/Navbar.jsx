import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import Time from "../Time/Time";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [nav, setNav] = useState(false);

  const fromTop = () => {
    let page = window.scroll({
      top: 0,
      left: 0,
    });

    return page;
  };

  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (show && ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("scroll", handler);
    };
  }, [show]);

  const changeBackground = () => {
    if (window.scrollY < 500) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div className={`navbar ${nav && "active"}`}>
      <div className="left">
        <Link to="/">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.48 54.6">
              <motion.path
                class="cls-1"
                d="M1,38.9c9.37-2.78,18.71-5.67,28.12-8.32,7.82-2.2,15.59-5.55,21.41-11.39,2.57-2.58,4.77-5.78,5.11-9.41S53.92,2.14,50.4,1.21c-2.82-.74-5.77.57-8.14,2.25a35.86,35.86,0,0,0-9,9.8C31,16.68,29,20.51,29,24.61,29,33.43,39.45,36.84,46.6,38a22.62,22.62,0,0,0,7.52.19C66.83,36,66.75,19.71,73.44,11.44a8.94,8.94,0,0,1,3.42-2.78C86,4.93,80.67,21.94,80,24.84a5.36,5.36,0,0,0-.21,2.1,1.8,1.8,0,0,0,1.3,1.52c5,.94,6.55-13.91,7.94-16.83a2.48,2.48,0,0,1,1.42-1.51c1.25-.3,2.1,1.23,2.38,2.49,1.31,5.87.38,12-.82,17.77a10.23,10.23,0,0,0-.33,3.6c.48,3.2,3.8,3.6,5.9,1.56,4-3.85,3.37-9.82,3.79-14.88a16,16,0,0,1,1.88-6.83c1.11-1.89,3.73-4.2,5-1,1.73,4.21.13,9,1.68,13.18.36.94,1.23,2,2.19,1.65a2.07,2.07,0,0,0,.71-.51c1.59-1.69,1.8-4.73,2.34-6.89.39-1.52,1.67-11.06,4.08-10a3,3,0,0,1,1.45,2.11c1.77,6.16,0,12.7,1.94,18.83,4.5,13.93,23.59,11.22,32.48,3.53,3.37-2.91,5.67-7.43,4.83-11.8A13.66,13.66,0,0,0,156,16a17.7,17.7,0,0,0-8.29-4.84,12.57,12.57,0,0,0-9.38,1.33,14.15,14.15,0,0,0-5.94,9,14.89,14.89,0,0,0,.32,8.29,11.57,11.57,0,0,0,4.5,5.72c3.12,2,7,2.31,10.73,2.54,13.89.86,27.21,4.69,36.58,15.54"
                stroke="#ed1c24"
                stroke-width="5"
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                initial={{
                  opacity: 0,
                  pathLength: 0,
                }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                }}
                transition={{
                  delay: 1.2,
                  duration: 1.2,
                }}
              />
            </svg>
          </div>
        </Link>
      </div>

      <div className="center">
        <div className="time">
          <p>{<Time />}</p>
        </div>
      </div>

      <div className="right" ref={ref}>
        <div className="menu" onClick={() => setShow((e) => !e)}>
          <span>{show ? "close" : "menu"}</span>
        </div>
        <div className={`nav-links  ${show ? "showing" : ""}`}>
          <ul className="links  ">
            <HashLink
              to="#project"
              smooth
              onClick={() => setShow(false)}
              className="link  "
            >
              <li>Projects</li>{" "}
            </HashLink>

            <Link
              to="/about"
              onClick={() => {
                setShow(false);
                fromTop();
              }}
              className="link"
            >
              <li> About</li>
            </Link>

            <HashLink
              to="#contact"
              smooth
              onClick={() => setShow(false)}
              className="link"
            >
              {" "}
              <li className="btn">Let's Talk</li>
            </HashLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
