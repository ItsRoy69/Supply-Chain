import React from "react";
import { Button, Row } from "antd";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useUserContext } from "../../context/userContext";
import Logo from "../Logo";

const Navbar = () => {

  const {user} = useUserContext();

  return (
    <Row className="navbar-navbarContainer" align="middle" justify="space-between">
      <Logo/>
      <Button className="navbar-getStartedButton">
      <Link to={user ? '/dashboard' : '/connect'}>
        {user ? 'Dashboard' : 'Get Started'}
      </Link>
      </Button>
    </Row>
  );
};

export default Navbar;
