import { Component } from "react";
import { Image } from "react-bootstrap";

class MoviePicture extends Component {
  render() {
    return <Image className="poster my-4" src={this.props.src}></Image>;
  }
}

export default MoviePicture;
