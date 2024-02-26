import { Careers } from "../components/Careers";
import { NavbarAlias } from "../components/NavbarAlias/index";
import { GlobalStyles } from "../GlobalStyles";
import { ScrollToTop } from "../ScrollTop";

export const CareersPage = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <NavbarAlias />
      <Careers />
    </>
  );
};
