import styled from "styled-components";
// import "../assets";

export const MainHeader = styled.div`
  background: linear-gradient(to right, #8c7ae6 90%, #9c88ff);
`;

export const Nav = styled.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`;

export const NavLinks = styled.div`
  text-decoration: none;
  list-style: none;
  text-align: center;
  width: 100px;
  margin: 0 20px;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 25px;
  font-weight: bold;

  &:hover {
    background-color: #fff;
    color: #9c88ff;
    transition: 200ms ease-in-out;
  }
`;

export const Logo = styled.div`
  position: absolute;
  left: 10px;
  padding: 2px;
`;
