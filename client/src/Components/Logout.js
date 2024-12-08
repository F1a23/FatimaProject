import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Form, Button, FormGroup } from "reactstrap";
import { Link, useEffect } from "react";
import { logout } from "../Features/UserSlice";
import "../App.css";
import { useDispatch } from "react-redux";
const Logout = () => {
  const email = useSelector((state) => state.users.user.email);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!email) {
      navigate("/logout");
    }
  }, [email]);

  const handlelogout = async () => {
    dispatch(logout());
    await new Promise((resolve) => setTimeout(resolve, 100));
    navigate("/login");
  };
  return (
    <div className="img">
      <div className="loginnn-container">
        <Form className="box">
          <br></br>
          <br></br>
          <Row>
            <p className="h22">Are you sure you want to log out?</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Button onClick={handlelogout}>Logout</Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Logout;
