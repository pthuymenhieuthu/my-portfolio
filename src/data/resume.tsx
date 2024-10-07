import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Winter Nguyen",
  initials: "Winter",
  url: "https://dillion.io",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://www.google.com/maps/place/hochiminh",
  description:
    "Proactive UI/UX Designer · Passionate about learning and growth.",
  summary:
    "My name is Thuy (Winter). I just graduated in July this year, and [I have dedicated a significant amount of time learning about UI/UX as well as participating in a competition](/#certifications), so I have a good understanding of how the design process works and some knowledge of front-end development/coding. Additionally, with internship experience at major companies like [TikTok, Innisfree, and ELSA Speak](/#work), I am confident that I have a solid grasp of business requirements and can view things from both a business and user perspective to deliver the best product. I look forward to collaborating with you!",
  avatarUrl: "/me.jpeg",
  skills: [
    "UI Design",
    "UX Design",
    "UI/UX",
    "Coding",  
    "Video Editing",
    "Social Media",
    "Web Builder",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" }, tạm bỏ
  ],
  contact: {
    email: "phuongthuy101222@gmail.com",
    tel: "+84 583 546 018",
    social: {
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/thuynguyen175",
        icon: Icons.behance,

        navbar: true,
      },
      Dribble: {
        name: "Dribble",
        url: "https://www.behance.net/thuynguyen175",
        icon: Icons.dribble,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thuy-nguyen-1665ab208/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Threads: {
        name: "Threads",
        url: "https://www.threads.net/@winter.arrt",
        icon: Icons.threads,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto: phuongthuy101222@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Gufoods",
      href: "https://www.gufoods.com",
      badges: [],
      location: "Remote",
      title: "Design Intern",
      logoUrl: "/gufoods.png",
      start: "Jul 2021",
      end: "Feb 2022",
      description:
        "• Developed the Information Architecture (IA), and completed the high-fidelity wireframe design for Rice Cake Recipes.\n • Designed marketing collateral, including brochures, social media posts, and promotional materials.\n • Edited videos and created interactive stories using CapCut.",
    },
    {
      company: "ELSA Speak",
      badges: [],
      href: "https://elsaspeak.com",
      location: "Remote",
      title: "Intern",
      logoUrl: "/elsaspeak.png",
      start: "Nov 2022",
      end: "Aug 2023",
      description:
        "• Planned and created content across social media channels\n • Designed corresponding images and videos.\n • Supported Influencer Marketing campaign.",
    },
    {
      company: "Innisfree",
      href: "https://innisfree.vn/",
      badges: [],
      location: "Ho Chi Minh City",
      title: "Intern",
      logoUrl: "/innisfree.png",
      start: "May 2023",
      end: "Oct 2023",
      description:
        "• Collaborated with the CJ development team to enhance the landing page\n • Set up campaigns and inserted code into the event page to ensure functionality on sale days.\n • Conducted competitor research on other sales pages, providing briefs and visual feedback for both the key visuals and event pages.",
    },
    {
      company: "TikTok Shop",
      href: "",
      badges: [],
      location: "Ho Chi Minh City",
      title: "Intern",
      logoUrl: "/tiktokshop.png",
      start: "Dec 2023",
      end: "Jul 2024",
      description:
        "• Regularly used Figma to design social media posts, enhancing design and layout skills.\n • Understood the user purchasing journey through experience in e-commerce platforms.\n • Conducted competitor research on sales academy flows on Lazada and Shopee, identifying key UX/UI improvements.",
    },
  ],
  education: [
    {
      school: "UEH University",
      href: "https://www.ueh.edu.vn/",
      degree: "Graduated with Honors (Bachelor's Degree)",
      logoUrl: "/ueh.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "TOEIC",
      href: "https://www.ets.org/toeic.html",
      degree: "Score: 920",
      logoUrl: "/TOEIC.png",
      start: "2023",
      end: "2025",
    },
  ],
  certifications: [
    {
      name: "Certificate of Completion - UI Design Course",
      href: "https://colorme.vn/digitalcertificate/136748",
      org: "colorME",
      logoUrl: "/colorme.jpg",
      start: "2024",
      description:
        "8 UI Design classes have helped me learn a lot about how to design screens on Figma, how to prototype, and the basic steps to create a Design System.", 
    },
    {
      name: "Certificate of Achievement",
      href: "https://drive.google.com/file/d/1n_WjUM_JDBbSDktjhxP3E3UXPgbYV1lg/view?usp=sharing",
      org: "Lollypop Design Studio Vietnam",
      logoUrl: "/lollypop.jpg",
      start: "2024",
      description:
        "I completed 24 hours of intensive UI/UX design training with 97 other designers, gaining insights on presenting engaging design challenges and understanding the design process at the agency.", 
    },
    {
      name: "UX Design Certificate",
      href: "https://www.coursera.org/account/accomplishments/records/F9ZGWQTH3RH3",
      org: "Google",
      logoUrl: "/google.png",
      start: "2024",
      description:
        "I spent a month taking 5 core classes of the Google UX Design course, which provided me with foundational knowledge of UX and its processes, helping me understand its role and apply it in practice.", 
    },
  ],
  projects: [
    {
      title: "TalkPiggy",
      href: "https://www.behance.net/gallery/208908063/TalkPiggy-Money-Management-App",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        " A fintech app that addresses both financial management and social connection.",
      technologies: [
        "Product Design",
        "UI Design",
        "UX Research",
        "Design Process",
      ],
      links: [
        {
          type: "Behance",
          href: "https://www.behance.net/gallery/208908063/TalkPiggy-Money-Management-App",
          icon: <Icons.behance className="size-3" />,
        },
      ],
      image: "",
      video:
        "/talkpiggy.gif",
    },
    {
      title: "Innisfree Landing Page Redesign",
      href: "https://dribbble.com/shots/24978397-Innisfree-vn-Redesign-Landing-Page",
      dates: "Sep 2024 - Present",
      active: true,
      description:
        "Leveraging my experience managing the innisfree.vn brand site, I led a redesign project to enhance interaction through prototypes and optimize the user flow.",
      technologies: [
        "Web Design",
        "UI Design",
        "UX Research",
        "Prototype",
      ],
      links: [
        {
          type: "Dribble",
          href: "https://dribbble.com/shots/24978397-Innisfree-vn-Redesign-Landing-Page",
          icon: <Icons.dribble className="size-3" />,
        },
      ],
      image: "",
      video: "/innisfree.gif",
    },
    {
      title: "ZanZan",
      href: "https://www.figma.com/proto/bEJfJb6iB0pXlrrLDIONC1/K14---Team-14?page-id=7004%3A4&node-id=7138-5885&node-type=frame&viewport=545%2C292%2C0.06&t=zJ3CTlFM4bFMSAe1-1&scaling=scale-down-width&content-scaling=fixed",
      dates: "Sep 2024",
      active: true,
      description:
        "A project with Team 14 at Lollypop Designathon 2024, centered around traditional folk games.",
      technologies: [
        "Web Design",
        "UI Design",
        "UX Research",
        "Prototype",
        "Motion Design",
      ],
      links: [
        {
          type: "Behance",
          href: "https://llm.report",
          icon: <Icons.behance className="size-3" />,
        },
      ],
      image: "",
      video: "/zanzan.gif",
    },
  ],
} as const;
