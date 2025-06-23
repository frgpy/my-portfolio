import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";

import { Bio } from "../../data/constants";
import logoB from "../../assets/logoB.png";
import logoW from "../../assets/logoW.png";

// import { theme } from "../../utills/Theme";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  MobileMenu,
  MobileLink,
  NavItems,
  NavLink,
  ButtonContainer,
  GitHubButton,
  Span,
  SwitchThemeButton,
} from "./NavbarStyledComponent";

console.log('Bio.github', Bio.github)

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img
            src={darkMode ? logoW : logoB}
            alt="logo"
            style={{ width: "40px", height: "40px", marginRight: "8px" }}
          />
          <Span color={darkMode ? "white" : "black"}> Portfolio</Span>
          <SwitchThemeButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <WbSunnyIcon /> : <ModeNightIcon />}
          </SwitchThemeButton>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target='display'>GitHub profile</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <GitHubButton
              href={Bio.github}
             
              
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
