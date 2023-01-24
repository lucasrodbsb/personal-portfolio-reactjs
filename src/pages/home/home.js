import React from 'react';
import './style.css';
import Tilt from 'react-parallax-tilt';
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import Slide from 'react-awesome-reveal';

import curriculo from '../../assets/Curriculo_Lucas_R.pdf';

import { i18n } from '../../translate/i18n';


const Home = () => {

    const onButtonClick = () => {

        fetch(curriculo).then(response => {
            response.blob().then(blob => {

                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = curriculo;
                alink.click();
            })
        })
    }

    const [Nome] = useTypewriter({
        words: ['Lucas Rodrigues'],
        typeSpeed: 100,
        cursor: true,
        cursorStyle: "|",
        cursorColor: "#fff"
      });

      const [Profissao] = useTypewriter({
        words: ["Front-End Developer!", "UI/UX Designer!", "Web Developer!", "Tech Lover!", ],
        loop: 0, // Infinit
        typeSpeed: 100,
        delaySpeed: 3000
      });

    return (
        <main>
            <Slide triggerOnce>
            <section className="thumb">
                <div className="content-thumb">
                    <Tilt tiltReverse="true" scale="1.1" id="foto" className="image-thumb"></Tilt>
                    <div className="text-thumb">
                        <h1 id="nome">{Nome}<Cursor /></h1>
                        <span id="txt">{i18n.t('home.iam')} {Profissao}<Cursor /></span>
                        <div className="media-icons">
                            <a href="https://www.linkedin.com/in/lucas-rocha-515358223" target="_blank" title="Linkedin" rel="noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://wa.me/5561982789687" target="_blank" title="Whatsapp" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                            <a href="https://instagram.com/gh0st_l?igshid=YmMyMTA2M2Y=" target="_blank" title="Instagram" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://github.com/lucasrodbsb" target="_blank" title="Github" rel="noreferrer"><i className="fab fa-github"></i></a>
                            <a className='curriculo' href="" onClick={onButtonClick} title="Curriculum" rel="noreferrer"><i className="fa fa-file"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            </Slide>
        </main>
    );
};

export default Home;