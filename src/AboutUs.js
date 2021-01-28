import React, { useEffect } from "react";
import "./AboutUs.css";
import Link from "@material-ui/core/Link";
import Aos from "aos";

import "aos/dist/aos.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <div className="aboutUs">
      <div className="aboutusTop">
        <div className="aboutusTop-left">
          <div
            className="triangle"
            data-aos="slide-right"
            duration={() => {
              Aos.init({ duration: 1900 });
            }}
          ></div>
          <h1 data-aos="zoom-in">What We Do ? </h1>
          <p data-aos="zoom-in-up">
            We (Qualyval) automate business processes by using Intelligent Bots.
            <br />
            <br /> Intelligent bots are computer Software/Programme. They are used to operate
            existing software (CRMs, Email, ERPs, Help desk and any other application) in the same
            way that a person works with those systems. <br />
            <br />
            It enables organisations to automate manual and repetitive rule-based tasks at a
            fraction of the cost of their human equivalent and to integrate without disrupting the
            legacy system. Robots are easy to train and see the interface like a human.
          </p>
        </div>

        <div className="aboutusTop-right" data-aos="slide-left">
          <h1>Platform Keypoints</h1>
          <ul>
            <li>increase efficiency</li>
            <li>24X7 productivity</li>
            <li>100% accuracy</li>
          </ul>
          <Link href="https://youtu.be/3R5W3hUPAtE">
            <button className="utube" href="https://youtu.be/3R5W3hUPAtE">
              Video link <ArrowRightAltIcon className="buttonIcon" />
            </button>
          </Link>
        </div>
      </div>
      <div className="aboutUsBottom">
        <div class="card">
          <div class="wrapper" data-aos="slide-up">
            <img src="https://i.ibb.co/YXdS1gL/desktop.png" alt="customer" />
            <h1>Back Office</h1>
          </div>
          <div class="content">
            <p>
              Save your time and resources with reduced costs and boosting individual creativity.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="wrapper" data-aos="slide-up">
            <img src="https://i.ibb.co/gDYB7Q5/robot-1.png" alt="customer" />
            <h1>Video/Image automation</h1>
          </div>
          <div class="content">
            <p>
              Automate the process of visual inspection/monitoring via CCTV camera or images. E.g.
              Product defect, Surveillance, Real-time face mask detection, Employee monitoring and
              many others.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="wrapper" data-aos="slide-up">
            <img src="https://i.ibb.co/PN0W7z4/customer.png" alt="customer" />
            <h1>Customer Onboarding </h1>
          </div>
          <div class="content">
            <p>
              Automate your unstructured and lengthy process of customer onboarding without
              disturbing your legacy systems.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="wrapper" data-aos="slide-up">
            <img src="https://i.ibb.co/YfnPtQk/accountant.png" alt="account" />
            <h1>Accounting</h1>
          </div>
          <div class="content">
            <p>
              Reduce transactional and routine tasks such as Reconciliation, Accounts payable, data
              entry, bookkeeping and compliance work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
