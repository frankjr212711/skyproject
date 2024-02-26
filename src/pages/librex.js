import { Librex } from "../components/Librex/index";
import { NavbarAlias } from "../components/NavbarAlias/index";
import { GlobalStyles } from "../GlobalStyles";
import { ScrollToTop } from "../ScrollTop";

export const LibrexPage = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <NavbarAlias />
      <Librex />
    </>
  );
};
