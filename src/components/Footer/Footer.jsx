import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsLink } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import smile from "./giphy.gif";
import "./Footer.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setText("");
    emailjs
      .sendForm(
        "service_f9sa54o",
        "template_7490ul6",
        form.current,
        "960qrZNKNwZq_1JEQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const iAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: { x: 0, opacity: 1 },
    transition: {
      delay: 3,
      duration: 3,
    },
  };

  return (
    <motion.div
      className="footer"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="contact" id="contact">
        <div className="header">
          <h1>Contact</h1>
        </div>
        <div className="footer-links">
          <motion.div variants={iAnimate} className="socials">
            <ul>
              <a
                className="l"
                href="https://www.linkedin.com/in/emmanuel-isong-086b19208/"
              >
                {" "}
                <li>
                  linkedin
                  <BsLink className="lnk" />
                </li>
              </a>
              <a className="l" href="https://github.com/EmmanuelisongDev">
                {" "}
                <li>
                  github
                  <BsLink className="lnk" />
                </li>
              </a>
              <a className="l" href="https://twitter.com/emmisongdev">
                <li>
                  twitter
                  <BsLink className="lnk" />
                </li>
              </a>
            </ul>
          </motion.div>

          {/* <motion.div className="smile" variants={iAnimate}>
            <img src={smile} alt="" />
          </motion.div> */}
        </div>

        <motion.form ref={form} onSubmit={sendEmail} variants={iAnimate}>
          <input
            type="text"
            name="user_name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            type="email"
            name="user_email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            name="message"
            placeholder="Enter Message"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />

          <input type="submit" value="Send" />
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Footer;
