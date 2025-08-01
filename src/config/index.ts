import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Mesut Erdemir — Software Engineering Manager",
  author: "Mesut Erdemir",
  description:
    "I specialize in backend development with PHP and web hosting solutions, with extensive experience in designing, developing, and maintaining modern web applications and scalable software infrastructures.",
  lang: "en",
  siteLogo: "/mesut-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://tr.linkedin.com/in/mesuterdemir" },
    { text: "Github", href: "https://github.com/MesutErdemir" },
    { text: "QRZ", href: "https://www.qrz.com/db/TA2AQW" },
  ],
  socialImage: "/mesut-big.jpg",
  canonicalURL: "https://mesuterdemir.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Mesut Erdemir",
    specialty: "Software Engineering Manager & Senior Linux Engineer",
    summary:
      "I specialize in backend development with PHP and web hosting solutions, with extensive experience in designing, developing, and maintaining modern web applications and scalable software infrastructures.",
    email: "hello@mesuterdemir.com",
  },
  experience: [
    {
      company: "Turhost.com",
      position: "Software Engineering Manager & Linux System Administrator",
      startDate: "Feb 2011",
      endDate: "Current",
      summary: [
        "In general, my primary responsibility is the design, integration, and maintenance of the systems required by turhost.com, as well as ensuring their continuous operation. Additionally, with my extensive experience in Linux distributions, I provide support to the technical team when they encounter challenging issues.",
        "I designed and implemented a cloud server provisioning system utilizing various virtualization platforms, which deepened my expertise in cloud infrastructure and automation.",
        "I took part in the software design, platform migration (emails and websites), and backend development of the TTNet Webim platform. I created an ecosystem including the provisioning system, back office panel and customer panel. This project won the Bronze Stevie® Award on October 10, 2014.",
      ],
    },
  ],
  projects: [
    {
      name: "My Project",
      summary: "My project description",
      linkPreview: "/",
      linkSource: "https://mesuterdemir.com",
      image: "/project.png",
    },
  ],
  about: {
    description: `
      I have been passionate about software development since high school. I started this adventure with Microsoft technologies and continue with free(as a speech) software technologies, especially with PHP.
      Over the years, I have led development teams in delivering scalable web applications and have mentored junior engineers in adopting best coding practices.
      I have successfully managed and deployed large-scale projects, optimizing performance and reliability for thousands of users.
      I am also skilled in automation and DevOps practices, streamlining deployment pipelines and improving system uptime.
      In addition, I have a great interest in electronics and amateur radio communications. With the callsign TA2AQW, I enjoy spending time on amateur frequencies and connecting with other radio operators around the world.
    `,
    image: "/mesut-big.jpg",
  },
};

// #5755ff
