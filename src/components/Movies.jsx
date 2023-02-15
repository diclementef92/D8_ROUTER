import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import MoviePicture from "./MoviePicture";

class Movies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      let res = await fetch(
        "http://www.omdbapi.com/?apikey=1bbfedb5&s=" +
          this.props.search +
          "&type=movie"
      );
      if (res.ok) {
        const body = await res.json();
        this.setState({ movies: body.Search });

        // this.state.movies = body.Search;//non funziona

        // console.log(body.Search);
        // console.log(this.state.movies);
      } else {
        console.log("Error in fetch: response status", res.status);
      }
    } catch (error) {
      console.log("Error in fetch: ", error);
    }
  }

  render() {
    return (
      <>
        <h2 className="text-light mt-4">{this.props.search}</h2>
        <Row>
          {this.state.movies.slice(0, 4).map((movie) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
                <MoviePicture src={movie.Poster}></MoviePicture>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default Movies;
