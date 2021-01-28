import React, { useEffect } from "react";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <div className="projects">
      <div className="projects-head">
        <h1>Intelligent Automation</h1>
        
      </div>

      <div className="projects-delivered">
        <div className="projects-top">
          <div className="projects-card">
            <div className="project-name" data-aos="zoom-in">
              <h3>AR Reconciliation</h3>
              <p>Reduced the AR Recon process from 7FTE manual days to 1 hr of automation.</p>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-name" data-aos="zoom-in">
              <h3>Legal Directory</h3>
              <p>Have automated the process to create new records and the documents.</p>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-name" data-aos="zoom-in">
              <h3>Customer Onboarding</h3>
              <p>Have automated the costomer onboarding.</p>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-name" data-aos="zoom-in">
              <h3>Document Controller</h3>
              <p>Automation of the work of Document controller's.</p>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-name" data-aos="zoom-in">
              <h3>Recruitment Process</h3>
              <p>
                Have provided a strategic consulting on automating the end to end recruitment
                process.
              </p>
            </div>
          </div>
        </div>
        <div className="projects-bottom">
          <div className="projects-card">
            <div className="project-name" data-aos="zoom-in">
              <h3>Payment Automation</h3>
              <p>Automating the payment by reading email and transaction the necessary payment.</p>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-name" data-aos="zoom-in">
              <h3>Credit Check</h3>
              <p>Automated credit check process.</p>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-name" data-aos="zoom-in">
              <h3>A/C Payable</h3>
              <p>Automated the invoice processing method.</p>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-name" data-aos="zoom-in">
              <h3>Hyper Volume Processing</h3>
              <p>Have processed 250k documents within a week using automation.</p>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-name" data-aos="zoom-in">
              <h3>Credit Claim Filing</h3>
              <p>Automated filing of a credit claim lawsuit on the judiciary portal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
