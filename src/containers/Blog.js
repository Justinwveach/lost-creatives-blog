import React, { Component } from "react";
import "./Blog.css";
import renderHTML from 'react-render-html';
import config from "../config";
import {createSrcset} from "../util/util.js";
import BlogImageGallery from "./BlogImageGallery";
import AboutBlurb from "../components/AboutBlurb";
import SocialMedia from "../components/SocialMedia";

export default class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      title: "",
      subtitle: "",
      content: "",
      images: [],
      isViewingGallery: false
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
    const goToGallery = () => {
      this.props.history.push(`/blogs/gallery/${this.props.match.params.id}`);
      // this.setState({
      //   isViewingGallery: true
      // })
    }

    return (
      <div className="Blog">

        <header className="Blog-header">
          <div className="Blog-headerImageContainer">
            <img className="Blog-headerImage" src={this.state.mainImage} srcSet={this.state.mainImageSrcset} />
          </div>
          <div className="Blog-headerContent">
            <h1>{this.state.title}</h1>
            <h3>{this.state.subtitle}</h3>
          </div>
        </header>

        <main className="Blog-content">
          <div className="row">
            <div className="col col-sm-12 col-md-8 col-lg-9">
              <div>{renderHTML(this.state.content)}</div>
            </div>
            <div className="col col-sm-12 col-md-4 col-lg-3">
              <div className="row">
                <div className="col col-sm-12">
                  <AboutBlurb  />
                </div>
                <div className="col col-sm-12">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="Blog-imageList Blog-columns-sm Blog-columns-md Blog-columns-lg">
          {
            this.state.isLoading ?
            <p>Loading...</p>
            :
            this.state.images.map(function(imageSet, i) {
              console.log(imageSet)

              return <img className="Blog-imageItem" alt="" src={imageSet.small} srcSet={createSrcset(imageSet)} key={i} onClick={() => goToGallery()}/>;
            })
          }
        </div>

        {
          this.state.isViewingGallery
          &&
            <BlogImageGallery images={this.state.images} />

        }
      </div>
    );
  }
}
