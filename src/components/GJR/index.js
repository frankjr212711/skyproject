import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTiktok,
  FaTwitter,
  FaInstagram,
  FaAngleDown,
} from "react-icons/fa";
import {
  GJRNavContainer,
  NavContent,
  GJRBanners,
  GJRTopBanner,
  GJRTopBannerWrap,
  GJRLogoBox,
  GJRLogoLink,
  GJRContact,
  GJRContactP,
  ContactLink,
  ContactLinkSpan,
  GJRMidBanner,
  MidBannerContent,
  MidBannerText,
  GJRNavLinks,
  Title,
  UL,
  Li,
  MenuBtn,
  MenuBtnSpan,
  MidContactLink,
  GJRThirdBanner,
  ThirdBannerContent,
  NavItems,
  MegaDropContent,
  Card,
  CardImgBox,
  CardImg,
  CardTitle,
  CardSpecs,
  ThirdUL,
  ThirdLi,
  MegaDrop,
  ThirdSpan,
} from "./Elements";

const slides = [
  { url: "images/gjr-img-01.jpg", title: "sky_img_01" },
  { url: "images/gjr-img-02.jpg", title: "sky_img_02" },
  { url: "images/gjr-img-03.jpg", title: "sky_img_03" },
  { url: "images/gjr-img-04.jpg", title: "sky_img_04" },
];

export const GJR = () => {
  return (
    <>
      <GJRNavContainer>
        <NavContent>
          <GJRBanners>
            <GJRTopBanner>
              <GJRTopBannerWrap>
                <GJRLogoBox>
                  <GJRLogoLink>LOGO</GJRLogoLink>
                </GJRLogoBox>
                <GJRContact>
                  <GJRContactP>
                    <ContactLink
                      to="mailto:info@gjrghana.com"
                      target="self"
                      data-tooltip="Email: info@gjrghana.com"
                    >
                      <ContactLinkSpan>
                        <FaEnvelope />
                        info@gjrghana.com
                      </ContactLinkSpan>
                    </ContactLink>
                  </GJRContactP>
                  <GJRContactP>
                    <ContactLink
                      to="tel:002330244250280"
                      target="self"
                      data-tooltip="Call +233 244 250 280"
                    >
                      <ContactLinkSpan>
                        <FaPhone />
                        +233 244 250 280 | +233 209 915 946
                      </ContactLinkSpan>
                    </ContactLink>
                  </GJRContactP>
                </GJRContact>
              </GJRTopBannerWrap>
            </GJRTopBanner>

            <GJRMidBanner>
              <MidBannerContent>
                <MidBannerText>
                  <Title>GJR COMPANY LIMITED</Title>
                </MidBannerText>
                <GJRNavLinks>
                  <UL>
                    <Li>
                      <MidContactLink
                        to="/https://www.facebook.com"
                        data-tooltip="@gjrkitchensghana"
                      >
                        <FaFacebook />
                      </MidContactLink>
                    </Li>
                    <Li>
                      <MidContactLink
                        to="//https://www.instagram.com"
                        data-tooltip="@gjrkitchensghana"
                      >
                        <FaInstagram />
                      </MidContactLink>
                    </Li>
                    <Li>
                      <MidContactLink to="//https://www.twitter.com">
                        <FaTwitter />
                      </MidContactLink>
                    </Li>
                    <Li>
                      <MidContactLink to="//https://www.tiktok.com">
                        <FaTiktok />
                      </MidContactLink>
                    </Li>
                    <Li>
                      <MidContactLink to="" className="gjr_comp_link">
                        Get Quote
                      </MidContactLink>
                    </Li>
                  </UL>
                </GJRNavLinks>
                <MenuBtn>
                  <MenuBtnSpan></MenuBtnSpan>
                  <MenuBtnSpan></MenuBtnSpan>
                  <MenuBtnSpan></MenuBtnSpan>
                </MenuBtn>
              </MidBannerContent>
            </GJRMidBanner>

            <GJRThirdBanner>
              <ThirdBannerContent>
                <ThirdUL>
                  <ThirdLi>
                    <ThirdSpan>
                      Wardrobes
                      <FaAngleDown />
                    </ThirdSpan>
                    <MegaDrop>
                    <MegaDropContent>
                      <Card>
                        <CardImgBox>
                          <CardImg src="images/gjr-img-02.jpg" alt=""></CardImg>
                        </CardImgBox>
                        <CardTitle>
                          <CardTitle>ALL RANGES</CardTitle>
                        </CardTitle>
                        <CardSpecs>
                          <Link to="">Styles</Link>
                          <Link to="">Handles</Link>
                        </CardSpecs>
                      </Card>

                      <Card>
                        <CardImgBox>
                          <CardImg src="images/gjr-img-02.jpg" alt=""></CardImg>
                        </CardImgBox>
                        <CardTitle>
                          <CardTitle>ALL RANGES</CardTitle>
                        </CardTitle>
                        <CardSpecs>
                          <Link to="">Styles</Link>
                          <Link to="">Handles</Link>
                        </CardSpecs>
                      </Card>

                      <Card>
                        <CardImgBox>
                          <CardImg src="images/gjr-img-02.jpg" alt=""></CardImg>
                        </CardImgBox>
                        <CardTitle>
                          <CardTitle>ALL RANGES</CardTitle>
                        </CardTitle>
                        <CardSpecs>
                          <Link to="">Styles</Link>
                          <Link to="">Handles</Link>
                        </CardSpecs>
                      </Card>

                      <Card>
                        <CardImgBox>
                          <CardImg src="images/gjr-img-02.jpg" alt=""></CardImg>
                        </CardImgBox>
                        <CardTitle>
                          <CardTitle>ALL RANGES</CardTitle>
                        </CardTitle>
                        <CardSpecs>
                          <Link to="">Styles</Link>
                          <Link to="">Handles</Link>
                        </CardSpecs>
                      </Card>

                      <Card>
                        <CardImgBox>
                          <CardImg src="images/gjr-img-02.jpg" alt=""></CardImg>
                        </CardImgBox>
                        <CardTitle>
                          <CardTitle>ALL RANGES</CardTitle>
                        </CardTitle>
                        <CardSpecs>
                          <Link to="">Styles</Link>
                          <Link to="">Handles</Link>
                        </CardSpecs>
                      </Card>

                      <Card>
                        <CardImgBox>
                          <CardImg src="images/gjr-img-02.jpg" alt=""></CardImg>
                        </CardImgBox>
                        <CardTitle>
                          <CardTitle>ALL RANGES</CardTitle>
                        </CardTitle>
                        <CardSpecs>
                          <Link to="">Styles</Link>
                          <Link to="">Handles</Link>
                        </CardSpecs>
                      </Card>
                    </MegaDropContent>
                    </MegaDrop>
                    
                  </ThirdLi>
                  <ThirdLi>
                    <ThirdSpan>
                      Kitchens
                      <FaAngleDown />
                    </ThirdSpan>
                  </ThirdLi>
                  <ThirdLi>
                    <ThirdSpan>
                      TV Sets
                      <FaAngleDown />
                    </ThirdSpan>
                  </ThirdLi>
                  <ThirdLi>
                    <ThirdSpan>
                      TV Units
                      <FaAngleDown />
                    </ThirdSpan>
                  </ThirdLi>
                  <ThirdLi>
                    <ThirdSpan>
                      Home Office
                      <FaAngleDown />
                    </ThirdSpan>
                  </ThirdLi>
                  <ThirdLi>
                    <ThirdSpan>
                      Awkward Spaces
                      <FaAngleDown />
                    </ThirdSpan>
                  </ThirdLi>
                </ThirdUL>
              </ThirdBannerContent>
            </GJRThirdBanner>
          </GJRBanners>
        </NavContent>
      </GJRNavContainer>
    </>
  );
};
