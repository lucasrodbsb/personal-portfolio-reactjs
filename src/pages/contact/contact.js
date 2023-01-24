import React, { useState } from 'react';
import { Container, Title, ContactForm } from '../../assets/styled/styled';
import Slide from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';

import { i18n } from '../../translate/i18n';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert(i18n.t('contact.complete'));
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_nu54pvi", "template_fagqe0w", templateParams, "xv_H6exjgrbmM75IM")
        .then((response) => {
            console.log(i18n.t('contact.sent'), response.status, response.text)
            alert(i18n.t('contact.sent'))
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("ERRO: ", err)
        }
        )
    };

    return (
        <Slide triggerOnce>
            <Container bgcolor='' flexDirection="column">

                <Title color='#fff'>{i18n.t('contact.title')}</Title>
                <ContactForm onSubmit={sendEmail}>
                    <input
                        className="input"
                        type="text"
                        placeholder={i18n.t('contact.emailname')}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input
                        type="text"
                        placeholder={i18n.t('contact.emailadress')}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <textarea
                        placeholder={i18n.t('contact.emailmessage')}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                    <input className="button" type="submit" value={i18n.t('contact.sendbtn')} />
                </ContactForm>

            </Container>
        </Slide>

    );
};

export default Contact;