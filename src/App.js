import "./App.css";
import MainBody from "./MainBody";
import Header from "./Header";
import AboutUs from "./AboutUs";
import OurClients from "./OurClients";
import HowWeDo from "./HowWeDo";
import Benifits from "./Benifits";
import Projects from "./Projects";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./Blogs";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/blogs">
            
            <Blogs/>
          </Route>
          <Route path="/">
            <Header />
            <MainBody />
            <OurClients />
            <Benifits />
            <Projects />
            <AboutUs />
            <HowWeDo />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
