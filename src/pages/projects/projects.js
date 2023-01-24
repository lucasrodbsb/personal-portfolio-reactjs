import React from 'react';
import { Container, Title } from '../../assets/styled/styled';
import Slide from 'react-reveal/Slide';

import { i18n } from '../../translate/i18n';

import Carousel from '../../assets/Carousel/carousel';
// import logoReact from '../../assets/imagensLogos/react.png';

const Projects = () => {
    return (
        <Slide left>
            <Container flexDirection='column'>
                <Title color='#fff'>{i18n.t('projects.title')}</Title>
            </Container>

            <Carousel />
            
        </Slide>
    );
};

export default Projects;