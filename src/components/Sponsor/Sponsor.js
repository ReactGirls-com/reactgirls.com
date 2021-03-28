import React from 'react';
import { SponsorContainer, SponsorImgContainer, GoldSponsorship,SilverSponsorship, CommunitySponsorship } from './Sponsor.elements';
import { SponsorImg } from './Sponsor.elements';
import { Container, TitleCenter } from '../reusable/styled';
import { sponsorArrGold } from './sponsorArr';

function Sponsor() {
    return (
        <Container>
            <SponsorContainer>
                <TitleCenter>Naši partneři</TitleCenter>
                <GoldSponsorship>GOLD
                    <SponsorImgContainer>
                        {sponsorArrGold.map((sponsor) => {
                                return(
                                    <a  href={sponsor.link} target="blank">
                                        <SponsorImg src={sponsor.logo} key={sponsor.link}  />
                                    </a>
                                ) 
                        })}  
                    </SponsorImgContainer>
                </GoldSponsorship>
                <SilverSponsorship>SILVER
                    <SponsorImgContainer>
                        <a href="https://www.laufen.cz/?gclid=CjwKCAjwrcH3BRApEiwAxjdPTY8h7jL-L3LkYFK1zmDFTNg4uPPDi0kAM04t3aoc6H_MCSPmSMs3vRoCHLAQAvD_BwE" target="blank">
                            <SponsorImg src="/images/sponsors/laufen.png"/>
                        </a>
                        <a href="https://www.ppcbee.com/cs?gclid=CjwKCAjwrcH3BRApEiwAxjdPTUrWCsH29ks9kWsxEtCWvnwNzMJJJemKmoxHd55pyWEU79oHtHu-KRoCLUMQAvD_BwE" target="blank">
                            <SponsorImg src="/images/sponsors/pccbee-300x88-1.png"/>
                        </a>
                        <a href="https://www.productboard.com/" target="blank">
                            <SponsorImg src="/images/sponsors/productboard.png"/>
                        </a>
                    </SponsorImgContainer>
                </SilverSponsorship>
                <CommunitySponsorship>COMMUNITY 
                    <SponsorImgContainer>
                        <a href="https://techtaboo.dev/" target="blank">
                            <SponsorImg src="/images/sponsors/techaboo.png"/>
                        </a>
                        <a href="https://www.ngparty.cz/" target="blank">
                            <SponsorImg src="/images/sponsors/ng.png"/>
                        </a>
                        <a href="https://www.oakslab.com/" target="blank">
                            <SponsorImg src="/images/sponsors/oakslab.png"/>
                        </a>
                        <a href="https://www.puntoverde.cz/" target="blank">
                            <SponsorImg src="/images/sponsors/puntoverde.png"/>
                        </a>
                        <a href="https://fokusindustry.cz/" target="blank">
                            <SponsorImg src="/images/sponsors/fokus-logo.jpg"/>
                        </a>
                    </SponsorImgContainer>
                </CommunitySponsorship>  
            </SponsorContainer>
        </Container>
    )
}

export default Sponsor;