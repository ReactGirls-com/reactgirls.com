import React, { useState, useEffect, useCallback} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { 
    CardsContainerMobile,
    CardsContainerDesktop,
    Card,
    LectorImg,
    LectorName,
    LectorJob,
    LectorLink,
    LectorImgContainer,
    IconIn,
    SliderLector,
    WrapperLector,
    Arrow,
    LectorCompany
 } from './Lector.elements';

 import lectorArr from './lectorArr';
 import { Container, Wrapper, TitleCenter } from '../../components/reusable/styled';

 

function Lector({ deviceType }) {  
   
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        accessibility: true,
        swipeToSlide: true,
        nextArrow: <Arrow src="/images/icons/right-arrow.svg" />,
        prevArrow: <Arrow src="/images/icons/left-arrow.svg" />,
        responsive: [
            {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 1130,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 700,
            settings: {
                slidesToShow: 1
                }
            }
        ]
        }

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

    const isBreakpoint = useMediaQuery(1250);
    return (
        <>
            <Container lightBlue>
                <Wrapper>
                    <WrapperLector>
                        <TitleCenter>Lektoři</TitleCenter>
                    </WrapperLector>  
                </Wrapper>  
            </Container>
            <Container  >
                { isBreakpoint &&
                    <CardsContainerMobile>  
                        <SliderLector  {...settings}>
                            {lectorArr.map((lector) => (
                                <Card key={lector.lectorName} > 
                                    <LectorImgContainer>
                                        <LectorImg src={lector.lectorImg} />
                                        <LectorLink href={lector.lectorLinkedIn} target="blank" ><IconIn src="/images/icons/linkedIn_white.svg" /></LectorLink>
                                    </LectorImgContainer>
                                    
                                    <LectorName>{lector.lectorName}</LectorName>
                                    <LectorJob>{lector.lectorJob}</LectorJob>
                                    <LectorCompany>{lector.lectorCompany}</LectorCompany>
                                </Card>
                                )
                            )}
                        </SliderLector>           
                    </CardsContainerMobile>  
                }  
                { !isBreakpoint &&   
                <CardsContainerDesktop>
                    {lectorArr.map((lector) => (
                                <Card key={lector.lectorName} > 
                                    <LectorImgContainer>
                                        <LectorImg src={lector.lectorImg} />
                                        <LectorLink href={lector.lectorLinkedIn} target="blank" ><IconIn src="/images/icons/linkedIn_white.svg" /></LectorLink>
                                    </LectorImgContainer>
                                    
                                    <LectorName>{lector.lectorName}</LectorName>
                                    <LectorJob>{lector.lectorJob}</LectorJob>
                                    <LectorCompany>{lector.lectorCompany}</LectorCompany>
                                </Card>
                                )
                            )}
                </CardsContainerDesktop>
                
                }
            </Container>
        </>
    )
}

export default Lector;


