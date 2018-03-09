import React, { Component } from "react";
import "./BlogImageGallery.css";
import renderHTML from 'react-render-html';
import config from "../config";
import MyImageGallery from 'react-image-gallery';

export default class BlogImageGallery extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      images: null
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
          images: this.createImageSets(data.images),
          isLoading: false
        });
        console.log(this.state.images);
      });
    } catch(e) {

    } finally {
    }
  }

  createImageSets(images) {
    //todo: create thumbnail for images
    console.log(images);
    var imageSets = [];
    for (var image of images) {
      console.log(image);
      var imageSet = {
        original: image.large,
        thumbnail: image.small,
        imageSet: [
          {
            srcSet: image.small,
            media : "(max-width: 800px)",
          },
          {
            srcSet: image.medium,
            media : '(min-width: 800px)',
          },
          {
            srcSet: image.large,
            media : '(min-width: 1200px)',
          }
        ]
      }

      imageSets.push(imageSet);
    }

    return imageSets;
  }

  render() {
    return (
      <div className="BlogImageGallery">
        <div className="BlogImageGallery-background"></div>
        {this.state.isLoading ?
        <p>Loading..</p>
        :
        <MyImageGallery items={this.state.images} additionalClass="BlogImageGallery-gallery" showPlayButton={false} />
      }
      </div>
    );
  }
}
