import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Customers from "./Customer";
import Cars from "./Car";
import Rentals from "./Rentals";
import Admins from "./Admins";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <h1>Car Rental Management System</h1>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/customers" className="nav-link">Customers</Link>
            </li>
            <li>
              <Link to="/cars" className="nav-link">Cars</Link>
            </li>
            <li>
              <Link to="/rentals" className="nav-link">Rentals</Link>
            </li>
            <li>
              <Link to="/admins" className="nav-link">Admins</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/cars">
            <Cars />
          </Route>
          <Route path="/rentals">
            <Rentals />
          </Route>
          <Route path="/admins">
            <Admins />
          </Route>
          <Route path="/">
            <h2>Welcome to the Car Rental Management System</h2>
            <p>Please select a section from the menu.</p>
          </Route>
        </Switch>
        <Footer/>{Footer}
      </div>
    </Router>
  );
}

export default App;

