var d = new Date();
var year = d.getFullYear();

var actualAge = year - 2002;

const messages = {
    pt: {
        translations: {
            home: {
                iam: 'Eu sou',

                prof1: 'Desenvolvedor Front-End!',
                prof2: 'Desenvolvedor Web',
                prof3: 'UI/UX Designer!',
                prof4: 'Tech Lover!',
            },

            aboutme: {
                title: 'Sobre Mim.',
                text: `Meu nome é Lucas, tenho ${actualAge} anos e sou um entusiasta da tecnologia. Nas horas vagas, costumo estudar novas tecnologias e praticar inglês com minha esposa. Sou um homem muito focado e meu objetivo na vida é se tornar uma pessoa melhor a cada dia.`,
            },

            techs: {
                title: 'Tecnologias.'
            },

            projects: {
                title: 'Projetos.'
            },

            contact: {
                title: 'Contato.',

                emailname: 'Seu nome...',
                emailadress: 'Seu email...',
                emailmessage: 'Sua mensagem...',
                sendbtn: 'Enviar',

                complete: 'Complete todos os campos!',

                sent: 'Enviado com sucesso!'
            },

        }
    }
}

export {messages};