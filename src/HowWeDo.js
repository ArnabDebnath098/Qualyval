import React, { useEffect } from "react";
import "./HowWeDo.css";
import Aos from "aos";
import "aos/dist/aos.css";

function HowWeDo() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="howWeDo">
      <div className="howWeDo-left">
        <h1>How We Do It?</h1>
        <svg class="loader" width="76px" height="16px" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle
              cx="10"
              cy="10"
              r="5"
              stroke="#423f3f"
              stroke-width="2"
              fill="#1985D3"
              opacity="0"
            >
              <animate
                id="Circle1"
                attributeName="opacity"
                from="0"
                to="1"
                dur=".6s"
                begin=".3s; Circle4.end"
                fill="freeze"
              />
              <animate attributeName="opacity" from="1" to="0" dur=".3s" begin="Circle4.end" />
            </circle>
            <circle
              cx="30"
              cy="10"
              r="5"
              stroke="#423f3f"
              stroke-width="2"
              fill="#F75562"
              opacity="0"
            >
              <animate
                id="Circle2"
                attributeName="opacity"
                from="0"
                to="1"
                dur=".6s"
                begin="Circle1.end"
                fill="freeze"
              />
              <animate attributeName="opacity" from="1" to="0" dur=".3s" begin="Circle4.end" />
            </circle>
            <circle
              cx="50"
              cy="10"
              r="5"
              stroke="#423f3f"
              stroke-width="2"
              fill="#6FBC46"
              opacity="0"
            >
              <animate
                id="Circle3"
                attributeName="opacity"
                from="0"
                to="1"
                dur=".6s"
                begin="Circle2.end"
                fill="freeze"
              />
              <animate attributeName="opacity" from="1" to="0" dur=".3s" begin="Circle4.end" />
            </circle>
            <circle
              cx="70"
              cy="10"
              r="5"
              stroke="#423f3f"
              stroke-width="2"
              fill="#FBE300"
              opacity="0"
            >
              <animate
                id="Circle4"
                attributeName="opacity"
                from="0"
                to="1"
                dur=".6s"
                begin="Circle3.end"
                fill="freeze"
              />
              <animate attributeName="opacity" from="1" to="0" dur=".3s" begin="Circle4.end" />
            </circle>
          </g>
        </svg>
        <p>
          We make the whole process hastle free for you by making the process automated with
          intelligent bots.
        </p>
      </div>
      <div className="howWeDo-right">
        <div className="block">
          {/* <div className="circle"></div> */}
          <div className="block-content" data-aos="slide-left">
            <li>
              <h3>Understand Customer's Pain Point</h3>
              <p>Innovation comes from understanding true Pain-Points</p>
            </li>
          </div>
        </div>
        <div className="block">
          {/* <div className="circle design1"></div> */}
          <div className="block-content" data-aos="slide-left">
            <li>
              <h3>Building Proof of Concept</h3>
              <p>
                POC lets our client know the power of automation and the speed in which tasks can be
                done.
              </p>
            </li>
          </div>
        </div>
        <div className="block">
          {/* <div className="circle design"></div> */}
          <div className="block-content" data-aos="slide-left">
            <li>
              <h3>Designing and Training the Intelligent Robot</h3>
              <p>
                Intelligent robots are easy to train and can be designed much faster without
                <br />
                disrupting any existing IT systems.
              </p>
            </li>
          </div>
        </div>
        <div className="block">
          {/* <div className="circle"></div> */}
          <div className="block-content" data-aos="slide-left">
            <li>
              <h3>Release and Maintenance</h3>
              <p>Intelligent Robots are at very low cost to maintain</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeDo;
