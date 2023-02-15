import { Container } from "react-bootstrap";
import Movies from "./Movies";

const Home = () => {
  return (
    <Container>
      {/* <Movies search="harry potter" /> */}
      <Movies search="Avatar" />
      <Movies search="Avengers" />
    </Container>
  );
};

export default Home;
