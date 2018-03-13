import React, { Component } from "react";
import "./Home.css";
import config from "../config";

export default class Home extends Component {

  async componentDidMount() {
    fetch(`${config.apiURL}/blogs/newest/false/10`,
    {
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
    .then(results => {
      return results.json();
    }).then(data => {

      this.setState({
      });
    });
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Lost Creatives</h1>
          <p>A simple note taking app</p>
        </div>
      </div>
    );
  }
}
