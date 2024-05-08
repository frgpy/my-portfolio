import React, { useState } from "react";
import styled from "styled-components";
import logoB from "../../assets/logo-black.png";
import logoW from "../../assets/logo-white.png";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";

import { Bio } from "../../data/constants";

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

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            {/* TODO: display my logo: if the theme color is white, then img = logoB else img : logoW */}
            {darkMode ? (
              <>
                <img
                  src={logoW}
                  alt="logo"
                  style={{ width: "40px", height: "40px" }}
                />
                <Span color="white"> Portfolio</Span>
              </>
            ) : (
              <>
                <img
                  src={logoB}
                  alt="logo"
                  style={{ width: "40px", height: "40px" }}
                />
                <Span color="black"> Portfolio</Span>
              </>
            )}
            <SwitchThemeButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <WbSunnyIcon /> : <ModeNightIcon />}
            </SwitchThemeButton>
          </a>
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
          <GitHubButton href={Bio.github}>GitHub profile</GitHubButton>
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
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
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
