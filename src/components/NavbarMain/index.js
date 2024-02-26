import {
  NavContainer,
  NavWrapper,
  NavLogo,
  NavMenu,
  NavLi,
  NavLink,
} from "./Elements";


export const NavbarMain = () => {
  return (
    <>
      
      <NavContainer>
        <NavWrapper>
          <NavLogo to='/'>
            LOGO
          </NavLogo>
          <NavMenu>
            <NavLi>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Why Us?</NavLink>
              <NavLink to="/">Company</NavLink>
              <NavLink to="/">Info</NavLink>
            </NavLi>
          </NavMenu>
        </NavWrapper>
      </NavContainer>
    </>
  );
};
