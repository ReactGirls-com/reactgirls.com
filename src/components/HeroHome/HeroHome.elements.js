import styled from "styled-components";
import { sizes, colors, breakpoints } from "../../variables";
import { TitleCenter, Subtitle } from "../reusable/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CloseButton = styled.button`
  position: absolute;
  right: 12px;
  top: 10px;
  background: none;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
  }

  > img {
    width: 14px;
    height: 14px;

    > path {
      stroke: red;
      fill: pink;
      color: #fff;
    }

    :hover {
      filter: invert(100%);
    }
  }
`;

export const InfoButton = styled.button`
  border-radius: 4px;
  padding: 4px 10px;
  border: 1px solid white;
  > a {
    text-decoration: none;
    font-size: 12px;
  }
`;

export const Banner = styled.div`
  background: #00b4cd;
  position: absolute;
  z-index: 1000;
  top: 56px;
  font-size: 14px;
  right: 25px;
  max-width: 400px;
  border-radius: 4px;
  padding: 12px;
  > div {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  > p {
    margin-right: 30px;
    color: #fff;
    a {
      font-size: 12px;
    }
  }
`;

export const HeroHomeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 120px;
  transition: all 1.5s ease-in-out;

  @media only screen and (max-width: 1250px) {
    padding-top: 120px;
    padding-bottom: 80px;

    &.active {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    @media only screen and (max-width: 325px) {
      margin-left: 16px;
      margin-right: 16px;
      padding-bottom: 40px;
    }
  }
`;

export const HeroHomeColumn = styled.div`
  @media only screen and (max-width: 1250px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapperHome = styled.div`
  max-width: 540px;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-right: 16px;
    margin-left: 16px;
  }
`;

export const HeadingHome = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1250px) {
    align-items: center;
    //margin-bottom: 20px;
  }
`;

export const TitleLeftHome = styled(TitleCenter)`
  text-align: left;
  font-size: ${sizes.sizeXXXL};
  font-weight: 500;

  @media only screen and (max-width: 1250px) {
    text-align: center;
    font-size: ${sizes.sizeXL};
    font-weight: 500;
  }

  @media only screen and (max-width: 330px) {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const FirstHomeRow = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 325px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const AnimationText = styled.div`
  font-weight: 500;
  color: ${colors.mainBlue};
  font-size: ${sizes.sizeXXXL};
  cursor: pointer;
  //border: 1px solid red;

  :hover {
    filter: saturate(50%) contrast(75%);
  }

  @media only screen and (max-width: 1250px) {
    font-size: ${sizes.sizeXL};
    font-weight: 500;
  }

  @media only screen and (max-width: 330px) {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
  }
`;

export const SliderText = styled(Slider)`
  margin-left: 12px;
  width: 225px;
  position: relative;
  top: 2.5px;
  //border: 1px solid red;

  .slick-slide {
    height: 50px;

    @media only screen and (max-width: 1250px) {
      height: 34px;
    }
  }

  @media only screen and (max-width: 1250px) {
    width: 140px;
    bottom: 4px;
    margin: 0 auto 0 8px;
    top: 1.5px;
  }

  @media only screen and (max-width: 330px) {
    width: 150px;
    position: relative;
    //top: 2px;
    margin: 0 auto;
  }
`;

export const ImgHomeContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  outline: none;

  @media only screen and (max-width: 319px) {
    width: 240px;
    height: 240px;
  }
  @media only screen and (min-width: 319px) and (max-width: 370px) {
    width: 280px;
    height: 280px;
  }
  @media only screen and (min-width: 370px) and (max-width: 420px) {
    width: 338px;
    height: 338px;
  }
  @media only screen and (min-width: 420px) and (max-width: 1130px) {
    width: 380px;
    height: 380px;
  }

  @media only screen and (min-width: 1130px) {
    width: 480px;
    height: 480px;
  }
`;

export const HeroHomeImg = styled.img`
  object-fit: cover;
  height: 100%;
  position: relative;
  right: 0px;

  &.community01 {
    right: 0px;
  }
  &.webinar01 {
    right: 120px;
  }
  &.mentoring01 {
    right: 130px;
  }
  &.academy01 {
    right: 130px;
  }
  &.meetup01 {
    right: 130px;
  }
  &.mworkshop {
    right: 130px;
  }
`;

export const SliderImg = styled(Slider)`
  @media only screen and (max-width: 1250px) {
    margin: 30px auto 0 auto;
  }
  .slick-dots li {
    width: 10px;
    transition: width 0.3s ease-in-out;
  }
  .slickCustomDots {
    height: 10px;
    width: 10px;
    background-color: ${colors.veryLightGrey};
    border-radius: 50%;
    margin-top: 30px;
  }
  .slick-dots .slick-active .slickCustomDots {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: relative;
    top: 0px;
    background-color: ${colors.mainBlue};
  }
  @media only screen and (max-width: 319px) {
    width: 240px;
  }

  @media only screen and (min-width: 319px) and (max-width: 370px) {
    width: 280px;
  }

  @media only screen and (min-width: 370px) and (max-width: 420px) {
    width: 338px;
  }

  @media only screen and (min-width: 420px) and (max-width: 1130px) {
    width: 380px;
  }

  @media only screen and (min-width: 1130px) {
    width: 480px;
  }

  .hideDesktop {
    @media only screen and (min-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
  .hideMobile {
    @media only screen and (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`;

export const SubtitleHero = styled(Subtitle)`
  margin-top: 20px;
  margin-bottom: 30px;

  @media only screen and (max-width: 1250px) {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
