import React from "react";
import { Route } from "react-router-dom";
import Match from "./pages/Match";
import Player from "./pages/Player";
import Team from "./pages/Team";
import Admin from "./pages/Admin";

const Content = () => {
  return (
    <div className="content-wrapper">
      {/* <Switch> */}
      <Route exact path="/" component={Admin} />
      <Route path="/Admin" component={Admin} />
      <Route path="/Match" component={Match} />
      <Route path="/Team" component={Team} />
      <Route path="/Player" component={Player} />
      {/* </Switch> */}
    </div>
  );
};

export default Content;
