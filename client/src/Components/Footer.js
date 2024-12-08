import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../App.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col md={4}>
            <img src={logo} className="circle-image"></img>
            <h1>HOMEHERO</h1>
          </Col>
          <Col md={4} className="Menu_footer">
            <h1>Menu</h1>

            <Link to="/" className="Menu_footer">
              Home
            </Link>
            <br></br>

            <Link to="about" className="Menu_footer">
              About Us
            </Link>
            <br></br>
            <Link to="Contactus" className="Menu_footer">
              Contact Us
            </Link>
            <br></br>
          </Col>
          <Col md={4}>
            <h1>Social</h1>
            <h2> Instagram</h2>
            <h2>Mail </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <br></br>
            <h1 className="h3">
              &copy; {new Date().getFullYear()} HOMEHERO, Salalah, Dhofar,
              Oman.All rights reserved
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
