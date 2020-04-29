import React from "react";
import styled from "styled-components";
import logo from "assets/giphy_logo.png";

const NavWrapper = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  padding-left: 20px;
  z-index: 999;
  @media (max-width: 420px) {
    padding-left: 5px;
  }
`;

const StyledImg = styled.img`
  margin-top: 5px;
  height: 40px;
`;

const Navigation = () => (
  <NavWrapper>
    <a href="www.google.pl">
      <StyledImg src={logo} alt="" />
    </a>
  </NavWrapper>
);

export default Navigation;
