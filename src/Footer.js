import React from 'react';
import './Footer.css';
import instagram from './assets/icon_instagram.png';
import youtube from './assets/icon_youtube.png';
import linkedin from './assets/icon_linkedin.png';
import blog from './assets/icon_blog.png';
import {BrowserRouter, Link} from "react-router-dom";

const Footer = () => {
  return (
      <footer className="footer-container">
        <div className="footer-column social-media">
          <p className="footer-subtitle">Follow Us</p>
          <div className="icons">
            <BrowserRouter>
              <Link to="https://instagram.com">
                <img src={instagram} alt={"home"} className={"image_link"}/>
              </Link>
              <Link to="https://youtube.com">
                <img src={youtube} alt={"home"} className={"image_link"}/>
              </Link>
              <Link to="https://linkedin.com">
                <img src={linkedin} alt={"home"} className={"image_link"}/>
              </Link>
              <Link to="https://junyeong.vercel.app">
                <img src={blog} alt={"home"} className={"image_link"}/>
              </Link>
            </BrowserRouter>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-subtitle">Use cases</p>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>
        <div className="footer-column">
          <p className="footer-subtitle">Explore</p>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>
        <div className="footer-column">
          <p className="footer-subtitle">Resources</p>
          <ul>
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
      </footer>
  );
};

export default Footer;
