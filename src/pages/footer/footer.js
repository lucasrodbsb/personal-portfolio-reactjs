import React from 'react';
import { Container, ContainerCopyright, Copyright} from '../../assets/styled/styled';
import Slide from 'react-awesome-reveal';
import LangSelect from '../langselect/langselect';

const Footer = () => {
    return(
        <Slide triggerOnce>
        <ContainerCopyright>
            <Container flexDirection="column">
            <LangSelect/>
                <Copyright color='#fff'>Copyright © 2023 Lucas Rodrigues</Copyright>
            </Container>
        </ContainerCopyright>
        </Slide>
    )
};

export default Footer;