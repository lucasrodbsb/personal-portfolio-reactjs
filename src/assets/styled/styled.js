import styled from "styled-components";
import fotoLucas from '../../assets/lucasFoto.png';
import '../../css/fonts.css';


export const Title = styled.h1`
        font-family: 'CHAVTER', sans-serif;
        color: ${props => props.color};
        font-size:40px;
        border-bottom: solid #fff 1.5px;
        width: 80%;
        padding-bottom: 5px;
        text-align: center;
        margin-bottom: 40px;

        @media (max-width: 676px) {
            margin-bottom: 30px;
        }
    `;

export const Container = styled.div`
        display: flex;
        flex-direction: ${props => props.flexDirection};
        justify-content: center;
        align-items: center;
        background-color:${props => props.bgcolor};
        max-width:900px;
        margin: 0 auto;
        margin-bottom: ${props => props.mgBottom};

        @media (max-width: 901px) {
            width: calc(100% - 30px);
        }
    `;

export const BioTxt = styled.p`
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.color};
        font-size:29px;
        text-align: left;
        font-weight: 100;
        line-height: 50px;
        

        @media (max-width: 676px) {
            text-align: left;
            font-size:25px;
            line-height: 40px;
        }
    `;

export const Infos = styled.div`
        display: flex;
        flex-direction: ${props => props.flexDirection};
        justify-content: center;
        align-items: center;
        background-color:${props => props.bgcolor};
        width: 100%;
        gap: 30px;
        margin-bottom: 50px ;


        @media (max-width: 676px) {
            flex-direction: column;
            align-items: center;
        }
    `;

export const Pic = styled.div`
        width: 2500px;
        height: 500px;
        border-radius: 30px;
        background-color: #fff;
        background-image: url(${fotoLucas});

        background-position: center;
        background-size: cover;

        @media (max-width: 676px) {
            max-width: 80%;
            height: 400px;
            background-position: center;
        }
    `;

export const Logo = styled.div`
        width: 100px;
        height: 100px;
        background-image: url(${props => props.img});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        // filter: grayscale(1);
        transition: 0.5s;

        &:hover {
            transform: translateY(-20px);
        }

        @media (max-width: 676px) {
            width: 60px;
            height: 60px;
        }

    `;

export const TechsContainer = styled.div`
        display: flex;
        flex-direction: ${props => props.flexDirection};
        justify-content: center;
        align-items: center;
        background-color:${props => props.bgcolor};
        width: 100%;
        gap: 30px;
        margin-bottom: 50px ;
        flex-wrap: wrap;

        &:hover > :not(:hover) {
            filter: grayscale(1);
            transition: 0.5s;
        }
    `;


// ===========Carousel============

export const ProjectDiv = styled.div`
    // height: 500px;
    // width: 300px;
    background-color:${props => props.bgcolor};
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;

    cursor: grab;

    &:active {
        cursor: grabbing;
    }

`;

export const ProjectImg = styled.div`
    width: 100%;
    height: 350px;
    background-color: ${props => props.bgcolor};

    background-image: url(${props => props.img});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50; 

    @media (max-width: 676px) {
        height: 300px;
    }
    @media (max-width: 450px) {
        height: 200px;
    }

`;

export const ProjectName = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.color};
    font-size:${props => props.fontSize};
    text-align: left;
    font-weight: 100;
    margin-top: ${props => props.marginTop};

`;


// ===========Contacts============

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    font-family: 'CHAVTER', sans-serif;
    align-items: center;

    & > input {
        width: 600px;
        border-radius: 10px;
        font-family: 'CHAVTER', sans-serif;
        padding: 15px;
        font-size: 20px;

        &::placeholder {
            font-weight: bold;
            color: #0000005d;
            font-size: 20px;
            // text-align: center;
        }

        @media (max-width: 676px) {
            width: 90%;
        }
    }

    & > textarea {
        width: 600px;
        height: 150px;
        border-radius: 10px;
        font-size: 20px;
        font-family: 'CHAVTER', sans-serif;
        padding: 15px;


        &::placeholder {
            
            font-weight: 900;
            color: #0000005d;
            font-size: 20px;
            text-align: left;
        
        }

        @media (max-width: 676px) {
            width: 90%;
        }
    }

    & > .button {
        // margin-top: 20px;
        max-width: 300px;
        font-size: 25px;
        cursor: pointer;
        background-color: #f1f1f1;
        transition: 0.2s;
        
        &:hover {
            background-color: #f1f1f199;
        }
    }
`;


// ===========Footer============

export const Copyright = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.color};
    font-size:${props => props.fontSize};
    text-align: center;
    font-weight: 100;
    margin-top: ${props => props.marginTop};
    font-weight: 999;

`;

export const ContainerCopyright = styled.div`
    margin-top: 50px;
    // height: 60px;
    display: flex;
`;

export const LanguageSelect = styled.ul`
    background-color: ${props => props.bgcolor};
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 10px;
    z-index: 999;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: 0.5s;

    &:hover > :not(:hover) {
        filter: opacity(0.4);
        transition: 0.5s;
    }

    li {
        transition: 0.5s;
    }

    img {
        width: 40px;
        cursor: pointer;

        transition: 0.5s;

        &:hover {
            transform: translateY(-5px);
        }
    }
`;