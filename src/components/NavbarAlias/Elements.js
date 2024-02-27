import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: ${({ scrollNav }) =>
  scrollNav ? "rgba(255, 255, 255)" : "rgba(0,74,125)"};
    
  background: ${({ scrollNav }) =>
  scrollNav ? "rgba(255, 255, 255)" : "rgba(76,89,39)"};


  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 1px 2px 0 rgba(0, 0, 0, 0.3)" : ""};
  font-family: "Jost";
  z-index: 9999;
  transition: 0.3s ease;
`;

export const NavTop = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid
    ${({ scrollNav }) =>
      scrollNav ? "rgba(0,74,125, .1)" : "rgba(255, 255, 255, .1)"};
`;
export const NavTopSpan = styled.span`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: ${({ scrollNav }) => (scrollNav ? "#111" : "#fff")};
  font-size: 14px;
`;

export const NavDown = styled.div`
  width: 100%;
  height: 50px;
`;

export const NavWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ scrollNav }) => (scrollNav ? "#111" : "#fff")};
`;

export const NavMenu = styled.ul`
  height: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MegaDropDown = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;

  height: 420px;
  background: whitesmoke;
  transition: 0.3s ease;
  opacity: 0;
  visibility: hidden;
`;

export const DropDown = styled.div`
  position: absolute; 
  top: 50px; 
  left: 50%;
  transform: translate(-50%, -0%);
  width: 180px;
  background: whitesmoke;
  transition: .3s ease;
  opacity: 0;
  visibility: hidden;

  @media screen and (max-width: 800px) {
    left; 100%;
  }
`;

export const NavLi = styled.li`
  height: 100%;
  display: inline-block;
  position: relative;

  &:hover ${MegaDropDown}{
      opacity: 1;
      visibility: visible
    }

    &:hover ${DropDown}{
      opacity: 1;
      visibility: visible
    }
    
  }
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ scrollNav }) => (scrollNav ? "#111" : "#fff")};
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 3px;
    background: ${({ scrollNav }) =>
      scrollNav ? "rgba(0,74,125, .6)" : "#fff"};
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
  background: ${({ scrollNav }) => (scrollNav ? "#424242" : "#fff")};
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
  height: 95%;
  margin: 10px auto;
  border: 1px solid #ddd;
`;

export const DropLink = styled(Link)`
  display: block;
  padding: 0.5rem 0 0.5rem 0.5rem;
  font-size: 17px;
  color: #424242;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  &:hover {
    background: rgba(0, 74, 125, 0.6);
    color: whitesmoke;
  }
`;
