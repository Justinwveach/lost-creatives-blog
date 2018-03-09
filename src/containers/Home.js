import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {

  async componentDidMount() {
    fetch(`https://eafalsk4f4.execute-api.us-east-1.amazonaws.com/prod/blogs`,
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
      console.log(data);

      for (var image of data[0].images) {
        console.log(image);
      }
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
