import React, { useState } from 'react';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
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
