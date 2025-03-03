import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  CertificationsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Akanksha',
  title: "Hi all, I'm Akanksha",
  description:
    "I am an MS Student at NYIT, with a strong passion for technology and problem-solving. As a self-taught programmer, I am continually exploring new technologies and innovative solutions to build impactful projects. I thrive on tackling challenges and am always eager to expand my knowledge and expertise.",
  resumeLink:
    'https://github.com/',
};

export const openSource = {
  githubUserName: 'Akanksha',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https:',
  linkedin: 'https://www.linkedin.com/in/',
  github: 'https://github.com/',
  kaggle: "https://www.kaggle.com/",
  linktr: "https://linktr.ee/"
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'ENERGETIC CODER EAGER TO PUSH BOUNDARIES IN MODERN TECHNOLOGY',
  data: [
    {
      title: 'Web Development and Automation Testing',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji(
          '⚡ Building Response Web Application using Python, Django and Flask'
        ),
        emoji('⚡ Building Automation testing Frameworks'),
        emoji('⚡ Building Machine Learning Models to solve real world problems'),
      ],
      softwareSkills: [
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },
        {
            skillName: 'Flask',
            fontAwesomeClassName: 'fa-brands:python',
        },
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Python Development', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Automation Testing',
    progressPercentage: '80',
  },
  {
    Stack: 'AWS',
    progressPercentage: '80',
  },
  {
    Stack: 'DevOps',
    progressPercentage: '80',
  },
  {
    Stack: 'Web Scraping',
    progressPercentage: '80',
  },
  {
    Stack: 'Data Engineering',
    progressPercentage: '80',
  },
  {
    Stack: 'Machine Learning',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'KL University',
    subHeader: 'B.TECH in Computer science and Engineering',
    duration: 'July 2020 - May 2024',
  },
  {
    schoolName: 'Sri Chaitanya College of Engieering',
    subHeader: 'Intermediate',
    duration: 'July 2018 - June 2020',
  },
  {
    schoolName: 'Oxford Public School',
    subHeader: 'SSC',
    duration: 'Aug 2006 - Apr 2018',
  },
];
export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer',
    company: 'company name',
    client: 'client',
    companyLogo: '/img/icons/common/google.svg',
    date: 'May 2019 - May 2020',
    desc: 'Worked with web applications, automation, and cloud integration.',
    descBullets: [
      'Optimized code, achieving a 40% reduction in load times, significantly enhancing user experience.',
      'Collaborated with cross-functional teams, driving product innovation, and improving team synergy.',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Explain your project',
    desc: 'explain your project',
    github: 'https://www.google.com/',
  },

];


export const certifications: CertificationsType[] = [
  {
    certificate: 'AWS Cloud Certified Practitioner',
    issuedby: 'AWS',
    github: 'https://www.credly.com/badges',
  },
    {
    certificate: 'AWS Cloud solution architect',
    issuedby: 'AWS',
    github: 'https://www.credly.com/badges',
  }
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Akanksha',
  description:
    'A passionate AI/ML Developer',
  author: 'Akanksha',
  url: '',
  keywords: [
    'Akanksha',
    'Portfolio',
    'Akanksha',
    'Akanksha Portfolio',
  ],
};
