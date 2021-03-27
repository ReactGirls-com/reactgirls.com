import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../variables.js';
import { Name, Paragraph } from '../reusable/styled';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WrapperLector = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const SliderLector = styled(Slider)`
    .slider-wrapper {
    }
    .slick-slide {
    text-align: center;
    }
`;

export const CardsContainerDesktop = styled.div`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 100px 20px;
    justify-content: center;
    align-items: center;
    max-width: 1350px;
    //border: 1px solid red;

    @media only screen and (max-width: 1471px) {
        max-width: 1100px;
    }
`;

export const CardsContainerMobile = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 100px 20px;

    @media only screen and (max-width: 1280px) {
        padding: 60px 20px;
        max-width: 960px;
    }

    @media only screen and (max-width: 1200px) {
        max-width: 920px;
    }

    @media only screen and (max-width: 1130px) {
        max-width: 680px;
    }

    @media only screen and (max-width: 700px) {
        max-width: 350px;
    }

    @media only screen and (max-width: 420px) {
        max-width: 340px;
    }

    @media only screen and (max-width: 380px) {
        max-width: 300px;
    }

    @media only screen and (max-width: 320px) {
        max-width: 240px;
    }
`;

export const Card = styled.div`
    height: 400px;
    //width: 200px;
    max-width: 280px;
    width: 290px;
    display: flex;
    border-radius: 30px;
    background-color: ${colors.white} ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //padding: 5px 5px;
    box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.15);
    margin: 15px;
    outline: none;

    @media only screen and (max-width: 1280px) {
        width: 260px;
        max-width: 260px;
        width: 260px;
        padding: 25px 25px;
    }

    @media only screen and (max-width: 700px) {
        width: 220px;
        padding: 25px 5px;

    }

    @media only screen and (max-width: 380px) {
        padding: 0px 0px;
        margin: 0px;
        width: 200px;
        height: 300px;
        box-shadow: none;
        background-color: none;
    }
`;

export const LectorName = styled(Name)`
    text-align: center;
    font-weight: 900;
    margin-bottom: 10px;
`;

export const LectorJob = styled(Paragraph)`
    text-align: center;
    font-weight: 400;
    font-size: ${sizes.sizeXS};
    color: ${colors.darkGrey};
    margin: 5px auto;
    width: 85%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
`;
export const LectorCompany = styled(Paragraph)`
    text-align: center;
    font-weight: 400;
    font-style: oblique;
    font-size: ${sizes.sizeXS};
    color: #8C8C8C;
    margin: 5px auto;
    width: 85%;
    height: 23px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
`;

export const LectorLink = styled.a`
    position: absolute;
    bottom: 0;
    right: 0;
    border: 4px solid white;
    width: 50px;
    height: 50px;
    background-color: ${colors.mainBlue};
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LectorImg = styled.img`
    height: 150px;
    border-radius: 80px;
 `;

export const LectorImgContainer = styled.div`
    width: 150px;
    height: 150px;
    margin: 20px auto 40px auto;
    position: relative;
`

export const IconIn = styled.img`
    width: 18px;
    height: 18px;
`;

export const Arrow = styled.img`
    :hover{
        filter: invert(20%);
    }
`;




