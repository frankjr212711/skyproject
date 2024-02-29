import styled from "styled-components";
import { Link } from "react-router-dom";

export const GJRNavContainer = styled.div`
  font-family: "Montserrat";
  position: fixed; 
  left: 0;
  width: 100%;
  z-index: 9999;
  transition: .3s ease;
  top: ${({ scrollnav }) => scrollnav ? "0px"
  : "-200px"};

`;
export const NavContent = styled.div`
  width: 100%;
  margin: auto;
`;
export const GJRBanners = styled.div`
  width: 100%;
`;
export const GJRTopBanner = styled.div`
  width: 100%;
  height: 50px;

  background: #f7f7f7;
`;
export const GJRTopBannerWrap = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const GJRLogoBox = styled.div`
  font-size: 35px;
`;
export const GJRLogoLink = styled(Link)``;
export const GJRContact = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
export const GJRContactP = styled.p`
  display: flex;
`;
export const ContactLink = styled(Link)`
  color: #111;
`;
export const ContactLinkSpan = styled.span`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
export const GJRMidBanner = styled.div`
  height: 70px;
  background: #000044;
`;
export const MidBannerContent = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;
export const MidBannerText = styled.div``;
export const GJRNavLinks = styled(Link)`
  position: relative;
  &:before {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 3px;
    background: rgb(255, 255, 255);
    transition: all 0.3s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
`;
export const UL = styled.ul``;
export const Li = styled.li`
  display: inline-block;
  margin-left: 1.5rem;
`;
export const MidContactLink = styled(Link)`
  font-size: 20px;
  color: rgb(255, 255, 255);
`;
export const MenuBtn = styled.div`
  width: 32px;
  height: 32px;
  /* border: 1px solid red; */
  position: relative;
  cursor: pointer;
`;
export const MenuBtnSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 4px;
  width: 25px;
  background: #fff;
  transition: 0.3s ease;
  &:nth-child(1) {
    top: 25%;
  }
  &:nth-child(3) {
    top: 75%;
  }
`;
export const GJRThirdBanner = styled.div`
  width: 100%;
  height: 60px;
  background: #111;
  border-top: 8px solid #ac8420;
  color: rgba(255, 255, 255);
`;
export const ThirdBannerContent = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
`;
export const ThirdUL = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ThirdSpan = styled.span`
  display: flex;
  column-gap: 10px;
  cursor: pointer;
  &:hover {

  }
`;
export const MegaDrop = styled.div`
position: fixed;
top:200px;
left: 0;
width: 100%;
height: 417px;
background: rgb(255, 255, 255);
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .3);
opacity: 0;
visibility: hidden;
transition: .3s ease;
`
export const MegaDropContent = styled.div`
  width: 80%;
  height: 85%;
  border: 1px solid #ddd;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const ThirdLi = styled.li`
  display: flex;
  position: relative;
  
  &:hover ${MegaDrop} {
    top:180px;
    opacity: 1;
    visibility: visible;
  }
`;
export const Card = styled.div``;
export const CardImgBox = styled.div``;
export const CardImg = styled.img``;
export const CardTitle = styled.h2``;
export const CardSpecs = styled.div``;
