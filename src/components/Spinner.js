import React, { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div
        className="text-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <img src={loading} alt="loading" height={100} />
      </div>
    );
  }
}

export default Spinner;
