var d = new Date();
var year = d.getFullYear();

var actualAge = year - 2002;

const messages = {
    en: {
        translations: {
            home: {
                iam: 'I Am a',

                prof1: 'Front-End Developer!',
                prof2: 'Web Developer!',
                prof3: 'UI/UX Designer!',
                prof4: 'Tech Lover!',
            },

            aboutme: {
                title: 'About Me.',
                text: `My name is Lucas, I'm ${actualAge} years old and I'm a technology enthusiast. In my spare time, I tend to study new technologies and practice English with my wife. I'm a very focused man and my goal in life is to become a better person every day.`,
            },

            techs: {
                title: 'Technologies.'
            },

            projects: {
                title: 'Projects.'
            },

            contact: {
                title: 'Contact.',

                emailname: 'Your name...',
                emailadress: 'Your email address...',
                emailmessage: 'Your message...',
                sendbtn: 'Send',

                complete: 'Fill in all fields!',

                sent: 'Sent with success!'
            },

        }
    }
}

export {messages};