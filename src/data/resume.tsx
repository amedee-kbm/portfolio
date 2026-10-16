import { Icons } from "@/components/icons";
import { FlaskConical, HomeIcon, Network, NotebookIcon, Webhook } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Django } from "@/components/ui/svgs/django";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Git } from "@/components/ui/svgs/git";
import { Shopify } from "@/components/ui/svgs/shopify";

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
    "Full-stack software engineer in Kigali. Open to full-time roles and internships.",
  summary:
    "I have an [MSc in Computer Science](/#education) from the University of Lodz in Poland (2026), after a BA in Economics. I work mostly with Python, Django, TypeScript and Next.js. My master's thesis became [Endure](https://github.com/amedee-kbm/endure), an open-source job scheduler that recovers from crashes without losing work. Before software, I spent years in retail and e-commerce, including running my own online store. Now I'm looking for opportunities to keep growing as a developer and to put those skills to work on problems real users face. I speak English, French and Kinyarwanda. Outside work, I mostly read.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "Django", icon: Django },
    { name: "REST APIs", icon: Webhook },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS", icon: Tailwindcss },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Git / GitHub", icon: Git },
    { name: "Automated testing", icon: FlaskConical },
    { name: "Distributed systems", icon: Network },
    { name: "Shopify", icon: Shopify },
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

  work: [
    {
      company: "Btq.",
      href: "https://btq-frontend-nextjs.vercel.app/",
      badges: [],
      location: "Kigali · Remote",
      title: "Freelance Full-Stack Developer",
      logoUrl: "/btq.svg",
      start: "Jul 2026",
      description:
        "Building the online store for Btq., a clothing boutique in Kigali. Now live and in testing with the client: product catalogue, customer accounts and image hosting. Built with Django and Next.js (see Projects).",
    },
    {
      company: "Zalando",
      href: "https://www.zalando.com",
      badges: [],
      location: "Poznań, Poland",
      title: "Fulfilment Associate",
      logoUrl: "/zalando.svg",
      start: "2022",
      end: "2024",
      description:
        "Processed customer orders and returns in Zalando's fulfilment systems in Poznań, Poland.",
    },
    {
      company: "Xeclat",
      href: "",
      badges: [],
      location: "Poland · Online",
      title: "Founder",
      logoUrl: "/xeclat.svg",
      start: "2020",
      end: "2022",
      description:
        "Ran a small Shopify store from Poland, selling bags to customers in the US, UK, Canada, Australia and New Zealand. Handled the website, product listings, orders, customer service and international shipping.",
    },
    {
      company: "Family retail business",
      href: "",
      badges: [],
      location: "Rwanda",
      title: "Sales",
      logoUrl: "/store.svg",
      start: "2017",
      end: "2020",
      description: "Served customers day to day.",
    },
  ] as Work[],
  education: [
    {
      school: "University of Lodz, Poland",
      href: "https://www.uni.lodz.pl",
      degree: "MSc Informatics (Computer Science) · GPA 4.7/5",
      logoUrl: "/uni-lodz.jpg",
      start: "2024",
      end: "2026",
    },
    {
      school: "Vincent Pol University, Lublin, Poland",
      href: "https://www.akademia-pol.edu.pl",
      degree: "BA Economics – International Business Management · GPA 4.4/5",
      logoUrl: "/vincent-pol.jpg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Petit Séminaire de Rwesero",
      href: "https://www.google.com/maps/search/Petit+Seminaire+de+Rwesero",
      degree: "Rwanda Advanced Level Certificate – Mathematics, Chemistry, Biology",
      logoUrl: "/rwesero.png",
      start: "2012",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Btq.",
      href: "https://btq-frontend-nextjs.vercel.app/",
      dates: "Jul 2026 - Present",
      active: true,
      description:
        "A mobile-first online storefront for a Kigali clothing boutique. The Django API handles email-based accounts with JWT authentication. Its catalogue model covers nested categories, tags, collections, favourites and size/colour variants, with database constraints enforcing rules such as sale price below list price. The Next.js frontend talks to the API through server-side route handlers that keep tokens in httpOnly cookies. Product images go to Cloudflare R2, and the API is set up to deploy on Render with Neon Postgres.",
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
      video: "/projects/btq.mp4",
    },
    {
      title: "Endure",
      href: "https://github.com/amedee-kbm/endure",
      dates: "Oct 2025 - Jun 2026",
      active: true,
      description:
        "A job scheduler that keeps running when machines crash. It spreads multi-stage jobs across a pool of workers and runs on PostgreSQL alone, with no message broker. Workers claim jobs through database row locks, so no two workers run the same job. A lease row elects one active scheduler, and a standby takes over when the lease expires. Jobs resume from their last checkpoint after a crash, and failed jobs retry with backoff before moving to a dead-letter state. Every state change is a conditional write, so a worker wrongly marked as dead can't corrupt results. Verified by 20 deterministic fault-injection tests, live leader- and worker-kill runs, and throughput sweeps. Built for my master's thesis and released under the MIT licence.",
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
      dates: "Oct 2025 - Jan 2026",
      active: true,
      description:
        "A reading app that turns each book into a series of questions and notes. You add a book by typing its chapters or importing an EPUB. Before reading, you write what you want from the book, then add notes chapter by chapter and finish with what you'll keep. Notes autosave and retry on failure, sign-in uses magic links, and everything exports as Markdown.",
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
      dates: "Jun - Jul 2026",
      active: true,
      description:
        "A terminal note-taking app that stores everything as plain Markdown files with YAML front matter. Its full-screen Textual interface has a live preview, search-as-you-type filtering and inline add/edit/delete, plus command-line subcommands for scripting. It installs with uv, and an environment variable sets where notes are stored.",
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
      location: "University of Lodz, Poland",
      description:
        "“Designing and Evaluating a Scalable and Fault-Tolerant Task Scheduler for Automated Report Generation”, graded 5/5. In every crash scenario tested, no job was lost or restarted from scratch: each resumed from its last checkpoint or, once its retries ran out, was set aside for inspection.",
      image: "/uni-lodz.jpg",
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
      dates: "2025",
      location: "University of Lodz, Poland",
      description:
        "Awarded to the top 10% of students.",
      image: "/uni-lodz.jpg",
      links: [],
    },
    {
      title: "11th International Standards Olympiad",
      dates: "2016",
      location: "Anseong, South Korea",
      description:
        "Competed for Team Rwanda at the olympiad organised by the Korean Agency for Technology and Standards. The team won the Bronze Prize.",
      image: "/rwesero.png",
      win: "Bronze Prize",
      links: [
        {
          title: "Rwanda Standards Board",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.rsb.gov.rw/updates/news-detail/standards-contest-team-rwanda-won-bronze",
        },
      ],
    },
  ],
} as const;
