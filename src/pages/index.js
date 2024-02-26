import { GlobalStyles } from "../GlobalStyles";
import { NavbarMain } from "../components/NavbarMain/index";
import { HeroMain } from "../components/Hero";
import { IntroSection } from "../components/IntroSection";
import { ScrollToTop } from "../ScrollTop";

export const Home = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <NavbarMain />
      <HeroMain />
      <IntroSection />
    </>
  );
};
