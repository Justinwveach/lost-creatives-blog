import React, { Component } from "react";
import "./AboutBlurb.css";
import { Link } from "react-router-dom";

export default class AboutBlurb extends Component {

  render() {
    return (
      <aside className="AboutBlurb">
        <img src="https://s3.amazonaws.com/lost-creatives-uploads-dev/IMG_1076.JPG" className="AboutBlurb-image"/>
        <p>We&#39;re Justin and Alyce - your Lost Creatives.</p>
      </aside>
    );
  }
}
