import React from 'react';
import {Container, Title, BioTxt, Infos, Pic} from '../../assets/styled/styled';
import Slide from 'react-reveal/Slide';

import { i18n } from '../../translate/i18n';

//i18nextLng

const AboutMe = () => {
    return (
        <Slide left>
        <Container bgcolor='' flexDirection="column">
            
            <Title color='#fff'>{i18n.t('aboutme.title')}</Title>
            <Infos flexDirection='row'>
                <BioTxt color='#fff'>{i18n.t('aboutme.text')}</BioTxt>
                <Pic></Pic>
            </Infos>
        </Container>
        </Slide>
        
    );
};

export default AboutMe;