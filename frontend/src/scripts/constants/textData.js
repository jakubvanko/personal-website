const TEXT_SPEKTRUM = `
A full-stack web application for concert venue and ticket ordering. 
Written in MERN stack and includes a RESTful web API, GraphQL endpoint, token login system, 
form validation and a custom content management system.
`;

const TEXT_COMMONCORE = `
Java game plugins downloaded over 6000+ times and used on 100+ servers. 
Includes a custom code library, complete user configurability, support for 3rd party modifications, 
full documentation and tutorials.
`;

const TEXT_GENDER = `
A web application for AI gender recognition of Minecraft player skins.
Written in MERN stack and includes a RESTful web API, GraphQL endpoint, custom dataset, 
multiple machine learning algorithms and 3rd party API integration.
`;

export const TEXT_SECTIONS = {
    portfolio: {
        title: "Portfolio",
        subsections: [{
            title: "Spektrum",
            text: TEXT_SPEKTRUM,
            linkLive: "",
            linkCode: "https://github.com/jakubvanko/spektrum"
        }, {
            title: "CommonCore Plugins",
            text: TEXT_COMMONCORE,
            linkLive: "",
            linkCode: "https://github.com/jakubvanko/minecraft-plugins"
        }, {
            title: "Minecraft Gender Rec.",
            text: TEXT_GENDER,
            linkLive: "",
            linkCode: "https://github.com/jakubvanko/project-minecraft-gender"
        }]
    },
    contact: {
        title: "Contact",
        text: [{
            text: "kubko.vanko@gmail.com",
            link: ""
        }, {
            text: "linkedin.com/in/jakubvanko",
            link: "https://www.linkedin.com/in/jakubvanko/"
        }, {
            text: "github.com/jakubvanko",
            link: "https://github.com/jakubvanko"
        }]
    }
};