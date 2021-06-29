import React from "react";
import { useState, useCallback, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "../../ThemeContext";
import { Banner } from "../../components/Banner";

import {
  HeroHomeRow,
  HeroHomeColumn,
  ImgHomeContainer,
  HeroHomeImg,
  TextWrapperHome,
  AnimationText,
  HeadingHome,
  TitleLeftHome,
  FirstHomeRow,
  SliderImg,
  SliderText,
  SubtitleHero,
} from "./HeroHome.elements";

import { Container, Wrapper } from "../reusable/styled";
import { animationText, heroHomeArr } from "./heroHomeArr";
import Newsletter from "../reusable/Newsletter/Newsletter";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

function HeroHome({ img }) {
  const [showBanner, setShowBanner] = useState(true);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const settingsImg = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 550,
    pauseOnHover: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="slickCustomDots"></div>,
  };

  const settingsImgMobile = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 550,
    fade: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="slickCustomDots"></div>,
  };

  const settingsText = {
    vertical: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    speed: 550,
    pauseOnHover: false,
  };
  const isBreakpoint = useMediaQuery(1250);
  const navLogo = useTheme();
  return (
    <Container lightBlue>
      <Wrapper>
        <HeroHomeRow className={navLogo ? "active" : ""}>
          <HeroHomeColumn>
            <TextWrapperHome>
              <HeadingHome>
                <FirstHomeRow>
                  <TitleLeftHome>Zapoj se do</TitleLeftHome>
                  <SliderText {...settingsText}>
                    {animationText.map((text) => {
                      return (
                        <Link
                          to={text.id}
                          smooth={true}
                          duration={text.duration}
                          spy={true}
                          exact="true"
                          offset={-80}
                        >
                          <AnimationText>{text.text}</AnimationText>
                        </Link>
                      );
                    })}
                  </SliderText>
                </FirstHomeRow>
                <TitleLeftHome>a nauč se programovat</TitleLeftHome>
                <TitleLeftHome> v Reactu!</TitleLeftHome>
              </HeadingHome>

              {isBreakpoint && (
                <SliderImg className="hideDesktop" {...settingsImgMobile}>
                  {heroHomeArr.map((item) => {
                    return (
                      <ImgHomeContainer key={item.id}>
                        <HeroHomeImg src={item.img} />
                      </ImgHomeContainer>
                    );
                  })}
                </SliderImg>
              )}
              <SubtitleHero>#ReactGirlsPrague</SubtitleHero>
              <Newsletter id="newsletterHero" />
            </TextWrapperHome>
          </HeroHomeColumn>
          <HeroHomeColumn>
            {!isBreakpoint && (
              <SliderImg className="hideMobile" {...settingsImg}>
                {heroHomeArr.map((item) => {
                  return (
                    <ImgHomeContainer key={item.id}>
                      <HeroHomeImg className={item.id} src={item.img} />
                    </ImgHomeContainer>
                  );
                })}
              </SliderImg>
            )}
          </HeroHomeColumn>
        </HeroHomeRow>
      </Wrapper>
    </Container>
  );
}

export default HeroHome;
