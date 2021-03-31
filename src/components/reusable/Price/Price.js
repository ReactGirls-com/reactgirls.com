import React from 'react';
import { 
    Container, 
    Wrapper, 
} from '../styled';

import { 
    PriceContainer,
    PriceRow,
    PriceIcon,
    PriceText,
    ButtonPrice,
    PriceRectangle,
    PriceArea,
    PriceWrapper,
    TitlePrice,
    RegisterWrapper,
} from './Price.elements';
import { RegisterButton } from '../Hero/RegisterButton';

function Price({mainPriceTitle, data, price, form, showLogInButton, showNewsletter, showBorderBottom }) {
    return (
        <Container id='price'>
            <Wrapper>
                <PriceWrapper showBorderBottom={showBorderBottom}>
                    <TitlePrice>{mainPriceTitle}</TitlePrice>
                    <PriceRectangle>
                        <PriceArea>
                            {price}
                        </PriceArea>
                        <PriceContainer>                  
                        {data.map((item) => {
                            return(
                            <PriceRow key={item.text} data={data}>
                                <PriceIcon src="/images/icons/done.svg" />
                                <PriceText>{item.text}</PriceText>
                            </PriceRow>
                            )
                        })
                        } 

                        <RegisterWrapper>
                        <RegisterButton showLogInButton={showLogInButton} />
                        </RegisterWrapper>
                    </PriceContainer> 
                    </PriceRectangle> 
                </PriceWrapper> 
            </Wrapper>
        </Container>
    )
}

export default Price;