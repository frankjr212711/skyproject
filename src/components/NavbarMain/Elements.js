import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background:     
    // linear-gradient(to top, transparent, 70%, rgba(0, 74, 125, .5));
    linear-gradient(to top, transparent, 70%, rgba(0, 74, 125, .9));
  // box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  font-family: 'Jost';

  // border: 1px solid red;
  z-index: 9999
`
export const NavWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NavLogo = styled(Link)`
  font-size: 24px;
  color: #fff;
`
export const NavMenu = styled.ul`
 
`
export const NavLi = styled.li`
  display: inline-block;
  margin-left: 2rem;
`
export const NavLink = styled(Link)`
  font-size: 20px;
`
