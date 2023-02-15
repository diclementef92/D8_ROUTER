import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Movies from "./components/Movies";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Container>
        <Movies search="harry potter" />
        <Movies search="lord of the rings" />
        <Movies search="avengers" />
      </Container>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
