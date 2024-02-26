import { useState } from "react";
import Video from "../../videos/video-1.mp4";
// import { Button } from "../Button/ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./Elements";

export const HeroMain = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer >
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>

      <HeroContent>
        <HeroH1>Your one-stop place</HeroH1>
        <HeroP>
          Book a Design Visit today & lets work towards your modern style  home
        </HeroP>
        <HeroBtnWrapper>
          {/* <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
