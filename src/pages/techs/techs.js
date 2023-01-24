import React from 'react';
import {Container, Title, Logo, TechsContainer} from '../../assets/styled/styled';
import Slide from 'react-reveal/Slide';


import logoReact from '../../assets/imagensLogos/react.png';
import logoRN from '../../assets/imagensLogos/reactnative.jpg';
import logoStyled from '../../assets/imagensLogos/styledcomp.png';
import logoType from '../../assets/imagensLogos/typescript.png';
import logoSass from '../../assets/imagensLogos/sass.jpg';
import logoJS from '../../assets/imagensLogos/javascript.png';
import logoGit from '../../assets/imagensLogos/git.jpg';
import logoHtmlcss from '../../assets/imagensLogos/htmlcss.jpg';
import logoFigma from '../../assets/imagensLogos/figma.svg';
import logoPhoto from '../../assets/imagensLogos/photoshop.png';
import logoIllustrator from '../../assets/imagensLogos/illustrator.png';

import { i18n } from '../../translate/i18n';

const Techs = () => {

    return(
        <Slide right>
        <Container flexDirection="column">
            <Title color='#fff'>{i18n.t('techs.title')}</Title>
            <TechsContainer>
                <Logo img={logoReact}/>
                <Logo img={logoRN}/>
                <Logo img={logoStyled}/>
                <Logo img={logoType}/>
                <Logo img={logoSass}/>
                <Logo img={logoJS}/>
                <Logo img={logoGit}/>
                <Logo img={logoHtmlcss}/>
                <Logo img={logoFigma}/>
                <Logo img={logoPhoto}/>
                <Logo img={logoIllustrator}/>
            </TechsContainer>
        </Container>
        </Slide>
    );
};

export default Techs;