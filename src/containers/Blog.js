import React, { Component } from "react";
import "./Blog.css";
import renderHTML from 'react-render-html';
import config from "../config";
import {createSrcset} from "../util/util.js";

export default class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      title: "",
      subtitle: "",
      content: "",
      images: []
    };
  }

 async componentDidMount() {
    try {
      fetch(`${config.apiURL}/blogs/${this.props.match.params.id}`,
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
          title: data.title ? data.title : "Blog Not Found",
          subtitle: data.subtitle ? data.subtitle : "",
          content: data.content ? data.content : "",
          mainImage: data.mainImage.small,
          mainImageSrcset: createSrcset(data.mainImage),
          images: data.images,
          isLoading: false
        });
      });
    } catch(e) {

    } finally {
    }
  }

  getImageItems() {
    console.log("Getting images" + this.state.images);
    return this.state.images.map(function(imageSet, i) {
      return
      (
        <img key={i} src={imageSet.small} srcSet={createSrcset(imageSet)} className="Blog-imageItem"></img>
      );
    });
  }

  render() {

    return (
      <div className="Blog">
        <header className="Blog-header">
          <img className="Blog-headerImage" src={this.state.mainImage} srcSet={this.state.mainImageSrcset} />
          <div className="Blog-headerContent">
            <h1>{this.state.title}</h1>
            <h3>{this.state.subtitle}</h3>
          </div>
        </header>

        <main className="Blog-content">
          <div>{renderHTML(this.state.content)}</div>
        </main>

        <div className="Blog-imageList Blog-columns-sm Blog-columns-md Blog-columns-lg">
          { this.state.isLoading ?
            <p>Loading...</p>
            :
            this.state.images.map(function(imageSet, i) {
              console.log(imageSet)

              return <img className="Blog-imageItem" alt="" src={imageSet.small} srcSet={createSrcset(imageSet)} key={i}/>;
            })
          }
        </div>

      </div>
    );
  }
}
