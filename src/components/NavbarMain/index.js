import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import { FaEnvelope, FaSearch, FaPhone } from "react-icons/fa";

import {
  NavContainer,
  NavTop,
  NavDown,
  NavWrapper,
  NavTopSpan,
  NavLogo,
  NavMenu,
  NavLi,
  NavLink,
  MenuBtn,
  MenuBtnSpan,
  MegaDropDown,
  MegaDropWrapper,
  DropDown,
  DropLink,
  MegaLink,
  MegaItem,
} from "./Elements";

export const NavbarMain = () => {
  const [scrollnav, setscrollnav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscrollnav(true);
    } else {
      setscrollnav(false);
    }
  };

  const toggleColor = () => {
    if (window.scrollY >= 30) {
      setscrollnav('true');
    } else {
      setscrollnav('false');
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <NavContainer scrollnav={scrollnav}>
        <NavTop scrollnav={scrollnav}>
          <NavWrapper>
            <NavTopSpan scrollnav={scrollnav}>
              <FaEnvelope />
              info@skywalkergh.com
            </NavTopSpan>

            <NavTopSpan scrollnav={scrollnav}>
              <FaPhone />
              +233 245 855 385 | +233 245 855 385
            </NavTopSpan>
          </NavWrapper>
        </NavTop>
        <NavDown>
          <NavWrapper>
            <NavLogo to="/" onClick={toggleHome} scrollnav={scrollnav}>
              <FaSearch />
            </NavLogo>
            <NavMenu>
              <NavLi>
                <NavLink to="/" scrollnav={scrollnav}>
                  Home
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink to="/about" scrollnav={scrollnav}>
                  Why Us?
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink to="/company" scrollnav={scrollnav}>
                  Company
                </NavLink>
                <MegaDropDown>
                  <MegaDropWrapper>
                    <MegaItem>
                      <MegaLink to="/skywalker">Skywalker Waters</MegaLink>
                    </MegaItem>
                    <MegaItem>
                      <MegaLink to="/gjr">GJR Kitchens</MegaLink>
                    </MegaItem>
                    <MegaItem>
                      <MegaLink to="/librex">Librex Holdings</MegaLink>
                    </MegaItem>
                  </MegaDropWrapper>
                </MegaDropDown>
              </NavLi>
              <NavLi>
                <NavLink to="/info" scrollnav={scrollnav}>
                  Info
                </NavLink>
                <DropDown>
                  <DropLink to="/about">About Us</DropLink>
                  <DropLink to="/contact">Contact</DropLink>
                  <DropLink to="/careers">Careers</DropLink>
                </DropDown>
              </NavLi>
            </NavMenu>

            <MenuBtn>
              <MenuBtnSpan scrollnav={scrollnav}></MenuBtnSpan>
              <MenuBtnSpan scrollnav={scrollnav}></MenuBtnSpan>
              <MenuBtnSpan scrollnav={scrollnav}></MenuBtnSpan>
            </MenuBtn>
          </NavWrapper>
        </NavDown>
      </NavContainer>
    </>
  );
};
