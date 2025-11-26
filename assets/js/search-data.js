// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "members of the group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "a collection our most exciting projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Dr. Coe&#39;s courses",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-notes",
          title: "notes",
          description: "helpful guides",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notes/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-after-many-years-of-wonderful-work-at-sandia-national-labs-i-will-be-moving-to-virginia-tech-in-january-2026",
          title: 'After many years of wonderful work at Sandia National Labs, I will be...',
          description: "",
          section: "News",},{id: "notes-reproducible-papers",
          title: 'Reproducible papers',
          description: "making your work more useful for others (and the future you)",
          section: "Notes",handler: () => {
              window.location.href = "/notes/1_note.html";
            },},{id: "notes-latex-best-practices",
          title: 'LaTeX best-practices',
          description: "write and collaborate more cleanly",
          section: "Notes",handler: () => {
              window.location.href = "/notes/3_note.html";
            },},{id: "projects-pioneer-wec",
          title: 'Pioneer WEC',
          description: "wave energy for ocean observing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-wec-spar",
          title: 'WEC-spar',
          description: "wave energy on an ocean observing spar buoy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-extreme-conditions-modeling",
          title: 'Extreme conditions modeling',
          description: "designing for the 100-year wave",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-foswec",
          title: 'FOSWEC',
          description: "floating oscillating surge wave energy converter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-siweed",
          title: 'SIWEED',
          description: "Sandia integrated wave energy educational display",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-wec-co-design",
          title: 'WEC co-design',
          description: "holistic design of wave energy converters",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-wavebot",
          title: 'WaveBot',
          description: "fundamental WEC dynamics and controls",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-swept-lab",
          title: 'SWEPT Lab',
          description: "Sandia wave energy power take-off lab",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rgcoe", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ryan-coe-3398842b", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0738-3772", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Ryan-Coe-2/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=i6ahrYgAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=55532590700", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];