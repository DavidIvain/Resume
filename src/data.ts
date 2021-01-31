interface Competence {
    category: string;
    icon: string;
    color: string;
    list: [string, boolean][];
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
    languages: string;
    french: string;
    english: string;
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
    common: string;
    coInterest: string;
    guitar: string;
    webDev: string;
    intro: string;
    about: string;
    yo: string;
}

const fr: Lang = {
    expAng: "Travail sur une application pour la gestion de transcripts en Angular 8.",
    expIntra1: "Corrections de bugs sur l’intranet de l’entreprise et ajout de nouvelles fonctionnalités.",
    expIntra2: "Refonte complète de l’application Gestion de Projets de l’intranet. Utilisation de PHP, HTML, CSS et JavaScript.",
    major: "Major de promotion",
    languages: "Langues",
    french: "Français",
    english: "Anglais",
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
    method: "Méthodologie",
    education: "Études",
    internships: "Stages",
    skills: "Compétences",
    licence: "Licence 3 Informatique",
    master: "Master",
    bac: "Baccalauréat Général Scientifique",
    bts: "BTS SIO option SLAM",
    common: "Langages",
    coInterest: "Centres d'intérêt",
    guitar: "Guitare",
    webDev: "Développement Web",
    intro: `<p>
Étudiant en 2ème année de master informatique à l'université de Lille,<br/>
Je suis à la recherche d'un stage de fin d'études en tant que développeur, de préférence, mais non-exclusivement, dans le domaine du web ou mobile.
</p>
<p>
Ma formation à l'université de Lille m'a permis d'obtenir une certaine expérience avec Java, C et l'outil GitLab, ainsi qu'avec Flutter grâce à mes projets de cette année pour l'Inria.
Mes projets personnels et mes stages m'ont également permis de me familiariser avec JavaScript, TypeScript et leurs nombreux frameworks.
</p>
<p>
Curieux, j'aime expérimenter avec de nouveaux langages et outils.
</p>`,
    about: "À Propos",
    yo: "ans"
};

const en: Lang = {
    expAng: "Worked on an Angular 8 application for transcript manipulation.",
    expIntra1: "Fixed bugs on the company's intranet and added new features.",
    expIntra2: "Complete rework of the intranet's project management application. Used PHP, HTML, CSS and JavaScript.",
    major: "First of my class",
    languages: "Languages",
    french: "French",
    english: "English",
    plusUrbilog: {
        title: "Acquired skills :",
        text: "<ul><li>Work in a professional setting</li>" +
            "<li>Collaboration on projects</li>" +
            "<li>Accessibility guidelines and tools</li>" +
            "<li>Web technologies (HTML, CSS, PHP, JavaScript, Node.js and Angular)</li></ul>"
    },
    today: "Today",
    trainee: "Software Developer Intern",
    univOf: "University of",
    week: "week",
    method: "Methodology",
    education: "Education",
    internships: "Internships",
    skills: "Skills",
    licence: "Bachelor's degree in CS",
    master: "Master's degree",
    bac: "High school Diploma",
    bts: "Two-year Technical Degree (BTS SIO option SLAM)",
    common: "Common",
    coInterest: "Centers of interest",
    guitar: "Guitar",
    webDev: "Web Development",
    intro: `<p>
Master's degree student at the University of Lille,<br/>
I'm looking for a internship as a developer, preferably but not exclusively in Web or mobile development.
</p>
<p>
My education at the University of Lille gave me some experience with Java, C and GitLab, as well as Flutter thanks to the projects I took part in this year for Inria.
Also, my personal projects and previous internships made me really familiar with JavaScript, Typescript and their numerous frameworks.
</p>
<p>
Being inquiring, I love to play and experiment with new languages and tools.
</p>`,
    about: "About",
    yo: "years old"
}

export enum LangEnum {
    FR = "fr",
    EN = "en"
}

const languages: { [key: string]: Lang } = {
    "fr": fr,
    "en": en
};

export class Data {
    private cl: LangEnum;

    constructor(language = LangEnum.FR) {
        this.cl = language;
    }

    get languages(): string[] {
        return Object.keys(LangEnum);
    }
    get language(): LangEnum {
        return this.cl;
    }
    set language(language: LangEnum) {
        if (!Object.keys(languages).includes(language)) throw Error("Invalid language");
        this.cl = language;
    }

    get competences(): { title: string; icon: string; list: Competence[] } {
        return {
            title: languages[this.cl].skills,
            icon: "check-circle",
            list: [
                {
                    category: "Web",
                    icon: "compass",
                    color: "deepskyblue",
                    list: [
                        ["React", true],
                        ["Vue", true],
                        ["Spring", false],
                        ["TypeScript", false],
                        ["SASS", false],
                    ]
                },
                {
                    category: "Mobile",
                    icon: "smartphone",
                    color: "mediumturquoise",
                    list: [
                        ["Flutter", true],
                        ["React Native", true],
                    ]
                },
                {
                    category: languages[this.cl].common,
                    icon: "coffee",
                    color: "rebeccapurple",
                    list: [
                        ["Java", true],
                        ["Python", true],
                        ["C", true],
                        ["Kotlin", false],
                        ["C++", false]
                    ]
                },
                {
                    category: languages[this.cl].method,
                    icon: "git-branch",
                    color: "orangered",
                    list: [
                        ["Git", true],
                        ["Agile / Scrum", false],
                        ["Debugging", false]
                    ],
                },
                {
                    category: languages[this.cl].languages,
                    icon: "message-circle",
                    color: "limegreen",
                    list: [
                        [languages[this.cl].french, false],
                        [languages[this.cl].english, false]
                    ]
                }
            ]
        }
    }

    get stages(): { title: string; icon: string; list: Stage[] } {
        return {
            title: languages[this.cl].internships,
            icon: "briefcase",
            list: [
                {
                    title: `${languages[this.cl].trainee} , Urbilog ; Villeneuve-d’Ascq`,
                    experiences: [
                        {
                            time: `12 ${languages[this.cl].week}s, 2019`,
                            description: languages[this.cl].expAng
                        },
                        {
                            time: `8 ${languages[this.cl].week}s, 2018`,
                            description: languages[this.cl].expIntra2
                        },
                        {
                            time: `5 ${languages[this.cl].week}s, 2017`,
                            description: languages[this.cl].expIntra1
                        }
                    ],
                    plus: [
                        languages[this.cl].plusUrbilog
                    ]
                }
            ]
        }
    }

    get formations(): { title: string; icon: string; list: Formation[] } {
        return {
            title: languages[this.cl].education,
            icon: "book",
            list: [
                {
                    title: `${languages[this.cl].master}: IAGL (Infrastructures Applicatives et Génie Logiciel)`,
                    school: `${languages[this.cl].univOf} Lille, Villeneuve-d’Ascq`,
                    time: `2019 - ${languages[this.cl].today}`
                },
                {
                    title: languages[this.cl].licence,
                    school: `${languages[this.cl].univOf} Lille, Villeneuve-d’Ascq`,
                    time: "2018 - 2019"
                },
                {
                    title: languages[this.cl].bts,
                    school: "Lycée privé Saint Rémi, Roubaix",
                    mention: languages[this.cl].major,
                    time: "2016 - 2018"
                },
            ]
        }
    }

    get header(): { name: string; description: string } {
        return {
            name: "David Ivain",
            description: `M2 IAGL, ${languages[this.cl].univOf} Lille`
        }
    }

    get links(): Link[] {
        return [
            {
                label: "Age",
                text: "24 " + languages[this.cl].yo,
                href: "",
                icon: "gift"
            },
            {
                label: "Place",
                text: "59000 Lille, France",
                href: "",
                icon: "map-pin"
            },
            {
                label: "Mail",
                text: "d.ivain@outlook.fr",
                href: "mailto:d.ivain@outlook.fr",
                icon: "mail"
            },
            {
                label: "Phone",
                text: "+33 6 24 54 58 84",
                href: "tel:+33624545884",
                icon: "phone"
            },
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
            },
        ]
    }

    get coInterest(): { title: string; list: string[] } {
        return {
            title: languages[this.cl].coInterest,
            list: [
                languages[this.cl].guitar,
                "Animes",
                languages[this.cl].webDev
            ]
        }
    }

    get intro(): string {
        return languages[this.cl].intro;
    }

    getLocalized(key: string): string {
        try {
            return languages[this.cl][key];
        } catch (e) {
            console.error("Can't be localized");
            console.error(e);
        }
    }
}