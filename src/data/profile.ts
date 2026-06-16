// =============================================================================
//  PROFILE.TS  —  Replace everything marked TODO with your real information.
//  This file controls every piece of personal content on the site.
// =============================================================================

export const profile = {

  // ── Identity ────────────────────────────────────────────────────────────────

  /** Your full name — appears in Hero h1, Footer, and page title. */
  name: 'Areeyan Gonsalves',

  /** Two-letter initials used in the Navbar logo. */
  initials: 'AG',

  /**
   * Your role / one-line title shown beneath your name in the Hero.
   * TODO: Consider "Software Engineer · UofT CS" rather than just "Student"
   *       once you have internship experience to back it up.
   */
  title: 'Computer Science Student',

  /**
   * Short punchy tagline — first thing a recruiter reads.
   * TODO: Make this specific to you. Mention your stack, your focus, or
   *       something memorable. Avoid clichés like "passionate developer."
   * Example: "I write compilers for fun and ship products for impact."
   */
  tagline: 'Building thoughtful software — one commit at a time.',

  /**
   * Second sentence shown in Hero below the tagline.
   * TODO: This currently duplicates the tagline. Replace with a single concrete
   *       sentence about what you're currently working on or studying.
   * Example: "Currently interning at Relay Financial and building a
   *           tree-walking interpreter in Rust."
   */
  heroDescription:
    'I build things that are fast, readable, and genuinely useful — currently exploring compilers, distributed systems, and human-centered software.',

  /** City/region shown next to social links in the Hero. */
  location: 'Toronto, ON',  // TODO: Update if you move or want to show "Open to relocation"

  // ── Photo ───────────────────────────────────────────────────────────────────

  /**
   * Your headshot.
   * TODO: Replace with your actual photo.
   *   - Save your photo to /public/photo.jpg (or .png / .webp)
   *   - Then set this to: '/photo.jpg'
   * Current value is a STOCK PHOTO OF A STRANGER — change this before sharing.
   */
  photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',

  /** Alt text for the photo — use your real name. */
  photoAlt: 'Areeyan Gonsalves',

  // ── Contact & Social ────────────────────────────────────────────────────────

  contact: {
    /** TODO: Confirm this is your active email address. */
    email: 'areeyan.gonsalves@mail.utoronto.ca',

    /** TODO: Confirm your GitHub profile URL is correct and the account is public. */
    github: 'https://github.com/areeyanG',

    /** GitHub handle shown as display text in the Contact section. */
    githubHandle: '@areeyanG',  // TODO: Match your actual GitHub username

    /** TODO: Confirm your LinkedIn profile URL is correct and set to public. */
    linkedin: 'https://linkedin.com/in/areeyan-g',

    /** Your name as it appears on LinkedIn (shown in contact card). */
    linkedinName: 'Areeyan Gonsalves',

    /**
     * Path to your resume PDF.
     * TODO: Add your resume PDF to the /public folder and update this path.
     *   - Save as: /public/resume.pdf
     *   - Value should be: '/resume.pdf'
     * Currently 404s — every "Resume" button on the site is broken.
     */
    resume: '/resume.pdf',
  },

  // ── Availability ────────────────────────────────────────────────────────────

  availability: {
    /**
     * Set to false to hide the "open to internships" badge everywhere.
     * TODO: Set to false once you've accepted an offer.
     */
    isAvailable: true,

    /** Short badge label in the Hero photo overlay. */
    badgeText: 'Open to internships',

    /** Headline in the Contact section availability banner. */
    headline: 'Open to internships',

    /**
     * Detail line in the Contact availability banner.
     * TODO: Update the term/year whenever it changes.
     */
    detail: 'Looking for Summer 2026 opportunities. Toronto-based, open to remote.',
  },

  // ── Bio (About section) ─────────────────────────────────────────────────────

  /**
   * Each string is rendered as a paragraph in the About section.
   * TODO: Write this in your own voice. Keep it to 2–3 paragraphs.
   *       Mention your school, what you're studying, what you've shipped,
   *       and what you care about. Avoid generic filler like "passionate."
   */
  bio: [
    "I'm a second-year Computer Science student at the University of Toronto, drawn to the intersection of systems thinking and human-centered design. I find beauty in well-structured code and well-researched solutions.",
    "When I'm not deep in coursework or side projects, I'm reading about programming language theory, contributing to open-source, or exploring how technology shapes learning and education.",
  ],

  /**
   * Closing goal statement shown in bold below the bio paragraphs.
   * TODO: Make this specific — name an industry, a problem space, or a
   *       type of company you want to work at.
   */
  goal:
    "I'm working toward a career that combines rigorous engineering with meaningful impact — whether that's in research, product, or somewhere in between.",

  // ── About quick-facts (three stat cards) ────────────────────────────────────

  quickFacts: {
    education: {
      /** TODO: Replace with your actual institution. */
      institution: 'University of Toronto',
      /** TODO: Replace with your actual degree/program name. */
      degree: 'BSc Computer Science',
    },
    focus: {
      /**
       * Your academic focus / specialization.
       * TODO: Update to match your declared specialization or current interests.
       */
      area: 'PL Theory + Systems',
      /**
       * Current year of study.
       * TODO: Update each September.
       */
      detail: 'Year 2 of 4',
    },
    status: {
      /** Short status label. TODO: Change to "Returning Intern" once you have an offer. */
      label: 'Seeking Internships',
      /** Target term. TODO: Update each cycle. */
      detail: 'Summer 2026',
    },
  },

  // ── Academic interests (sidebar bullet list) ─────────────────────────────────

  /**
   * Shown as a bullet list in the About sidebar.
   * TODO: List 4–6 real academic interests. Be specific —
   *       "Type Systems & Dependent Types" is more impressive than "Programming Languages."
   */
  interests: [
    'Programming Languages & Compilers',
    'Human-Computer Interaction',
    'Distributed Systems',
    'Machine Learning Foundations',
    'Open Source Software',
  ],

  // ── Currently reading ────────────────────────────────────────────────────────

  /**
   * Books shown in the About sidebar.
   * TODO: Replace with books you are actually reading right now.
   *       This is a great signal to recruiters who care about intellectual curiosity.
   */
  reading: [
    { title: 'Crafting Interpreters', author: 'Robert Nystrom' },
    { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' },
  ],

  // ── Skills ───────────────────────────────────────────────────────────────────

  skills: {
    /**
     * Programming languages.
     * TODO: Keep only languages you can confidently be interviewed on.
     *       Remove anything you've only touched once.
     */
    languages: ['Python', 'C/C++', 'JavaScript', 'HTML/CSS'],

    /**
     * Frameworks and libraries.
     * TODO: Same rule — keep what you've used in real projects.
     */
    frameworks: ['React'],

    /**
     * Tools and platforms.
     * TODO: Add anything relevant from your internship (e.g. specific AWS services,
     *       monitoring tools, CI systems you actually used at Relay).
     */
    tools: ['Git', 'Docker', 'Linux', 'PostgreSQL', 'VS Code', 'Figma', 'Postman'],

    /**
     * Currently learning — shown with a distinct style to signal curiosity.
     * TODO: Only list things you are actively studying right now.
     */
    learning: ['Zig', 'WebAssembly', 'Kubernetes', 'Haskell', 'CUDA'],
  },

  // ── Footer ───────────────────────────────────────────────────────────────────

  footer: {
    name: 'Areeyan Gonsalves',  // TODO: Update if name changes
    subtitle: 'Computer Science Student — University of Toronto',  // TODO: Update each year
  },

} as const;
