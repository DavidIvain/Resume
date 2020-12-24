interface Competence {
    category: string;
    icon: string;
    color: string;
    list: string[];
}

interface Experience {
    time: string;
    description: string;
}

interface Plus {
    title: string;
    text: string;
}

interface Stage {
    title: string;
    experiences: Experience[];
    plus: Plus[];
}

interface Formation {
    title: string;
    school: string;
    time: string;
    mention?: string;
}

interface Link {
    label: string;
    text: string;
    href: string;
    icon: string;
}

interface Lang {
    languages: Competence;
    trainee: string;
    week: string;
    expAng: string;
    expIntra2: string;
    expIntra1: string;
    plusUrbilog: {
        title: string;
        text: string;
    };
    univOf: string;
    today: string;
    major: string;
    method: string;
    education: string;
    internships: string;
    skills: string;
    licence: string;
    master: string;
    bac: string;
    bts: string;
}

let cl = "fr";

const fr: Lang = {
    expAng: "Travail sur une application pour la gestion de transcripts en Angular 8.",
    expIntra1: "Corrections de bugs sur l’intranet de l’entreprise et ajout de nouvelles fonctionnalités.",
    expIntra2: "Refonte complète de l’application Gestion de Projets de l’intranet. Utilisation de PHP, HTML, CSS et JavaScript.",
    major: "Premier de ma promotion",
    languages: {
        category: "Langues",
        icon: "message-circle",
        color: "limegreen",
        list: [
            "Français",
            "Anglais courrant"
        ]
    },
    plusUrbilog: {
        title: "Compétences Acquises :",
        text: "<ul><li>Fonctionnement en entreprise</li>" +
            "<li>Travail collaboratif</li>" +
            "<li>Normes et outils d’accessibilité</li>" +
            "<li>Pratique des technologies du web (HTML, CSS, PHP, JavaScript, Node.js et Angular)</li></ul>"
    },
    today: "Aujourd'hui",
    trainee: "Développeur Stagiaire",
    univOf: "Université de",
    week: "semaine",
    method: "Methodologie",
    education: "Études",
    internships: "Stages",
    skills: "Compétences",
    licence: "Licence 3 Informatique",
    master: "Master",
    bac: "Baccalauréat Général Scientifique",
    bts: "BTS SIO option SLAM"
};

const en: Lang = {
    expAng: "Worked on an Angular 8 application for transcript manipulation.",
    expIntra1: "Fixed bugs on the company's intranet and added new features.",
    expIntra2: "Complete rework of the intranet's project management application. Used PHP, HTML, CSS and JavaScript.",
    major: "First of my class",
    languages: {
        category: "Languages",
        icon: "message-circle",
        color: "limegreen",
        list: [
            "French",
            "Fluent English"
        ]
    },
    plusUrbilog: {
        title: "Acquired skills :",
        text: "<ul><li>Work in a professional setting</li>" +
            "<li>Collaboration on projects</li>" +
            "<li>Accessibility guidelines and tools</li>" +
            "<li>Web technologies (HTML, CSS, PHP, JavaScript, Node.js and Angular)</li></ul>"
    },
    today: "Today",
    trainee: "Software Developper Intern",
    univOf: "University of",
    week: "week",
    method: "Methodology",
    education: "Education",
    internships: "Internships",
    skills: "Skills",
    licence: "Bachelor's degree in CS",
    master: "Master's degree",
    bac: "High school Diploma",
    bts: "Two-year Technical Degree (BTS SIO option SLAM)"
}

const languages: { [key: string]: Lang } = {
    "fr": fr,
    "en": en
};

export function getLanguages(): string[] {
    return Object.keys(languages);
}

export function setLanguage(lang: string): boolean {
    if (!Object.keys(languages).includes(lang)) return false;
    cl = lang;
    return true;
}

export const competences: { title: string; icon: string; list: Competence[] } = {
    title: languages[cl].skills,
    icon: "check-circle",
    list: [
        {
            category: "Web",
            icon: "compass",
            color: "deepskyblue",
            list: [
                "React",
                "Vue.js",
                "Angular",
                "TypeScript",
                "SCSS",
            ]
        },
        {
            category: "Mobile",
            icon: "smartphone",
            color: "mediumturquoise",
            list: [
                "Flutter",
                "React Native"
            ]
        },
        {
            category: "HL",
            icon: "coffee",
            color: "rebeccapurple",
            list: [
                "Java",
                "C#",
                "Kotlin",
                "Python"
            ]
        },
        {
            category: "LL",
            icon: "cpu",
            color: "darkslategrey",
            list: [
                "C",
                "C++"
            ]
        },
        {
            category: languages[cl].method,
            icon: "git-branch",
            color: "orangered",
            list: [
                "Git",
                "Agile / Scrum"
            ]
        },
        languages[cl].languages
    ]
}

export const stages: { title: string; icon: string; list: Stage[] } = {
    title: languages[cl].internships,
    icon: "briefcase",
    list: [
        {
            title: `${languages[cl].trainee} , Urbilog ; Villeneuve-d’Ascq`,
            experiences: [
                {
                    time: `12 ${languages[cl].week}s, 2019`,
                    description: languages[cl].expAng
                },
                {
                    time: `8 ${languages[cl].week}s, 2018`,
                    description: languages[cl].expIntra2
                },
                {
                    time: `5 ${languages[cl].week}s, 2017`,
                    description: languages[cl].expIntra1
                }
            ],
            plus: [
                languages[cl].plusUrbilog
            ]
        }
    ]
}

export const formations: { title: string; icon: string; list: Formation[] } = {
    title: languages[cl].education,
    icon: "book",
    list: [
        {
            title: `${languages[cl].master}: IAGL (Infrastructures Appicatives et Génie Logiciel)`,
            school: `${languages[cl].univOf} Lille, Villeneuve-d’Ascq`,
            time: `2019 - ${languages[cl].today}`
        },
        {
            title: languages[cl].licence,
            school: `${languages[cl].univOf} Lille, Villeneuve-d’Ascq`,
            time: "2018 - 2019"
        }
        ,
        {
            title: languages[cl].bts,
            school: "Lycée privé Saint Rémi, Roubaix",
            mention: languages[cl].major,
            time: "2016 - 2018"
        }
        ,
        {
            title: languages[cl].bac,
            school: "Lycée privé Saint Rémi, Roubaix",
            mention: "Mention AB",
            time: "2011 - 2014"
        }
    ]
}

export const header = {
    name: "David Ivain",
    description: `M2 IAGL, ${languages[cl].univOf} Lille`
}

export const links: Link[] = [
    /*{
        label: "Site",
        text: "www.monsite.com",
        href: "http://www.monsite.com",
        icon: "link"
    },*/
    {
        label: "GitHub",
        text: "github.com/DavidIvain",
        href: "https://github.com/DavidIvain",
        icon: "github"
    },
    {
        label: "LinkedIn",
        text: "linkedin.com/in/david-ivain",
        href: "https://www.linkedin.com/in/david-ivain",
        icon: "linkedin"
    }
]