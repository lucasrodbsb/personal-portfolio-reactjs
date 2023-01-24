import React from 'react';
import { LanguageSelect } from '../../assets/styled/styled';

import flagBrasil from '../../assets/Flags/brasil.png';
import flagUSA from '../../assets/Flags/usa.png';

const I18N_STORAGE_KEY = 'i18nextLng'
const lang = localStorage.getItem(I18N_STORAGE_KEY);

const LangSelect = () => {
    
    const portugueseLang = () => {
        if(lang === 'en-US'){
            localStorage.setItem(I18N_STORAGE_KEY, 'pt-BR');
            window.location = window.location;
        } else {
            console.log('Você está vendo a versão em Português.')
        }
    }

    const englishLang = () => {
        if(lang === 'pt-BR'){
            localStorage.setItem(I18N_STORAGE_KEY, 'en-US');
            window.location = window.location;
        } else {
            console.log('You are viewing the English version.')
        }
    }


    return (
        <>
            <LanguageSelect >
                <li><img alt='Ver em Português' src={flagBrasil} onClick={portugueseLang} /></li>
                <li><img alt='See in English' src={flagUSA} onClick={englishLang}  /></li>
            </LanguageSelect>
        </>
    )
}

export default LangSelect;