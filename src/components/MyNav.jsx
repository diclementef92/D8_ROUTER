import { Component } from "react";
import { Nav } from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <Nav
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
          <i className="bi bi-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="bi bi-bell icons"></i>
          <i className="bi bi-user icons"></i>
        </div>
      </Nav>
    );
  }
}

export default MyNav;

// <Nav
//         activeKey="Tv-Shows"
//         onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
//         className="bg-dark p-2"
//       >
//         <a className="navbar-brand" href="#">
//           <img src="/assets/img/logo.png" />
//         </a>
//         <Nav.Item>
//           <Nav.Link eventKey="Home">Home</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="Tv-Shows">Tv Shows</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="Movies">Movies</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="Recently">Recently Added</Nav.Link>
//         </Nav.Item>
//       </Nav>
