import React, { Component } from "react";
import "./Blog.css";
import renderHTML from 'react-render-html';

export default class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      subtitle: "",
      content: "",
      imageSet: []
    };
  }

  async componentDidMount() {
    fetch(`https://eafalsk4f4.execute-api.us-east-1.amazonaws.com/prod/blogs/${this.props.match.params.id}`,
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
        title: data.title,
        subtitle: data.subtitle,
        content: data.content
      });
      console.log(data);
    });

    fetch(`https://eafalsk4f4.execute-api.us-east-1.amazonaws.com/prod/images/${this.props.match.params.id}`,
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
    });
  }

  render() {
    return (
      <div className="Blog">
        <h1>{this.state.title}</h1>
        <h3>{this.state.subtitle}</h3>
        <div>{renderHTML(this.state.content)}</div>
      </div>
    );
  }
}
