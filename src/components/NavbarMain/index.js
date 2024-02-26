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
  
} from "./Elements";


export const NavbarMain = () => {
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
          <NavMenu >
            <NavLi ><NavLink to="/" scrollNav={scrollNav}>Home</NavLink></NavLi>
            <NavLi><NavLink to="/" scrollNav={scrollNav}>Why Us?</NavLink></NavLi>
            <NavLi><NavLink to="/" scrollNav={scrollNav}>Company</NavLink></NavLi>
            <NavLi><NavLink to="/" scrollNav={scrollNav}>Info</NavLink></NavLi>
          </NavMenu>
        </NavWrapper>
        </NavDown>
        
      </NavContainer>
    </>
  );
};
