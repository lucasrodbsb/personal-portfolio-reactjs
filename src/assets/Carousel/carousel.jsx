// Import Swiper React components
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, ProjectDiv, ProjectImg, ProjectName } from '../../assets/styled/styled';

import ProjetoRotaBus from '../../assets/imagensProjetos/rotaBus.gif';
import ProjetoViver from '../../assets/imagensProjetos/projetoviver.gif';
import ProjetoPortfolio from '../../assets/imagensProjetos/personalportfolio.gif';
import ProjetoClubinho from '../../assets/imagensProjetos/projetoclubinho.png';
import ProjetoBalnearioLP from '../../assets/imagensProjetos/landingpagebalneario.png';
import ProjetoFilmesemCartaz from '../../assets/imagensProjetos/appfilmesemcartaz.gif';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



const Carousel = () => {
    return (
    <Container mgBottom='50px'>
        <Swiper
        // install Swiper modules
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
            <ProjectDiv>
                <ProjectImg img={ProjetoViver}/>
                <ProjectName color='#fff' marginTop='20px' fontSize='30px'><b>Projeto Viver</b></ProjectName>
                <ProjectName color='#fff' marginTop='10px' fontSize='15px'>HTML | CSS | JS | JQUERY</ProjectName>
            </ProjectDiv>
        </SwiperSlide>
        <SwiperSlide>
            <ProjectDiv>
                <ProjectImg img={ProjetoRotaBus}/>
                <ProjectName color='#fff' marginTop='20px' fontSize='30px'><b>Bus Route</b></ProjectName>
                <ProjectName color='#fff' marginTop='10px' fontSize='15px'>HTML | CSS | JS | ROUTES-API</ProjectName>
            </ProjectDiv>
        </SwiperSlide>
        <SwiperSlide>
            <ProjectDiv >
                <ProjectImg img={ProjetoFilmesemCartaz}/>
                <ProjectName color='#fff' marginTop='20px' fontSize='30px'><b>App Filmes em Cartaz</b></ProjectName>
                <ProjectName color='#fff' marginTop='10px' fontSize='15px'>REACT NATIVE</ProjectName>
            </ProjectDiv>
        </SwiperSlide>
        <SwiperSlide>
            <ProjectDiv >
                <ProjectImg img={ProjetoPortfolio}/>
                <ProjectName color='#fff' marginTop='20px' fontSize='30px'><b>Personal Portfolio</b></ProjectName>
                <ProjectName color='#fff' marginTop='10px' fontSize='15px'>REACTJS | STYLED-COMP.</ProjectName>
            </ProjectDiv>
        </SwiperSlide>
        <SwiperSlide>
            <ProjectDiv >
                <ProjectImg img={ProjetoBalnearioLP}/>
                <ProjectName color='#fff' marginTop='20px' fontSize='30px'><b>Balneário (Landing Page)</b></ProjectName>
                <ProjectName color='#fff' marginTop='10px' fontSize='15px'>HTML | CSS | JS</ProjectName>
            </ProjectDiv>
        </SwiperSlide>
        <SwiperSlide>
            <ProjectDiv >
                <ProjectImg img={ProjetoClubinho}/>
                <ProjectName color='#fff' marginTop='20px' fontSize='30px'><b>Projeto Clubinho</b></ProjectName>
                <ProjectName color='#fff' marginTop='10px' fontSize='15px'>HTML | CSS | JS</ProjectName>
            </ProjectDiv>
        </SwiperSlide>
      </Swiper>
    </Container>
    );
};

export default Carousel;