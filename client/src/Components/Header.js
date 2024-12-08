import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Features/UserSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = async () => {
    dispatch(logout());
    //ensure that the state update from the logout action has been processed before proceeding to the next step.
    await new Promise((resolve) => setTimeout(resolve, 100));

    navigate("/login"); //redirect to login page route.
  };

  return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <Link></Link>
          </NavItem>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/profile">Profile</Link>
          </NavItem>
          <NavItem>
            <Link to="/post">post</Link>
          </NavItem>
          <NavItem>
            <Link to="/About">Aboutus</Link>
          </NavItem>
          <NavItem>
            <Link to="/Contactus">Contactus</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
