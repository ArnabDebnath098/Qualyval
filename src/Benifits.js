import React, { useEffect } from "react";
import "./Benifits.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Benifits() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="benifits">
      <h1>Benefits of Intelligent bots</h1>
      <div className="benifits-cards">
        <div className="benifits-top">
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>01</h1>
              <img src="https://i.ibb.co/3FRjSBG/diagram.png" alt="cardImage" />
            </div>
            <h4>Increase Efficiency</h4>
          </div>
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>02</h1>
              <img src="https://i.ibb.co/H4K8VNd/dart.png" alt="cardImage" />
            </div>
            <h4>100% Accuracy</h4>
          </div>
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>03</h1>
              <img src="https://i.ibb.co/KD112Kh/24-hours.png" alt="cardImage" />
            </div>
            <h4>24 X 7 productivity</h4>
          </div>
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>04</h1>
              <img src="https://i.ibb.co/FgmNyMM/smile-1.png" alt="cardImage" />
            </div>
            <h4>Improve customer Experience </h4>
          </div>
        </div>
        <div className="benifits-middle">
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>05</h1>
              <img src="https://i.ibb.co/xmQ0F9h/eye.png" alt="cardImage" />
            </div>
            <h4>Enhance Visibility</h4>
          </div>
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>06</h1>
              <img src="https://i.ibb.co/yq1J6tC/chronometer.png" alt="cardImage" />
            </div>
            <h4>Improve time to market</h4>
          </div>
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>07</h1>
              <img src="https://i.ibb.co/B21Kzz6/stamp.png" alt="cardImage" />
            </div>
            <h4>Comply with industry regulations</h4>
          </div>
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>08</h1>
              <img src="https://i.ibb.co/C979WZ4/euro.png" alt="cardImage" />
            </div>
            <h4>Reduce Costs</h4>
          </div>
        </div>
        <div className="benifits-bottom">
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>09</h1>
              <img src="https://i.ibb.co/XsHPbHZ/running.png" alt="cardImage" />
            </div>
            <h4>Speed up process time</h4>
          </div>
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>10</h1>
              <img src="https://i.ibb.co/tCFGbrx/start-up.png" alt="cardImage" />
            </div>
            <h4>Boost Scalability</h4>
          </div>
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>11</h1>
              <img src="https://i.ibb.co/DfBtL6W/settings.png" alt="cardImage" />
            </div>
            <h4>Optimize Resources</h4>
          </div>
          <div className="benifits-card" data-aos="zoom-in">
            <div className="cardHeader">
              <h1>12</h1>
              <img src="https://i.ibb.co/MnNmhL2/speed.png" alt="cardImage" />
            </div>
            <h4>Accelerate digital transformation programmes</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
// https://i.ibb.co/rfX9cWS/Polygon-5.png
//
//
//
//
//
//
//
//
//
//
//
