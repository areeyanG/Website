// =============================================================================
//  PROJECTS.TS  —  Replace everything marked TODO with your real information.
//  This file controls all project cards and the experience / education timeline.
// =============================================================================

// ── Types ─────────────────────────────────────────────────────────────────────

export interface Project {
  id: number;
  /** Set true for the one project rendered as the large featured card. */
  featured: boolean;
  title: string;
  description: string;
  tech: string[];
  /** TODO: Must be a real, public GitHub repo URL or set to null to hide the button. */
  github: string | null;
  /** TODO: Live demo URL, or null to hide the button. */
  demo: string | null;
  /**
   * Cover image.
   * TODO: Replace Pexels URLs with real screenshots.
   *   - Take a screenshot of your project running
   *   - Save to /public/projects/your-project-name.png
   *   - Set this to: '/projects/your-project-name.png'
   */
  image: string;
}

export type TimelineType = 'education' | 'work' | 'leadership';

export interface TimelineItem {
  id: number;
  type: TimelineType;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
}

// =============================================================================
//  PROJECTS
//  TODO checklist for each project:
//    [ ] Replace Pexels image with a real screenshot saved in /public/projects/
//    [ ] Replace github URL with your actual public repo (or set to null)
//    [ ] Replace demo URL with live URL (or set to null)
//    [ ] Replace description with what the project actually does
//    [ ] Confirm tech stack matches what you actually used
// =============================================================================

export const projects: Project[] = [
  {
    id: 1,
    featured: true,   // ← Only one project should be featured at a time

    // TODO: Replace with your most impressive / most complete project
    title: 'Meridian',

    // TODO: Write 2–3 sentences: what it is, who it's for, what's technically
    //       interesting about it. Add one concrete metric if you have one
    //       (e.g. "Used by 200 students", "sub-100ms sync latency").
    description:
      'A collaborative note-taking and knowledge management application built for university students. Features real-time syncing, markdown support, and an intelligent tagging system that automatically surfaces related notes.',

    // TODO: Only list tech you actually used in this project
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'WebSockets'],

    // TODO: Replace with real public repo URL, or set to null
    // 🔴 BROKEN — this repo does not exist at the time of audit
    github: 'https://github.com/areeyan-gonsalves/meridian',

    // TODO: Replace with working demo URL, or set to null
    // 🟡 UNVERIFIED — confirm this URL works
    demo: 'https://meridian-app.vercel.app',

    // TODO: Replace with a real screenshot
    // 🔴 PLACEHOLDER — Pexels stock photo, not your project
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  {
    id: 2,
    featured: false,

    // TODO: Replace with your real project name
    title: 'Lexara',

    // TODO: Rewrite with what it actually does and what you learned
    description:
      'A minimalist programming language interpreter written in Rust, featuring a custom lexer, recursive descent parser, and tree-walking evaluator. Supports first-class functions, closures, and basic type inference.',

    // TODO: Confirm these match your actual implementation
    tech: ['Rust', 'Compiler Theory', 'LLVM Basics'],

    // 🔴 BROKEN — this repo does not exist at the time of audit
    github: 'https://github.com/areeyan-gonsalves/lexara',

    demo: null,   // No demo — this is fine for a CLI/interpreter project

    // TODO: Replace with a terminal screenshot or architecture diagram
    // 🔴 PLACEHOLDER — generic code stock photo
    image: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  {
    id: 3,
    featured: false,

    title: 'Canopy',

    description:
      'A course scheduling tool built for students navigating complex prerequisite trees. Generates conflict-free timetables with support for custom constraints and generates visual prerequisite graphs.',

    tech: ['Python', 'Flask', 'React', 'D3.js', 'SQLite'],

    // 🔴 BROKEN — this repo does not exist at the time of audit
    github: 'https://github.com/areeyan-gonsalves/canopy',

    // 🟡 UNVERIFIED — confirm this URL works
    demo: 'https://canopy-scheduler.netlify.app',

    // 🔴 PLACEHOLDER — generic classroom stock photo
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  {
    id: 4,
    featured: false,

    title: 'Terrain',

    description:
      'A lightweight CLI tool for managing local development environments. Handles dependency isolation, environment variable scoping, and reproducible setup scripts across UNIX-based systems.',

    tech: ['Go', 'Bash', 'Docker', 'TOML'],

    // 🔴 BROKEN — this repo does not exist at the time of audit
    github: 'https://github.com/areeyan-gonsalves/terrain',

    demo: null,

    // 🔴 PLACEHOLDER — generic code stock photo
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

// =============================================================================
//  TIMELINE  (Education, Work Experience, Leadership)
//
//  Ordering: most recent first within each type.
//  TODO checklist for each entry:
//    [ ] Confirm all dates are accurate
//    [ ] Replace any estimated metrics with real numbers
//    [ ] Remove entries that aren't real or aren't yours yet
//    [ ] Add any real experience that's missing
// =============================================================================

export const timeline: TimelineItem[] = [
  {
    id: 1,
    type: 'education',

    // TODO: Confirm your exact degree title
    title: 'BSc Computer Science',
    organization: 'University of Toronto',

    // TODO: Confirm your actual start date
    period: 'Sep 2024 — Present',

    // TODO: Replace with your real GPA (or remove "Current GPA: X.X/4.0" if
    //       you'd rather not disclose it).
    //       Replace course list with your actual completed/current courses.
    description:
      'Pursuing a specialization in Computer Science with a focus on Programming Languages and Systems. Current GPA: 3.9/4.0. Relevant courses: Data Structures, Operating Systems, Algorithms, Databases, Theory of Computation.',

    // TODO:
    //   "Dean's List" — remove if you have not received this award
    //   "CGPA 3.9"    — replace with your actual GPA or remove
    tags: ["Dean's List", 'CGPA 3.9'],
  },

  {
    id: 2,
    type: 'work',

    // TODO: Confirm your exact job title
    title: 'Software Engineering Intern',
    organization: 'Intellect Design Arena',

    // TODO: Confirm exact start/end dates
    period: 'May 2025 — Aug 2025',

    // TODO: Rewrite with your real contributions.
    //   - Replace "40%" with your actual performance improvement metric
    //   - Replace generic tasks with specific things you built or fixed
    //   - Keep to 2–3 sentences, impact-first
    description:
      "Contributed to the core banking platform's transaction processing pipeline. Improved query performance by 40% through index optimization and query restructuring. Collaborated with product and design teams to ship a redesigned account overview feature.",

    // TODO: Replace with the actual technologies you used at this job
    tags: ['Full-Stack', 'PostgreSQL', 'React', 'TypeScript'],
  },

  {
    id: 3,
    type: 'leadership',

    title: 'Vice President of Technology',
    organization: 'Web3 UofT',

    // TODO: Confirm dates
    period: 'July 2025 — Present',

    // TODO: Replace "team of six developers" with your actual team size.
    //       Add a specific outcome: what did the platform do, who uses it?
    description:
      'Leading a team of six developers building a volunteer management platform for a local non-profit. Responsible for architecture decisions, code reviews, and onboarding new contributors.',

    tags: ['Leadership', 'Non-profit Tech', 'Mentorship'],
  },

  {
    id: 4,
    type: 'work',

    title: 'Teaching Assistant — CSC148',
    organization: 'University of Toronto',

    // TODO: Confirm exact dates
    period: 'Jan 2024 — Apr 2024',

    // TODO: Replace "200+" with the real enrollment number for the course section(s) you TAed.
    description:
      'Held weekly office hours and marked assignments for Introduction to Computer Science (Python). Helped 200+ students build foundational programming and algorithmic thinking skills.',

    tags: ['Python', 'Teaching', 'Algorithms'],
  },

  {
    id: 5,
    type: 'leadership',

    title: 'Competitive Programming Club',
    organization: 'University of Toronto',

    period: 'Sep 2023 — Present',

    // TODO: Confirm you've participated in ICPC North America specifically,
    //       or replace with the actual competition name.
    description:
      'Active participant in competitive programming competitions including ICPC North America. Regularly practices algorithmic problem-solving and mentors first-year students.',

    tags: ['Algorithms', 'ICPC', 'Competitive Programming'],
  },
];
