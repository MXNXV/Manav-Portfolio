/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manav's Portfolio",
  description:
    "Alpha Microsoft Student Learn Ambassador, Technical Core at Google DSC, A curios learner with an interest in Machine Learning and Data Science. The world isn't perfect. But it's there for us, doing the best it can....that's what makes it so damn beautiful.",
  og: {
    title: "Manav Mandal's Portfolio",
    type: "website",
      url: "https://mxnxv.github.io",
  },
};

//Home Page
const greeting = {
  title: "Manav Mandal",
    logo_name: "ManavMandal",
  nickname: "Friendly Neighbourhood Engineer",
  subTitle:
    "The world isn't perfect. But it's there for us, doing the best it can....that's what makes it so damn beautiful.",
  resumeLink:
    "https://drive.google.com/file/d/113LuokV9aACDBphk5ifxcTXqWFUXOWIc/view?usp=sharing",
    portfolio_repository: "https://github.com/MXNXV/Manav-Portfolio.git",
  githubProfile: "https://github.com/MXNXV",
};

const socialMediaLinks = [
  /* Your Social Media Link */
   //github: "https://github.com/MXNXV",
   //linkedin: "https://www.linkedin.com/in/manav-mandal-5b1496196/",
   //gmail: "manavmandalpune.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
   //twitter: "https://twitter.com/_ManavMandal_",
   //instagram: "https://www.instagram.com/__mandal_orian__/",

  {
    name: "Github",
      link: "https://github.com/MXNXV",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
      link: "https://www.linkedin.com/in/manav-mandal-5b1496196/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
      link: "https://www.youtube.com/channel/UCz-4_RtbtWdsK_usKx10LTg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:manavmandalpune@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
      link: "https://twitter.com/_ManavMandal_",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },

  {
    name: "Instagram",
      link: "https://www.instagram.com/__mandal_orian__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Writing begginer friendly blogs and tutorials on how to get started with ML ",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },

       
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Creating application backend in Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        
       
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Azure Cloud Platform",
        "⚡ Using Azure cognitive services to enhance user experience and better accuracy",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        
      ],
      softwareSkills: [
        
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        
        
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
          profileLink: "https://www.hackerrank.com/manavmandalpune?hr_r=1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
        profileLink: "https://www.codechef.com/users/manav_mandal",
    },
   
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
        profileLink: "https://www.hackerearth.com/@manavmandalpune",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
        profileLink: "https://www.kaggle.com/manavmandal",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Modern Education Societys College of Engineering",
      subtitle: "B.E. in Computer Engineering",
          logo_path: "modernlogo1.png",
      alt_name: "MESCOE",
      duration: "1932 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science and Machine Learning.",
        "⚡ I am selected in Microsoft Learn Student Ambassador Program. I am also the Technical Core in Google DSC, Ranked 8th in a Hacakathon conducted by IIT Dhanbad.",
      ],
          website_link: "http://mescoepune.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/MPXLXEQU4AYY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/7727EWH3APRZ",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Profile",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/045b6b75-5e50-4e75-b038-fbc712e95d3b",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
        title: "Alpha Microsoft Learn Student Ambassadors",
      subtitle: "- Microsoft",
      logo_path: "LevelAlpha.png",
      certificate_link:
        "https://studentambassadors.microsoft.com/certificate/4d19850c-043d-4c48-a0b5-0f95565b2e4b",
      alt_name: "MLSA",
      color_code: "#1F70C199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have completed my internship at a data annotations company. I love giving back to the community and growing toghether with everyone.",
  header_image_path: "experience.svg",
  sections: [
    
    {
      title: "Internships",
      experiences: [
        
        {
          title: "Data Science Intern",
          company: "iMerit Technology",
          company_url:
            "https://imerit.net/",
          logo_path: "imeritlogo.png",
          duration: "Oct 2021 - Dec 2021",
          location: "Work From Home",
          description:"This is a Data Annotations company. During this Internship I was involved in working with Dialogflow such as on creating agents in Dialogflow,Creating intents, entities and adding pre built agents.Implemented the voice bot in a node js application, Added speech to text for user input using WebRTC and text to speech for audio output. Worked on Data Studio and Power BI, creating reports and gateways, embedding reports and scheduling them for refresh at regular intervals.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        
        {
          title: "Microsoft Learn Student Ambassador",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Dec 2021 - Present",
          location: "Pune, Maharashtra",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Microsoft technologies such as Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Google Developer Students Club Core Member",
          company: "GDSC MESCOE",
          company_url:
            "https://www.linkedin.com/company/gdscmescoe/mycompany/",
          logo_path: "dsc_logo.png",
          duration: "Aug 2021 - Present",
            location: "Pune, Maharashtra",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Google CLoud, Kotlin, Web Development, Machine Learning, etc.",
          color: "#0C9D58",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
    title: "Publications",
    description:
        "Coming soon.....",
    avatar_image_path: "projects_image.svg",
};




// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am here to learn and grow so lets connect. I can help you with ML, AI, and Azure Cloud.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
      link: "https://manavmandal.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Vadgaonsheri, Pune, Maharashtra 411014",
    avatar_image_path: "address_image.svg",
      location_map_link: "https://goo.gl/maps/zrEwAu3FzugKv6U57",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9588412823",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
    projectsHeader,
    publicationsHeader,
  contactPageData,
};
