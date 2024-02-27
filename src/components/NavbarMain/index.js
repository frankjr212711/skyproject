import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLocationDot, FaTypo3 } from 'react-icons/fa6';
import { GiVacuumCleaner } from "react-icons/gi";
import { FcFilingCabinet } from "react-icons/fc";
import imgGJR from "../../images/gjr-img-01.jpg";
import ImgBannerGJR from "../../images/gjr-img-02.jpg";
import LogoSky from "../../images/sky-img-11.png";
import ImgBannerSky from "../../images/sky-img-abt-01.jpg";
import LogoLib from "../../images/lib-img-pam-01.jpg";
import ImgBannerLib from "../../images/lib-img-pam-01.jpg";
import {
  FaEnvelope,
  FaSearch,
  FaPhone,
 
  FaSnowflake
} from "react-icons/fa";


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
  BannerGJR,
  BannerGJRWrap,

  TitleGJR,
  BtnGJR,
  TextGJR, 
  JobListingGJR,
  JobListingGJRWrap,
  JobItemLink, 
  LogoImgGJR,
  LogoGJR,
  JobListingItem,
  DropImageContainer,
  DropImageWrap,
  DropImageGJR
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
                        <LogoGJR >
                          {/* <FaSnowflake /> */}
                          <LogoImgGJR src={LogoSky}></LogoImgGJR>
                        </LogoGJR>
                        
                        <TitleGJR>
                          <h3>Skywalker Company Limited</h3>
                        </TitleGJR>
                        <TextGJR>
                          Water never tasted soo good...
                        </TextGJR>
                      <BtnGJR to='/skywalker'>VISIT PAGE</BtnGJR>
                      </BannerGJRWrap>
                    </BannerGJR>
                    <JobListingGJR>
                      <JobListingGJRWrap>
                        <JobListingItem>
                        <JobItemLink>Sachet water production </JobItemLink>
                        <JobItemLink>Bottle waters </JobItemLink>
                        <JobItemLink>Dispenser bottle water</JobItemLink>
                        <JobItemLink>Water dispensers</JobItemLink>
                        </JobListingItem>
                        {/* <JobListingItem>
                        <JobItemLink>General Merchant</JobItemLink>
                        <JobItemLink>Janitorial Services</JobItemLink>
                        <JobItemLink>Wood Works</JobItemLink>
                        <JobItemLink>Interior Designs</JobItemLink>
                        </JobListingItem> */}
                       
                      </JobListingGJRWrap>
                    </JobListingGJR>

                    <DropImageContainer>
                      <DropImageWrap>
                        {/* <img src="../images/gjr-01.jpeg" alt="" /> */}
                        <DropImageGJR src={LogoSky}></DropImageGJR>
                      </DropImageWrap>
                    </DropImageContainer>

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
                        <LogoImgGJR src={imgGJR}></LogoImgGJR>
                      </LogoGJR>
                      <TitleGJR>
                          <h3>GJR Company Limited</h3>
                        </TitleGJR>
                        <TitleGJR>
                          <h6>Learn more about our works & projects.</h6>
                        </TitleGJR>
                      <BtnGJR to='/gjr'>VISIT PAGE</BtnGJR>
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

                    <DropImageContainer>
                      <DropImageWrap>
                        <DropImageGJR src={ImgBannerGJR}></DropImageGJR>
                      </DropImageWrap>
                    </DropImageContainer>
                    
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
                        <LogoImgGJR src={LogoLib}></LogoImgGJR>
                      </LogoGJR>
                      <TitleGJR>
                          <h3>Librex Holdings</h3>
                        </TitleGJR>
                        <TitleGJR>
                          <h6>Learn more about our works & projects.</h6>
                        </TitleGJR>
                      <BtnGJR to="/librex">VISIT PAGE</BtnGJR>
                      </BannerGJRWrap>
                    </BannerGJR>
                    <JobListingGJR>
                      <JobListingGJRWrap>
                      <JobListingItem>
                        <JobItemLink>Crystello</JobItemLink>
                        <JobItemLink>Pamello</JobItemLink>
                        <JobItemLink>Waterello</JobItemLink>
                        <JobItemLink>Ritello</JobItemLink>
                        </JobListingItem>
                        {/* <JobListingItem>
                        <JobItemLink>General Merchant</JobItemLink>
                        <JobItemLink>Janitorial Services</JobItemLink>
                        <JobItemLink>Wood Works</JobItemLink>
                        <JobItemLink>Interior Designs</JobItemLink>
                        </JobListingItem> */}
                      </JobListingGJRWrap>
                    </JobListingGJR>

                    <DropImageContainer>
                      <DropImageWrap>
                        <DropImageGJR src={ImgBannerLib}></DropImageGJR>
                      </DropImageWrap>
                    </DropImageContainer>
                    
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
