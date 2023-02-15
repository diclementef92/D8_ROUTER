import { Component } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const MoviePicture = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Image
        className="poster mt-4 mb-2"
        src={props.movie.Poster}
        onClick={() => navigate(`/movie-details/${props.movie.imdbID}`)}
      ></Image>
    </>
  );
};

export default MoviePicture;
