import { GlobalStyles } from '../GlobalStyles';
import { NavbarMain } from '../components/NavbarMain/index';
import { HeroMain } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';

export const Home = () => {
  return (
    <>
     <GlobalStyles />
      <NavbarMain />
      <HeroMain />
      <IntroSection/>
    </>
   
  )
}
