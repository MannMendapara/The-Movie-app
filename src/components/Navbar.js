import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navigoter">
        <h1 style={{marginTop:12}}> Movies app </h1>
        <h3 style={{marginLeft:25,marginTop:20}}>favorites</h3>
      </div>
    );
  }
}
