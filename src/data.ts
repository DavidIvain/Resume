interface Competence {
    category: string;
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
}

interface Link {
    label: string;
    text: string;
    href: string;
    icon: string;
}

export const competences: Competence[] = [
    {
        category: "Web",
        list: [
            "React",
            "Vue.js (ce CV)",
            "Angular",
            "TypeScript",
            "SCSS",
        ]
    },
    {
        category: "Mobile",
        list: [
            "Flutter",
            "React Native"
        ]
    },
    {
        category: "HL",
        list: [
            "Java",
            "C#",
            "Kotlin",
            "Python"
        ]
    },
    {
        category: "LL",
        list: [
            "C",
            "C++"
        ]
    },
    {
        category: "Methode",
        list: [
            "Git",
            "Agile / Scrum"
        ]
    },
    {
        category: "Langues",
        list: [
            "Anglais courant"
        ]
    }
]

export const stages: Stage[] = [
    {
        title: "Développeur Stagiaire, Urbilog ; Villeneuve-d’Ascq",
        experiences: [
            {
                time: "12 semaines, 2019",
                description: "Travail sur applications pour la gestion de transcripts en Angular 8."
            },
            {
                time: "8 semaines, 2018",
                description: "Refonte complète de l’application Gestion de Projets de l’intranet. Utilisation de PHP, HTML, CSS, JavaScript."
            },
            {
                time: "5 semaines, 2017",
                description: "Corrections de bugs sur l’intranet de l’entreprise et ajout de nouvelles fonctionnalités."
            }
        ],
        plus: [
            {
                title: "Compétences Acquises :",
                text: "Travail en équipe, normes et outils d’accessibilité, connaissances en développement web (HTML, CSS, PHP, JavaScript)."
            }
        ]
    }
]

export const formations: Formation[] = [
    {
        title: "Master IAGL (Infrastructures Appicatives et Génie Logiciel)",
        school: "Université de Lille, Villeneuve-d’Ascq",
        time: "2019 - Aujourd’hui"
    },
    {
        title: "Licence 3 Informatique",
        school: "Université de Lille, Villeneuve-d’Ascq",
        time: "2018 - 2019"
    },
    {
        title: "BTS SIO option SLAM",
        school: "Lycée privé Saint Rémi, Roubaix",
        time: "2016 - 2018"
    },
    {
        title: "Baccalauréat Général Scientifique",
        school: "Lycée privé Saint Rémi, Roubaix",
        time: "2011 - 2014"
    }
]

export const header = {
    name: "David Ivain",
    description: "M2 IAGL, Université de Lille"
}

export const links: Link[] = [
    /*{
        label: "Site",
        text: "www.monsite.com",
        href: "http://www.monsite.com",
        icon: "link"
    },*/
    {
        label: "Sources",
        text: "https://github.com/DavidIvain/Resume",
        href: "https://github.com/DavidIvain/Resume",
        icon: "github"
    }
]