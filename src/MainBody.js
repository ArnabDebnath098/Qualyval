import React, { useEffect } from "react";
import "./MainBody.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function MainBody() {
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);

  return (
    <div className="mainBody">
      <div className="mainBody-left" data-aos="slide-right">
        <h1>
          We Automate Business process <span> using Intelligent Bot!</span>
        </h1>

        <div className="clientsReview" data-aos="zoom-in">
          <div className="profile">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEHOHW811nGbw/profile-displayphoto-shrink_800_800/0/1520785250376?e=1622678400&v=beta&t=yF5GuXsC75E3EKx0H0tevUvowXc7FhxenhGU2g-hu24"
              alt="profileImage"
            />
            <div className="profileName">
              <h3>Paul Croke</h3>
              <p>President at Hinrichs Estimating</p>
            </div>
          </div>
          <div className="comment">
            <p>
              Earlier this month my team implemented their first bot. Concept to implementation was
              less than 60 days and ROI will exceed 600%! Most importantly, it eliminates repetitive
              daily tasks to drive better customer and employee experience. A huge thank you to
              <span>Pramod Rai</span> and the fantastic team at <span>Qualyval</span> !
            </p>
          </div>
        </div>
        <Link className="test7" to="footer" smooth={true} duration={500}>
          <button>Contact Us</button>
        </Link>
      </div>
      <div className="mainBody-right">
        <div class="profile-row">
          <div class="dp">
            <div class="dp-arc-outer"></div>
            <div class="dp-arc-inner"></div>
            <div class="loading-wrapper">
              <div class="clock">
                <div class="minutes"></div>
                <div class="hours"></div>
              </div>
            </div>
          </div>
        </div>
        <h1 data-aos="zoom-in" className="twentyFour">
          24
        </h1>
        <img
          data-aos="zoom-in"
          src="https://i.ibb.co/61MsZVC/92714aec4109b5b65f679355203e50cd-3.png"
          alt="zoomImage"
        />
      </div>

      <div id="mouse-scroll">
        <div className="mouse">
          <div className="mouse-in"></div>
        </div>
        <div>
          <span className="down-arrow-1"></span>
          <span className="down-arrow-2"></span>
          <span className="down-arrow-3"></span>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
