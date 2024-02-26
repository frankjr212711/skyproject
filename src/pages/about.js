import { About } from "../components/About/index";
import { NavbarAlias } from "../components/NavbarAlias/index";
import { GlobalStyles } from "../GlobalStyles";
import { ScrollToTop } from "../ScrollTop";

export const AboutPage = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <NavbarAlias />
      <About />
    </>
  );
};
