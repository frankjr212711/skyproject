import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import { FaEnvelope, FaSearch, FaPhone, FaLocationArrow, FaSnowflake, FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

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

  BannerGJR,
  BannerGJRWrap,
  LogoGJR, 
  TitleGJR,
  BtnGJR,
  JobListingGJR,
  JobListingGJRWrap,
  JobItemLink, 
  ContactDetails,
  ContactDetailsLink,
  JobListingItem
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
                  Skywalker Waters
                </NavLink>
                <MegaDropDown>
                  <MegaDropWrapper>
                    <BannerGJR>
                      <BannerGJRWrap>
                        <LogoGJR>
                          <FaSnowflake />
                      </LogoGJR>
                      <TitleGJR><h3>Learn more about our works & projects.</h3></TitleGJR>
                      <BtnGJR to='/skywalker'>VISIT PAGE</BtnGJR>
                      </BannerGJRWrap>
                    </BannerGJR>
                    <JobListingGJR>
                      <JobListingGJRWrap>
                        <JobListingItem>
                        <JobItemLink>Road Construction</JobItemLink>
                        <JobItemLink>Building Construction</JobItemLink>
                        <JobItemLink>Civil Works</JobItemLink>
                        <JobItemLink>Plumbing Works</JobItemLink>
                        </JobListingItem>
                        <JobListingItem>
                        <JobItemLink>General Merchant</JobItemLink>
                        <JobItemLink>Janitorial Services</JobItemLink>
                        <JobItemLink>Wood Works</JobItemLink>
                        <JobItemLink>Interior Designs</JobItemLink>
                        </JobListingItem>
                       
                      </JobListingGJRWrap>
                    </JobListingGJR>

                    <ContactDetails>
                      <ContactDetailsLink >
                        <FaLocationArrow></FaLocationArrow>
                      </ContactDetailsLink>
                    </ContactDetails>
                    
                  </MegaDropWrapper>
                </MegaDropDown>
              </NavLi>

              <NavLi>
                <NavLink to="/company" scrollnav={scrollnav}>
                  GJR Works
                </NavLink>
                <MegaDropDown>
                  <MegaDropWrapper>
                    <BannerGJR>
                      <BannerGJRWrap>
                        <LogoGJR>
                          <FaSnowflake />
                      </LogoGJR>
                      <TitleGJR><h3>Learn more about our works & projects.</h3></TitleGJR>
                      <BtnGJR to='/gjr'>VISIT PAGE</BtnGJR>
                      </BannerGJRWrap>
                    </BannerGJR>
                    <JobListingGJR>
                      <JobListingGJRWrap>
                        <JobItemLink>Road Construction</JobItemLink>
                        <JobItemLink>Building Construction</JobItemLink>
                        <JobItemLink>Civil Works</JobItemLink>
                        <JobItemLink>Plumbing Works</JobItemLink>
                        <JobItemLink>General Merchant</JobItemLink>
                        <JobItemLink>Janitorial Services</JobItemLink>
                        <JobItemLink>Wood Works</JobItemLink>
                        <JobItemLink>Interior Designs</JobItemLink>
                      </JobListingGJRWrap>
                    </JobListingGJR>

                    <ContactDetails>
                      <ContactDetailsLink >
                        <FaLocationArrow></FaLocationArrow>
                      </ContactDetailsLink>
                    </ContactDetails>
                    
                  </MegaDropWrapper>
                </MegaDropDown>
              </NavLi>

              <NavLi>
                <NavLink to="/company" scrollnav={scrollnav}>
                  Librex Holdings
                </NavLink>
                <MegaDropDown>
                  <MegaDropWrapper>
                    <BannerGJR>
                      <BannerGJRWrap>
                        <LogoGJR>
                          <FaSnowflake />
                      </LogoGJR>
                      <TitleGJR><h3>Learn more about our works & projects.</h3></TitleGJR>
                      <BtnGJR to="/librex">VISIT PAGE</BtnGJR>
                      </BannerGJRWrap>
                    </BannerGJR>
                    <JobListingGJR>
                      <JobListingGJRWrap>
                        <JobItemLink>Road Construction</JobItemLink>
                        <JobItemLink>Building Construction</JobItemLink>
                        <JobItemLink>Civil Works</JobItemLink>
                        <JobItemLink>Plumbing Works</JobItemLink>
                        <JobItemLink>General Merchant</JobItemLink>
                        <JobItemLink>Janitorial Services</JobItemLink>
                        <JobItemLink>Wood Works</JobItemLink>
                        <JobItemLink>Interior Designs</JobItemLink>
                      </JobListingGJRWrap>
                    </JobListingGJR>

                    <ContactDetails>
                      <ContactDetailsLink >
                        <FaLocationArrow></FaLocationArrow>
                      </ContactDetailsLink>
                    </ContactDetails>
                    
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
