import { Skywalker } from "../components/Skywalker/index";
import { NavbarAlias } from "../components/NavbarAlias/index";
import { GlobalStyles } from "../GlobalStyles";
import { ScrollToTop } from "../ScrollTop";

export const SkywalkerPage = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <NavbarAlias />
      <Skywalker />
    </>
  );
};
