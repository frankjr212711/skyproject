import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // height: 90px;
  background: ${({ scrollnav }) => scrollnav ? "rgba(255, 255, 255, .99)"
  : "linear-gradient(to top, transparent, 45%, rgba(0,74,125, .6))"};
    
    background: ${({ scrollnav }) => scrollnav ? "rgba(255, 255, 255, .99)"
    : "linear-gradient(to top, transparent, 45%, rgba(117, 79, 50, .99))"};
      

    background: ${({ scrollnav }) => scrollnav ? "rgba(255, 255, 255, .99)"
    : "linear-gradient(to top, transparent, 75%, rgba(0, 0, 0, .5))"};


  box-shadow: ${({ scrollnav }) =>
    scrollnav ? "0 1px 2px 0 rgba(0, 0, 0, 0.3)" : ""};
  font-family: "Jost";
  z-index: 9999;
  transition: 0.3s ease;
`;

export const NavTop = styled.div`
  width: 100%;
  border-bottom: 1px solid
    ${({ scrollnav }) =>
      scrollnav ? "rgba(0,74,125, .1)" : "rgba(255, 255, 255, .01)"};
`;
export const NavTopSpan = styled.span`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: ${({ scrollnav }) => (scrollnav ? "#111" : "#fff")};
  font-size: 14px;
`;

export const NavDown = styled.div`
  width: 100%;
  // height: 70px;
  // background: whitesmoke;

  display: flex;
  align-items: center;
`;

export const NavWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease;


  @media screen and (max-width: 940px ) {
    width: 95%;
  }
  @media screen and (max-width: 840px ) {
    width: 95%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ scrollnav }) => (scrollnav ? "#111" : "#fff")};
`;

export const NavMenu = styled.ul`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MegaDropDown = styled.div`
  position: fixed;
  top: 85px;
  left: 0;
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255);
  transition: 0.3s ease;
  opacity: 0;
  visibility: hidden;
  display: flex; 
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .3);
  border-top: 1px solid #fefefe;
`;

export const DropDown = styled.div`
  position: absolute; 
  top: 64px;
  left: 50%;
  transform: translate(-50%, -0%);
  width: 200px;
  background: whitesmoke;
  background: rgba(255, 255, 255);
  transition: .3s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .3);
  opacity: 0;
  visibility: hidden;

  @media screen and (max-width: 800px) {
    left; 100%;
  }
`;

export const NavLi = styled.li`
  display: inline-block;
  position: relative;

  &:hover ${MegaDropDown}{
      opacity: .99;
      visibility: visible
    }

    &:hover ${DropDown}{
      opacity: .99;
      visibility: visible
    }
  }
`;

export const NavLink = styled(Link)`
  font-size: 17px;
  font-weight: 400;
  color: ${({ scrollnav }) => (scrollnav ? "#111" : "#fff")};
  position: relative;
display: inline-block;
  padding: 20px 1rem;



  // border: 1px solid red;


  &:before {
    content: "";
    position: absolute;
    top: 94%;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 5px;
    background: ${({ scrollnav }) => scrollnav ? "rgba(0,74,125, .6)" : "#fff"};
    background: ${({ scrollnav }) => scrollnav ? "rgba(76,89,39)" : "rgba(76,89,39)"};
    transition: 0.2s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;

export const MenuBtn = styled.div`
  width: 42px;
  height: 34px;
  position: relative;
  cursor: pointer;
  display: none;
  &:hover :nth-child(1) {
    transform: translate(-45%, 100%) rotate(140deg);
  }
  &:hover :nth-child(3) {
    transform: translate(-50%, -180%) rotate(-140deg);
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MenuBtnSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 4px;
  background: ${({ scrollnav }) => (scrollnav ? "#424242" : "#fff")};
  transition: 0.3s ease;

  &:nth-child(1) {
    top: 25%;
  }
  &:nth-child(3) {
    top: 75%;
  }
`;

export const MegaDropWrapper = styled.div`
  width: 80%;
  height: 80%;
  // border: 1px solid #ddd;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media screen and (max-width: 940px ) {
    width: 98%;
  }

  @media screen and (max-width: 840px ) {
    width: 95%;
  }
`;


export const DropLink = styled(Link)`
  display: block;
  padding: 1rem 0 1rem 0.5rem;
  font-size: 17px;
  color: #424242;

  &:not(:first-child) {
  border-top: 1px solid #eee;
  }

  &:hover {
    background: rgba(0, 74, 125, 0.6);
    background: rgba(76,89,39);
    color: whitesmoke;
  }
`;
export const MegaLink = styled(Link)`
  display: block;
  font-size: 24px;
  color: #424242;
`;



export const BannerGJR = styled.div`
  height: 100%;
  // border: 1px solid red;

`
export const BannerGJRWrap = styled.div`
  width: 100%;
  height: 100%;
  transform: scale(.98);
  display: flex; 
  flex-direction: column;
  align-items: space-between;
  cursor: pointer;
  transition: .3s ease;

  &:hover {
    transform: scale(1);
  }
`
export const LogoGJR = styled(Link)`
  font-size: 55px;

`
export const TitleGJR = styled.h1`
  line-height: 1.2;
  flex: 1;
`

export const BtnGJR = styled(Link)`
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  padding: 1rem 2.5rem;
  background:  rgba(76,89,39);
  color: #fff;
  outline: none; 
  text-align: center;
  border: 1px solid  rgba(76,89,39);
  transform: scale(1);
  transition: .2s ease;

  &:hover {
    transform: scale(1.05);
  }
`
export const JobListingGJR = styled.div`
height: 100%;
grid-column: span 2;
`
export const JobListingGJRWrap = styled.div`
width: 100%;
height: 100%;

display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: center;
align-items: center;
gap: 30px;
`

export const JobItemLink = styled(Link)`
  display: block;
  padding: .45rem 0;
  position: relative;
  transition: .2s ease;
  border-bottom: 1px solid #eee;
  &:hover {
    margin-left: 5px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 3px;
    background: rgba(76,89,39);
    transition: .3s ease;
  }
  &:hover:before {
    width: 100%;
  }
`
export const ContactDetails = styled.div``
export const ContactDetailsLink = styled(Link)``

export const JobListingItem = styled.div`

`
