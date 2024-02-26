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
    if (window.scrollY >= 30) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      
      <NavContainer scrollNav={scrollNav}>
        <NavTop>
          <NavWrapper>
            <NavTopSpan>
              <FaEnvelope />
              info@skywalkergh.com
            </NavTopSpan>

            <NavTopSpan>
              <FaPhone />
              +233 245 855 385 | +233 245 855 385
            </NavTopSpan>
          
          </NavWrapper>
        </NavTop>
        <NavDown>
        <NavWrapper>
          <NavLogo to='/' onClick={toggleHome}>
            <FaSearch/>
          </NavLogo>
          <NavMenu scrollNav={scrollNav}>
            <NavLi ><NavLink to="/">Home</NavLink></NavLi>
            <NavLi><NavLink to="/">Why Us?</NavLink></NavLi>
            <NavLi><NavLink to="/">Company</NavLink></NavLi>
            <NavLi><NavLink to="/">Info</NavLink></NavLi>
          </NavMenu>
        </NavWrapper>
        </NavDown>
        
      </NavContainer>
    </>
  );
};
