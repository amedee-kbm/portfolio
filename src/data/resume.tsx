import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

type Skill = {
  name: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

type Work = {
  company: string;
  href: string;
  badges: readonly string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
};

export const DATA = {
  name: "Amedee KWISANGA B.M.",
  initials: "AK",
  url: "https://amedeyo.com",
  location: "Kigali, Rwanda",
  locationLink: "https://www.google.com/maps/place/Kigali",
  description:
    "Full-stack software engineer building reliable web applications and distributed systems.",
  summary:
    "I hold an [MSc in Computer Science](/#education) from the University of Lodz, and before that I studied Economics and International Business Management. I build, test and deploy full-stack applications and fault-tolerant distributed systems, mostly with Python, Django, TypeScript and Next.js. My master's thesis on a scalable, fault-tolerant task scheduler became [Endure](https://github.com/amedee-kbm/endure), an open-source project. Having studied both business and computer science, I like building software that solves a real business problem. I speak English, French and Kinyarwanda. Away from the keyboard, I enjoy travelling, reading and basketball.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "Django" },
    { name: "REST APIs" },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Git / GitHub" },
    { name: "CI/CD" },
    { name: "Automated testing" },
    { name: "Distributed systems" },
    { name: "Machine learning" },
  ] as Skill[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "akwisame@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amedee-kbm",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:akwisame@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [] as Work[],
  education: [
    {
      school: "University of Lodz",
      href: "https://www.uni.lodz.pl",
      degree: "MSc Informatics (Computer Science)",
      logoUrl: "/uni-lodz.jpg",
      start: "2024",
      end: "2026",
    },
    {
      school: "Vincent Pol University",
      href: "https://www.akademia-pol.edu.pl",
      degree: "BA Economics – International Business Management",
      logoUrl: "/vincent-pol.jpg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Petit Séminaire de Rwesero",
      href: "https://www.google.com/maps/search/Petit+Seminaire+de+Rwesero",
      degree: "Rwanda Advanced Level Certificate – Mathematics, Chemistry, Biology",
      logoUrl: "",
      start: "2012",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Btq.",
      href: "https://btq-frontend-nextjs.vercel.app/",
      dates: "2026 - Present",
      active: true,
      description:
        "A mobile-first online storefront for a Kigali clothing boutique, in active development. The Django API handles email-based accounts with JWT authentication. Its catalogue model covers nested categories, tags, collections, favourites and size/colour variants, with database constraints enforcing rules such as sale price below list price. The Next.js frontend talks to the API through server-side route handlers that keep tokens in httpOnly cookies. Product images go to Cloudflare R2, and the API is set up to deploy on Render with Neon Postgres.",
      technologies: [
        "Django 6",
        "django-ninja-extra",
        "JWT",
        "PostgreSQL",
        "Cloudflare R2",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Vercel",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://btq-frontend-nextjs.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Frontend",
          href: "https://github.com/amedee-kbm/btq-frontend-nextjs",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/amedee-kbm/btq-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/btq.webp",
      video: "",
    },
    {
      title: "Endure",
      href: "https://github.com/amedee-kbm/endure",
      dates: "",
      active: true,
      description:
        "A distributed job scheduler with crash recovery and a pipeline framework that runs on PostgreSQL alone, with no message broker. Workers claim jobs with `SELECT … FOR UPDATE SKIP LOCKED`. A lease row elects one active scheduler, and a standby takes over when the lease expires. Jobs resume from their last checkpoint after a crash, and failed jobs retry with backoff before moving to a dead-letter state. Every state change is a conditional write, so a worker wrongly marked as dead can't corrupt results. Tested with 20 deterministic fault-injection tests, live leader- and worker-kill tests, and throughput sweeps. Built for my master's thesis and released under the MIT licence.",
      technologies: ["Python", "Django Ninja", "PostgreSQL", "Docker Compose"],
      links: [
        {
          type: "Source",
          href: "https://github.com/amedee-kbm/endure",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/endure.webp",
      video: "",
    },
    {
      title: "Ruminant",
      href: "https://ruminant.onrender.com",
      dates: "",
      active: true,
      description:
        "A reading companion that turns each book into a series of questions and notes. You add a book by typing its chapters or importing an EPUB. Before reading, you write what you want from the book, then add notes chapter by chapter and finish with what you'll keep. Writing autosaves with retry, sign-in uses magic links, and everything exports as Markdown.",
      technologies: ["React", "Vite", "Chakra UI", "Supabase", "PostgreSQL", "epub.js"],
      links: [
        {
          type: "Website",
          href: "https://ruminant.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amedee-kbm/Ruminant",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ruminant.gif",
      video: "",
    },
    {
      title: "notesT",
      href: "https://github.com/amedee-kbm/notesT",
      dates: "",
      active: true,
      description:
        "A terminal note-taking tool that stores notes as plain Markdown files with YAML front matter. Its full-screen Textual interface has a live Markdown preview, search-as-you-type filtering and inline add/edit/delete, plus scriptable `cards` subcommands. It installs as a CLI tool with uv, and the storage location is set with an environment variable.",
      technologies: ["Python", "Textual", "uv"],
      links: [
        {
          type: "Source",
          href: "https://github.com/amedee-kbm/notesT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/notest.gif",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Master's Thesis",
      dates: "2026",
      location: "University of Lodz",
      description:
        "“Designing and Evaluating a Scalable and Fault-Tolerant Task Scheduler for Automated Report Generation”. This research is the basis of Endure, which I released as an MIT-licensed open-source scheduler.",
      image: "",
      links: [
        {
          title: "Endure",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/amedee-kbm/endure",
        },
      ],
    },
    {
      title: "Rector Scholarship",
      dates: "",
      location: "University of Lodz",
      description:
        "Awarded the Rector Scholarship for the university's best students.",
      image: "",
      links: [],
    },
    {
      title: "11th International Standards Olympiad",
      dates: "2016",
      location: "Anseong, South Korea",
      description:
        "Represented Rwanda at the olympiad, held by the Korean Agency for Technology and Standards, and won the Bronze Prize.",
      image: "",
      win: "Bronze Prize",
      links: [],
    },
  ],
} as const;
