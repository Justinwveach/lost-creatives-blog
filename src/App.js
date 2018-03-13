import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import Footer from "./containers/Footer";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <header></header>
        <nav className="App-nav">

        </nav>

        <div className="container">
          <Routes />
        </div>

        <Footer/>

      </div>
    );
  }
}

export default App;
