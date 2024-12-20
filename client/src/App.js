import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap"; //import the Reactstrap Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import { useSelector } from "react-redux";
import Posts from "./Components/Posts";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Completeregister from "./Components/Completeregister";
import Logout from "./Components/Logout";
import Manage from "./Components/Manage";
import ManageProfile from "./Components/ManageProfile";
import AddServices from "./Components/AddServices";
import ServerMap from "./Components/ServerMap";

const App = () => {
  const email = useSelector((state) => state.users.user.email);

  return (
    <Container fluid>
      <Router>
        <Row>
          {email ? (
            <>
              <Header />
            </>
          ) : null}
        </Row>
        <Row className="main">
          <Routes>
            <Route path="/ServerMap" element={<ServerMap />}></Route>

            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>

            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/post" element={<Posts />}></Route>
            <Route path="/About" element={<Aboutus />}></Route>
            <Route path="/Contactus" element={<Contactus />}></Route>
            <Route path="/manage" element={<Manage />}></Route>
            <Route
              path="/manageProfile/:id"
              element={<ManageProfile />}
            ></Route>
            <Route path="/AddServices" element={<AddServices />}></Route>

            <Route
              path="/Completeregister"
              element={<Completeregister />}
            ></Route>
          </Routes>
        </Row>
      </Router>
    </Container>
  );
};

export default App;
