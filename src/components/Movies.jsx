import { Component, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MoviePicture from "./MoviePicture";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);

  const retriveMovies = async () => {
    try {
      let res = await fetch(
        "http://www.omdbapi.com/?apikey=1bbfedb5&s=" +
          props.search +
          "&type=movie"
      );
      if (res.ok) {
        const body = await res.json();
        setMovies(body.Search);
      } else {
        console.log("Error in fetch1: response status ", res.status);
      }
    } catch (error) {
      console.log("Error in fetch2: ", error);
    }
  };

  useEffect(() => {
    retriveMovies();
  }, [props.search]);

  return (
    <Container>
      <h2 className="text-light mt-4">{props.search}</h2>
      <Row>
        {movies.slice(0, 4).map((movie) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
              <MoviePicture movie={movie}></MoviePicture>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Movies;
