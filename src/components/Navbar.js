import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navigoter">
        <h1 style={{marginTop:12,marginLeft:"8px"}} className="nav"><a href="/" style={{all:"unset"}}>Movies App</a></h1>
        <h3 style={{marginLeft:25,marginTop:20}} className="nav"><a href="/favorite" style={{all:"unset"}}>favorites</a></h3>
      </div>
    );
  }
}
