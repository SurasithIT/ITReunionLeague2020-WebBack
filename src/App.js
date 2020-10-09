import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";
import $ from "jquery";
import axios from 'axios';


class App extends Component{
 
  
  render(){
    return (
      <div className="wrapper">
        <Header />
        <Router>
          <Sidebar />
          <Content />
        </Router>
        <Footer />
        <div id="sidebar-overlay" onClick={click}></div>
      </div>
    );
  }
}

let click = () => {
  $("#body")
    .removeClass("sidebar-open")
    .addClass("sidebar-collapse sidebar-close");
};

export default App;
