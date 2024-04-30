import React from "react";
import styled from "styled-components";
import logoB from "../../assets/logo-black.png";
import logoW from "../../assets/logo-white.png";

// import { theme } from "../../utills/Theme";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavLink,
  ButtonContainer,
  GitHubButton,
  Span
} from "./NavbarStyledComponent";

const index = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            {/* TODO: display my logo: if the theme color is white, then img = logoB else img : logoW */}
            {/* TODO : create a use Context : 25min50 video  */}

             <img src={logoW} alt="logo" style={{ width: '40px', height: '40px' }} />
            


            <Span> Portfolio</Span> 
          </a>
        </NavLogo>
        <MobileIcon></MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>GitHub profile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default index;
