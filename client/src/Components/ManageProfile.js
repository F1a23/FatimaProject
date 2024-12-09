import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import * as ENV from "../config";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import User from "./User";
import { updateUserProfile } from "../Features/UserSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaValidation } from "../Validations/UserValidations";
import { logout } from "../Features/UserSlice";
import Location from "./Location";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ManageProfile = () => {
  // const user = useSelector((state) => state.users.user); //from Redux Store

  const [user, setUser] = useState({});

  const id = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Create state variables

  const [userName, setUserName] = useState("");

  const [pwd, setPwd] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [profilePic, setProfilePic] = useState("");

  const [userType, setuserType] = useState();
  const handleUpdate = (event) => {
    // Prevent the default form submission behavior

    event.preventDefault();

    // Prepare the user data object with the current user's email and updated details

    const userData = {
      email: user.email, // Retrieve email from the Redux store

      name: userName, // Get the updated name from the state variable

      password: pwd, // Get the updated password from the state variable

      profilePic: profilePic,

      userType: userType,
    };

    console.log(userData);

    // Dispatch the updateUserProfile action to update the user profile in the Redux store

    dispatch(updateUserProfile(userData));

    alert("Profile Updated.");

    // Navigate back to the profile page after the update is completed

    navigate("/manage");
  };
  const getUser = async () => {
    try {
      const response = await axios.get(`${ENV.SERVER_URL}/getUser/${id}`);

      const user = response.data.user;

      //console.log(user);

      setUserName(user.name);

      setPwd(user.password);

      setProfilePic(user.profilePic);

      setConfirmPassword(user.password);

      setuserType(user.userType);

      setUser(user);

      console.log(user);
    } catch (error) {
      console.log(user);
    }
  };
  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id]);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <User userData={user} />
        </Col>
      </Row>
      <FormGroup>
        <Label for="usertype">User Type</Label>

        <select
          id="usertype"
          name="usertype"
          value={userType}
          onChange={(e) => setuserType(e.target.value)}
        >
          <option value="user">User</option>

          <option value="admin">Admin</option>
        </select>
      </FormGroup>
    </Container>
  );
};
export default ManageProfile;
