import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h2 className="mt-4 text-light">404 - Not Found</h2>
      <Button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
        👈Torna alla Home
      </Button>
    </Container>
  );
};

export default NotFound;
