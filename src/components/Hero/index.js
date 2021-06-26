import React from 'react';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1> A melhor Pizza que existe </HeroH1>
                    <HeroP> Prontinha em 10 minutos </HeroP>
                    <HeroBtn>Faça seu pedido</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
