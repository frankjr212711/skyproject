import { useState, useEffect } from 'react';
import { animateScroll as scroll } from "react-scroll";


import { FaEnvelope, FaSearch, FaPhone } from 'react-icons/fa';


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
  DropLink
} from "./Elements";


export const NavbarAlias = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleColor = () => {
    if (window.scrollY >= 30) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      
      <NavContainer scrollNav={scrollNav}>
        <NavTop scrollNav={scrollNav}>
          <NavWrapper>
            <NavTopSpan scrollNav={scrollNav}>
              <FaEnvelope />
              info@skywalkergh.com
            </NavTopSpan>

            <NavTopSpan scrollNav={scrollNav}>
              <FaPhone />
              +233 245 855 385 | +233 245 855 385
            </NavTopSpan>
          
          </NavWrapper>
        </NavTop>
        <NavDown>
        <NavWrapper>
          <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>
            <FaSearch/>
          </NavLogo>
          {/* <NavMenu >
            <NavLi ><NavLink to="/" scrollNav={scrollNav}>Home</NavLink></NavLi>
            <NavLi><NavLink to="/about" scrollNav={scrollNav}>Why Us?</NavLink></NavLi>
              <NavLi>
                <NavLink to="/company" scrollNav={scrollNav}>Company</NavLink>
                <MegaDropDown>
                  <MegaDropWrapper></MegaDropWrapper>

                </MegaDropDown>
              </NavLi>
              <NavLi>
                <NavLink to="/info" scrollNav={scrollNav}>Info</NavLink>
                <DropDown>
                  <DropLink to='/about'>About Us</DropLink>
                  <DropLink to='/contact'>Contact</DropLink>
                  <DropLink to='/careers'>Careers</DropLink>
                </DropDown>
              </NavLi>
            </NavMenu> */}
            
            <MenuBtn>
              <MenuBtnSpan scrollNav={scrollNav}></MenuBtnSpan>
              <MenuBtnSpan scrollNav={scrollNav}></MenuBtnSpan>
              <MenuBtnSpan scrollNav={scrollNav}></MenuBtnSpan>
            </MenuBtn>
        </NavWrapper>
        </NavDown>
        
      </NavContainer>
    </>
  );
};