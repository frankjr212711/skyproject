import { Contact } from "../components/Contact/index";
import { NavbarMain } from "../components/NavbarMain/index";
import { GlobalStyles } from "../GlobalStyles";
import { ScrollToTop } from "../ScrollTop";

export const ContactPage = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <NavbarMain />
      <Contact />
    </>
  );
};
