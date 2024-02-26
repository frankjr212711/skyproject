import { Contact } from "../components/Contact/index";
import { NavbarAlias } from "../components/NavbarAlias/index";
import { GlobalStyles } from "../GlobalStyles";
import { ScrollToTop } from "../ScrollTop";

export const ContactPage = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <NavbarAlias />
      <Contact />
    </>
  );
};
