import React, { Component } from "react";
import "./Footer.css";
import config from "../config";
import Button from "../components/Button";
import TextField from "../components/TextField";

export default class Footer extends Component {

  componentDidMount() {
    this.state = {
      emailInput: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (

      <footer className="Footer">
        <div className="Footer-contact">
          <div className="container">
            <div className="row Footer-verticalRow">
              <div className="col col-sm-12 col-md-4 App-contactLeft">
                <h5>We&#39;re for hire!</h5>
                  <p>We would love to make your next project come to life.</p>
                <Button title="Start Your Project" />
              </div>

              <div className="col col-sm-12 col-md-8 Footer-contactRight">
                <div className="row">
                  <div className="col col-sm-12 App-links">
                    <ul>
                      <li>Instagram</li>
                      <li>Facebook</li>
                      <li>justinveach.com</li>
                      <li>alycecalkins.com</li>
                    </ul>
                    Hello@LostCreatives.com
                    </div>
                </div>

                <div className="row">
                  <div className="col col-sm-12 Footer-contactForm">
                    <form onSubmit={this.sendEmail}>
                      <div className="row">
                        <div className="col col-sm-12">
                          <label htmlFor="emailInput">Sign up for our newsletter!</label>

                          <div className="Footer-emailContainer">
                              <input id="emailInput" type="text" pattern="[^ @]*@[^ @]*" placeholder="Email" onChange={this.handleChange} required />
                              <input type="submit" value="Submit"/>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Footer-bottom">
          <div className="container">
            <div className="row Footer-verticalRow">
              <div className="col col-sm-12 col-md-6">
                &copy;2018 Lost Creatives
                <p>This will be a snipper about lost creatives</p>
              </div>

              <div className="col col-sm-12 col-md-6 App-links">
                <ul>
                  <li>Home</li>
                  <li>Adventure</li>
                  <li>Food</li>
                  <li>Lost Creatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
