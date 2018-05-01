import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program.

        The dreams of yesterday are the hopes of today and the reality of tomorrow.

        The regret on our side is, they used to say years ago, we are reading about you in science class. Now they say, we are reading about you in history class.

        Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.

        I believe every human has a finite number of heartbeats. I don't intend to waste any of mine
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Jonathan Doe</span>
              <br />
              <span>
                1600 Amphitheatre Parkway
                <br /> Mountain View, CA 94043 US
              </span>
              <br />
              <span>(123)456-7890</span>
              <br />
              <span>anyone@website.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
