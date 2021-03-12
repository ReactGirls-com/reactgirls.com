import React, { useState, useCallback, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useTheme, useThemeUpdate } from '../../ThemeContext';
import { Link } from 'react-router-dom';
import { 
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavWrapper,
    Nav,
    Social,
    SocialIcon,
    MobileIcon,
    MobileIconMenu,
    MobileIconClose
    } from './Navbar.elements';

import { Container, Wrapper } from '../../components/reusable/styled';
import socialArr from './socialArr';

function Navbar() {
    const navLogo = useTheme();
    const changeLogoSize = useThemeUpdate();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 
    const toggleHome = () => {
        scroll.scrollToTop()
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
      const isBreakpoint = useMediaQuery(960)
    return (
        <Nav>
            <Container>
                <Wrapper>
                    
                    <NavWrapper className={navLogo ? 'active' : ''} > 
                        <Link exact to='/'>
                        <NavLogo onClick={toggleHome} src="/images/logo-blue.svg" className={navLogo ? 'active' : ''} />
                        </Link>
                        <MobileIcon onClick={handleClick} >
                            {click ? <MobileIconClose src="/images/icons/close.svg"/> : <MobileIconMenu src="/images/icons/menu.svg"/> }
                        </MobileIcon>
                    
                        <NavMenu onClick = {handleClick} click={click} className={navLogo ? 'active' : '' }>
                            <NavItem>
                                <NavLinks activeStyle={{ color: '#00B4CD' }} exact to='/'>Úvod</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks activeStyle={{ color: '#00B4CD'  }} to='/onas'>O nás</NavLinks>
                            </NavItem>                        
                            <NavItem>
                                <NavLinks activeStyle={{ color: '#00B4CD' }} to='/mentoring'>Mentoring</NavLinks>
                            </NavItem>                        
                            <NavItem>
                                <NavLinks activeStyle={{ color: '#00B4CD' }} to='/akademie'>Akademie</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks activeStyle={{ color: '#00B4CD' }} to='/kontakt'>Kontakt</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavWrapper> 
                    
                   
                </Wrapper>
            </Container>
            { !isBreakpoint &&   
            <Social>
                {socialArr.map((social) => (
                    <a key={social.link} href={social.link} target="blank">
                        <SocialIcon src={social.icon} />
                    </a>
                    )
                )}
            </Social>
            }
        </Nav>
    )
}

export default Navbar
