import HomePage from "./Pages/Home/Home";
import AboutPage from "./Pages/About/About";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PortfolioPage from "./Pages/Portfolio/PortfolioPage";
import ServicePage from "./Pages/Services/ServicePage";
import ContactUs from "./Pages/ContactUs/ContactUs";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/services">
            <ServicePage />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </Router>
  );
}
