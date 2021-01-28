import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import DescriptionIcon from "@material-ui/icons/Description";
import InfoIcon from "@material-ui/icons/Info";
import BallotIcon from "@material-ui/icons/Ballot";
import PhoneIcon from "@material-ui/icons/Phone";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <div className="logo"></div>
        <Link className="test1" to="mainBody" smooth={true} duration={500}>
          <h1>Qualyval</h1>
        </Link>
      </div>

      <div className="headerContent">
        <Link className="test6" to="benifits" smooth={true} duration={500}>
          <h4>
            <WorkOutlineIcon className="headerIcon" />
            <span>Benifits</span>
          </h4>
        </Link>
        <Link className="test6" to="projects" smooth={true} duration={500}>
          <h4>
            <DescriptionIcon className="headerIcon" />
            <span>Projects</span>
          </h4>
        </Link>
        <Link className="test6" to="aboutUs" smooth={true} duration={500}>
          <h4>
            <InfoIcon className="headerIcon" />
            <span> What we do?</span>
          </h4>
        </Link>
        <Link className="test6" to="howWeDo" smooth={true} duration={500}>
          <h4>
            <BallotIcon className="headerIcon" />
            <span> How we do ? </span>
          </h4>
        </Link>

        <Link className="test6" to="footer" smooth={true} duration={500}>
          <h4>
            <PhoneIcon className="headerIcon" />
            <span> Contact </span>
          </h4>
        </Link>

        <NavLink className="test1" activeClassName="is-active" to="/blogs" exact>
          <h4>
            <ChromeReaderModeIcon className="headerIcon" />
            <span> Blogs </span>
          </h4>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
