import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Link from "@material-ui/core/Link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-title">
          <h1>Qualyval</h1>
          <p>We work on an outcome based and fixed price model.</p>
        </div>
        <div className="footer-solutions">
          <h1>Solutions</h1>
          <NavLink className="test2" activeClassName="is-active" to="/blogs" exact>
            <a href="blogs.js">Blogs</a>
          </NavLink>

          <a href="aboutus.html">Request a POC</a>
        </div>
        <div className="footer-contact">
          <h1> Contact Us</h1>
          <a href="aboutus.html">
            <PhoneIcon className="footer-Icon" /> +441908751476
          </a>
          <a  href="aboutus.html">
            <MailOutlineIcon className="footer-Icon" /> info@qualyval.com
          </a>
          <a href="aboutus.html">
            <LocationOnIcon className="footer-Icon" /> Milton Keyens, United Kingdom
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>Copyright 2021 QualyVal All Rights Reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <Link href="https://www.linkedin.com/company/qualyval-consulting/about/">
            <LinkedInIcon className="footer-bottom-Icon" />
          </Link>
          <Link href="https://www.youtube.com/channel/UCsTungDSaozR3WHRYszPbuA/featured">
            <YouTubeIcon className="footer-bottom-Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
