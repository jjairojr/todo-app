import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../assets/icons8-lista-100.png";
import { MainHeader, Nav, NavLinks, Logo } from "./stylesHeader";

const Header = () => (
  <>
    <MainHeader>
      <Logo>
        <img style={{ height: "50px" }} src={MainLogo} alt="" />
      </Logo>
      <Nav>
        <Link style={{ textDecoration: "none" }} to="/todo">
          <NavLinks>Todo</NavLinks>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/tech">
          <NavLinks>Tech's</NavLinks>
        </Link>
      </Nav>
    </MainHeader>
  </>
);

export default Header;
