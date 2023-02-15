import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();
  // console.log("LOCATION", location);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/assets/img/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/tvshows" ? "active" : ""
              }`}
              to="/tvshows"
            >
              TV Shows
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/movies" ? "active" : ""
              }`}
              to="/movies"
            >
              Movies
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/recents" ? "active" : ""
              }`}
              to="/recents"
            >
              Recently Added
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/mylist" ? "active" : ""
              }`}
              to="/mylist"
            >
              My List
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;

{
  /* <Nav
        className="navbar navbar-expand-lg navbar-dark"
        // style="background-color: #221f1f"
      >
        <a className="navbar-brand" href="#">
          <img
            src="/assets/img/logo.png"
            // style="width: 100px; height: 55px"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link " href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                My List
              </a>
            </li>
          </ul>

        </div>
      </Nav> */
}
