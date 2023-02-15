import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const retriveMovieData = async () => {
    try {
      let res = await fetch(
        `http://www.omdbapi.com/?apikey=1bbfedb5&i=${params.movieId}`
      );
      if (res.ok) {
        const body = await res.json();
        setMovie(body);
        console.log(movie);
      } else {
        console.log("Error in fetch1: response status", res.status);
      }
    } catch (error) {
      console.log("Error in fetch2: ", error);
    }
  };

  useEffect(() => {
    retriveMovieData();
  }, [params.movieId]);

  return (
    <Container className="text-light">
      <h1 className="my-4">{movie.Title}</h1>
      <Row>
        <Col xs={6}>
          <img className="mb-4" src={movie.Poster}></img>
        </Col>
        <Col xs={6}>
          <Table className="p-4" variant="dark">
            <tbody>
              <tr>
                <td>Genre:</td>
                <td>{movie.Genre}</td>
              </tr>
              <tr>
                <td>Year:</td>
                <td>{movie.Year}</td>
              </tr>

              <tr>
                <td>Language:</td>
                <td>{movie.Language}</td>
              </tr>
              <tr>
                <td>Plot:</td>
                <td>{movie.Plot}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Button
          className="col-2 btn btn-primary me-4"
          onClick={() => navigate("/")}
        >
          torna alla Home
        </Button>
        <Button className="col-2 btn btn-light" onClick={() => navigate(-1)}>
          torna indietro
        </Button>
      </Row>
      <Row>
        <Comments imdbId={movie.imdbID}></Comments>
      </Row>
    </Container>
  );
};

export default MovieDetails;
