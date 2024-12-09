import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Form,
  Input,
  FormGroup,
  Label,
  Container,
  Button,
  Col,
  Row,
} from "reactstrap";
import User from "./User";
import user from "../images/user.png";
const Home = () => {
  const email = useSelector((state) => state.users.user.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email]);

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <User userData={user} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
