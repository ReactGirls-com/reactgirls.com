import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../../variables';
import { TitleLeft, Button, ParagraphS, TitleCenter } from '../styled';

export const PriceWrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    border-bottom: ${({showBorderBottom}) => (showBorderBottom ? `1px solid #DEDCDC`  : `none` )};

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const PriceArea = styled.div`
    border-bottom: 2px solid ${colors.veryLightGrey};
    border-radius: 30px 30px 0px 0px;
    font-size: ${sizes.sizeXXXL} ;
    color: ${colors.darkGrey};
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    padding-bottom: 50px;
    padding-top: 50px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding-bottom: 40px;
        padding-top: 40px;
        margin: 30px;
    }
`;

export const PriceRectangle = styled.div`
    width: 380px;
    margin: 80px auto 40px auto;
    background: ${colors.white};
    border-radius: 30px; 
    box-shadow: 0px 0px 20px rgba(68, 68, 68, 0.10), 0px 0px 4px rgba(68, 68, 68, 0.1);

    @media screen and (max-width: 415px) {
        width: 351px;
        margin: 80px auto 0px auto;
        
    }

    @media screen and (max-width: 376px) {
        width: 320px;
        
    }

    @media screen and (max-width: 340px) {
        width: 280px;
       
    }

    @media screen and (max-width: 319px) {
        width: 100%;
        background: none;
        box-shadow: none;
    }
`;

export const PriceContainer = styled.div`
    padding: 10px 40px 50px 40px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 0 40px 40px 40px;

    }
`;

export const TitlePrice = styled(TitleCenter)`

    @media screen and (max-width: ${breakpoints.tablet}) {
        margin-right: 16px;
        margin-left: 16px;
    }
`;

export const PriceRow = styled.div`
    display: flex;
    margin-bottom: 28px;
    align-items: flex-start;
    
    @media screen and (max-width: ${breakpoints.tablet}) {
        margin-bottom: 20px;
    }
`;

export const PriceIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 10px;
    margin-top: 3px;
`;

export const PriceText = styled(ParagraphS)`
    font-size: ${sizes.sizeXS};
    color: ${colors.grey};
`;

export const PriceTitle = styled(TitleLeft)`
    width: 40%;
`;

export const PriceIconMain = styled.div`
    width: 70%;
    margin: 0 auto 40px auto;
    padding: 15px;
    text-align: center;
    font-size: ${sizes.sizeXXXL};
    font-weight: 700;
`;

export const ButtonPrice = styled(Button)`
    margin-top: 45px;
`;
