import React from 'react';
import { Container, Wrapper } from '../reusable/styled';
import { useTheme } from '../../ThemeContext';
import { 
    ContactHeroTitle,
    ContactInfo,
    ContactHeroContainer,
} from './ContactHero.elements';

import Newsletter from '../reusable/Newsletter/Newsletter';

function ContactHero() {
    const navLogo = useTheme();
    return (
        <Container lightBlue>
            <Wrapper>
                <ContactHeroContainer className={navLogo ? 'active' : ''}>
                    <ContactHeroTitle>Jak nás můžeš kontaktovat?</ContactHeroTitle>
                    <ContactInfo>
                        Napiš nám přes Slack, ostatní sociální sítě nebo nás kontaktuj přímo. Můžeš také odebírat náš newsletter.
                    </ContactInfo>
                    <Newsletter />
                </ContactHeroContainer>
            </Wrapper>
        </Container>
    )
}

export default ContactHero;
