import React, { useEffect } from "react";
import "./OurClients.css";
import Aos from "aos";
import "aos/dist/aos.css";

function OurClients() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="ourClients">
      <svg
        className="svgicon"
        version="1.1"
        x="0px"
        y="0px"
        width="500px"
        height="250px"
        viewBox="0 0 500 250"
        enable-background="new 0 0 500 250"
      >
        <g id="lines_1_">
          <line
            fill="none"
            stroke="#000000"
            stroke-width="3"
            stroke-miterlimit="10"
            x1="185"
            y1="250"
            x2="248.048"
            y2="0"
          />
          <line
            fill="none"
            stroke="#000000"
            stroke-width="3"
            stroke-miterlimit="10"
            x1="310"
            y1="0"
            x2="249.98"
            y2="250.021"
          />
        </g>
      </svg>
      <div className="ourClients-left" data-aos="slide-down">
        <h1>Sample Case Studies</h1>
        <ul>
          <li>Automation of AR Reconciliation | 7 FTE days per month to 2 hours. </li>
          <li>Automation of AP Process | 10 FTE days per month to 5 hours.</li>
          <li>Automation of Customer On-boarding | 6 hours per case to few minutes.</li>
          <li>Automation of Credit check | 30 minutes per case to 5 minutes per case.</li>
        </ul>
      </div>

      <div className="ourClients-right" data-aos="slide-up">
        <h1>Our Clients</h1>
        <p>
          We worked with versatile companies and helped them grow a lot with our automation
          technology.
        </p>
        <div className="clientsName">
          <div className="two-boxLeft">
            <div className="box boxDesign-1" data-aos="zoom-in">
              <img
                src="https://www.hinrichsestimating.com/wp-content/uploads/2020/10/logo.svg"
                alt="fendi"
              />
            </div>
            <div className="box boxDesign-2" data-aos="zoom-in">
              <img
                src="https://i.ibb.co/DzDtLv0/premier-business-audio-largex5-logo.png"
                alt="fendi"
              />
            </div>
          </div>

          <div className="two-boxRight">
            <div className="box" data-aos="zoom-in">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Fendi_logo.svg/1200px-Fendi_logo.svg.png"
                alt="fendi"
              />
            </div>
            <div className="box boxDesign-3" data-aos="zoom-in">
              <img src="https://i.ibb.co/Lt2kZB2/bt-business-logo-1.png" alt="fendi" />
            </div>
            <div className="box boxDesign-4" data-aos="zoom-in">
              <img
                src="https://www.bendbal.com.au/wp-content/uploads/2019/02/get-capital-logo.png"
                alt="fendi"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
