import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: ${({ scrollNav }) =>
    scrollNav
      ? "rgba(255, 255, 255, .9)"
      : "linear-gradient(to top, transparent, 70%, rgba(0,74,125, .6))"};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 1px 2px 0 rgba(0, 0, 0, 0.3)" : ""};
  font-family: "Jost";

  z-index: 9999;

  transition: 0.3s ease;
`;

export const NavTop = styled.div`
  width: 100%;
  height: 50px;
  // border-bottom: 1px solid rgba(255, 255, 255, .1);
  border-bottom: 1px solid
    ${({ toggleColor }) =>
      toggleColor ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .3)"};
`;
export const NavTopSpan = styled.span`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #424242;
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
`;

export const NavLogo = styled(Link)`
  font-size: 24px;
  color: ${({ toggleColor }) => (toggleColor ? "#424242" : "#fff")};
`;
export const NavMenu = styled.ul``;
export const NavLi = styled.li`
  display: inline-block;
  margin-left: 2rem;
`;
export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ toggleColor }) => (toggleColor ? "#424242" : "#fff")};
  // color: #424242;
`;
