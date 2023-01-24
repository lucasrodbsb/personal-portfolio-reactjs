import React from 'react';
import { Container, ContainerCopyright, Copyright} from '../../assets/styled/styled';
import Slide from 'react-reveal/Slide';
import LangSelect from '../langselect/langselect';

const Footer = () => {
    return(
        <Slide left>
        <ContainerCopyright>
            <Container flexDirection="column">
                <Copyright color='#fff'>Copyright © 2023 Lucas Rodrigues</Copyright>
                <LangSelect/>
            </Container>
        </ContainerCopyright>
        </Slide>
    )
};

export default Footer;