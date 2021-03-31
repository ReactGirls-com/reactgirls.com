import React from  'react';
import { ButtonHero, StyledLink } from './Hero.elements';


export const RegisterButton = ({showLogInButton}) => (
    <>
        {showLogInButton && 
            <StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSexxSmveb6lXC5W6nlrfiSPzf2QPlGZIU1cVF1EJR7rD64o3w/viewform" target="_blank">
                <ButtonHero>Registrace</ButtonHero>
            </StyledLink>
          }
    </>
);