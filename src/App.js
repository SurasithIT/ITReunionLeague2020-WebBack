import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Content from "./components/Content";
import $ from "jquery";
import Login from "./components/pages/Login";

const App = () => {
  let auth = false;
  if (auth === false) {
    return (
      <Router>
        <Route path="/Login" component={Login} />
        <Redirect to="/Login" />
      </Router>
    );
  } else {
    return (
      <Router>
        <Redirect to="/Admin" />
        <div className="wrapper">
          <Header />
          <Sidebar />
          <Content />
          <Footer />
          <div id="sidebar-overlay" onClick={click}></div>
        </div>
      </Router>
    );
  }
};

let click = () => {
  $("#body")
    .removeClass("sidebar-open")
    .addClass("sidebar-collapse sidebar-close");
};

export default App;
