import React, { Component } from "react";
import "./SocialMedia.css";
import { Link } from "react-router-dom";

export default class SocialMedia extends Component {

  render() {
    return (
      <section className="SocialMedia">
        <img src={require('../images/instagram.png')} />
      </section>
    );
  }
}
