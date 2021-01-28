import React, { useEffect } from "react";
import "./Blogs.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);

  return (
    <div className="blogs">
      <div className="blogHeader">
        <div className="headerLeft">
          <div className="logo"></div>
          <NavLink className="test1" activeClassName="is-active" to="/" exact>
            <h1>Qualyval</h1>
          </NavLink>
        </div>
        <h1>Blog Posts</h1>
      </div>

      <Accordion
        className="blogCard"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        data-aos="slide-left"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <img
            className="blog-cardImage"
            src="https://cdn.dribbble.com/users/375563/screenshots/14773485/media/f5aee547809e948a6d9182e13b9b0858.png"
            alt="images"
          />
          <div className="contentHeader">
            <p>
              Neeraj <span> November 22, 2019</span>
            </p>
            <h1>What are Intelligent Robots?</h1>
            <Typography variant="body2" color="textSecondary" component="p">
              Intelligent bots are software robots used to operate existing software (CRMs, ERPs,
              help desk and any other application) in the same way that a person works with those
              systems.
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Intelligent bots are software robots used to operate existing software (CRMs, ERPs,
              help desk and any other application) in the same way that a person works with those
              systems. It enables organisations to automate manual and repetitive rule-based tasks
              at a fraction of the cost of their human equivalent and to integrate without
              disrupting the legacy system. Robots are easy to train and see the interface like a
              human. Intelligent robots are reliable and performs actions with high accuracy and
              consistency. Intelligent Robots follow all regulatory compliance standards.
            </p>
            <div className="down">
              <h1>Advantages:</h1>
              <h3>Accuracy</h3>
              <p>Less prone to error and performs with accuracy and uniformity.</p>
              <h3>Reliability</h3>
              <p>Bot can work 24*7 effectively without supervision.</p>
              <h3>Consistency</h3>
              <p>Repetitive tasks are performed in the exact same manner each time.</p>
              <h3>Compliance</h3>
              <p>Follows all the regulatory rules to provide audit free trial.</p>
              <h3>Productivity</h3>
              <p>
                Lesser Execution time creates the opportunity for an organization to increase
                profits.
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="blogCard"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        data-aos="slide-right"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <img
            className="blog-cardImage"
            src="https://cdn.dribbble.com/users/5619636/screenshots/14396374/media/e6ea146d020c17bee9645e5ee59336f5.png"
            alt="images"
          />
          <div className="contentHeader">
            <p>
              Neeraj <span> June 16, 2020</span>
            </p>
            <h1>RPA and its advantages!</h1>
            <Typography variant="body2" color="textSecondary" component="p">
              Robotic Process Automation (RPA) is a technology for automating high volume,
              rules-based, mundane tasks performed by people at a fraction of cost.
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>What is RPA?</h1>
            <p>
              Robotic process automation (RPA) is the use of software with artificial intelligence
              (AI) and machine learning capabilities to handle high-volume, repeatable tasks that
              previously required humans to perform. These tasks can include queries, calculations
              and maintenance of records and transactions. In contrast to other, traditional IT
              solutions, RPA allows organizations to automate at a fraction of the cost and time
              previously encountered.
            </p>
            <h1>How does RPA work?</h1>
            <p>
              Robotic Process Automation can mimic a human worker. RPA software is not a part of an
              organization’s IT infrastructure. Instead, it sits on top of it, enabling a company to
              implement the technology quickly and efficiently — all without changing the existing
              infrastructure and systems.
            </p>
            <div className="down">
              <h3>They can:</h3>
              <ul>
                <li>Log into any application.</li>
                <li>Connect to system APIs.</li>
                <li>Copy and paste data.</li>
                <li> Move files and folders.</li>
                <li>
                  Access and process structured and semi-structured data from documents,PDFs, emails
                  and forms.
                </li>
                <li>Read and write to databases.</li>
                <li>Open emails and attachments.</li>
                <li> Scrape data from the web. Open emails and attachments.</li>
                <li>Generate Reports and provide analytical data.</li>
                <li>Scrape data from the web.</li>
              </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="blogCard"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        data-aos="slide-left"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <img
            className="blog-cardImage"
            src="https://cdn.dribbble.com/users/2155131/screenshots/6132468/artificial_intelligence.jpg"
            alt="images"
          />
          <div className="contentHeader">
            <p>
              Neeraj <span> June 16, 2020</span>
            </p>
            <h1>AI and its advantages!</h1>
            <Typography variant="body2" color="textSecondary" component="p">
              AI works by combining large amounts of data with fast, iterative processing and
              intelligent algorithms, allowing the software to learn automatically from patterns or
              features in the data.
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Artificial Intelligence</h2>
            <p>
              Artificial Intelligence works by combining large amounts of data with fast, iterative
              processing and intelligent algorithms, allowing the software to learn automatically
              from patterns or features in the data Artificial intelligence uses machine learning to
              mimic human intelligence. The computer has to learn how to respond to certain actions,
              so it uses algorithms and historical data to create something called a propensity
              model. Propensity models will then start making predictions (like scoring leads or
              something). AI systems perform intelligent searches, interpreting both text and images
              to discover patterns in complex data, and then act on those learnings.
            </p>
            <h3>Advantages:</h3>
            <ul>
              <li>Accurate decision making</li>
              <li>Conversion of Information to knowledge.</li>
              <li>Capable of detecting complex and unstructured data.</li>
              <li>Increase in availability of systems.</li>
              <li>Aid in decision making.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
