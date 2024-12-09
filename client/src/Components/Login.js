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
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Features/UserSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Retrieve the current value of the state from the store, name of state is users with a property user
  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);

  const handleLogin = () => {
    const userData = {
      email: email,
      password: password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      navigate("/login");
    } else if (isSuccess) {
      if (user && user.userType === "user") {
        navigate("/");
      } else {
        navigate("/manage");
      }
    }
  }, [user, isError, isSuccess, navigate]);

  return (
    <div className="img">
      <div className="loginnn-container">
        <Container>
          <Form className="box">
            <Row>
              <Col md={4}>
                <img src={logo} className="styledd-image"></img>
                <p className="ph">
                  Log in to our website to get excellent home services.
                </p>
              </Col>

              <Col md={8}>
                <h1 className="h22">Login</h1>
                <br></br>
                <FormGroup className="form-groupsn">
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter email..."
                    type="email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form-groupsn">
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Enter password..."
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </FormGroup>

                <Button onClick={() => handleLogin()} className="loginbutton">
                  Login
                </Button>

                <p className="ph">
                  You don't have an account?
                  <Link to="/register">Sign Up now</Link>
                </p>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
