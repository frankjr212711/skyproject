import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: ${({ scrollNav }) =>
    scrollNav
      ? "rgba(255, 255, 255, .9)"
      : "linear-gradient(to top, transparent, 35%, rgba(0,74,125, .6))"};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 1px 2px 0 rgba(0, 0, 0, 0.3)" : ""};
  font-family: "Jost";

  z-index: 9999;

  transition: 0.3s ease;
`;

export const NavTop = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${({ scrollNav }) => (scrollNav ? "rgba(0, 0, 0, .1)" : "rgba(255, 255, 255, .1)")};

`;
export const NavTopSpan = styled.span`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: ${({ scrollNav }) => (scrollNav ? "#424242" : "#fff")};
  font-size: 14px;
`;

export const NavDown = styled.div`
  width: 100%;
  height: 40px;
`;

export const NavWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)`
  font-size: 14px;
  color: ${({ scrollNav }) => (scrollNav ? "#424242" : "#fff")};


`;





export const NavMenu = styled.ul``;
export const NavLi = styled.li`
  display: inline-block;
  margin-left: 2rem;
`;
export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ scrollNav }) => (scrollNav ? "#424242" : "#fff")};
  position: relative;


 

  &:before {
    content: '';
    position: absolute;
    top: 101%;
    left: 50%; 
    transform: translateX(-50%);
    width: 0%;
    height: 4px;
    background: ${({ scrollNav }) =>
    scrollNav
      ? "#424242"
      : "linear-gradient(to top, transparent, 70%, rgba(255,255,255))"};

      transition: .2s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;
