import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Content from "./components/Content";
import $ from "jquery";
import Login from "./components/pages/Login";
import LoadingSpinner from "./components/spinner/LoadingSpinner";

const App = () => {
  if (localStorage.getItem("token") === null) {
    return (
      <Fragment>
        <LoadingSpinner />
        <Router>
          <Route path="/Login" component={Login} />
          <Redirect to="/Login" />
        </Router>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <LoadingSpinner />
        <Router>
          <Redirect to="/" />
          <div className="wrapper">
            <Header />
            <Sidebar />
            <Content />
            <Footer />
            <div id="sidebar-overlay" onClick={click}></div>
          </div>
        </Router>
      </Fragment>
    );
  }
};

let click = () => {
  $("#body")
    .removeClass("sidebar-open")
    .addClass("sidebar-collapse sidebar-close");
};

export default App;
