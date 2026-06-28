import { defaultLocale, type Locale } from "@/lib/i18n";

const tallyLandingPageEmbedUrl = "https://tally.so/embed/b5ABOe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export type PlaceholderAccent = "cyan" | "emerald" | "violet" | "amber" | "rose";

export type PlaceholderImage = {
  src?: string;
  label: string;
  alt: string;
  accent?: PlaceholderAccent;
};

export type ThemeStyles = {
  mode: "light" | "dark";
  quickColors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  palettes: {
    light: ThemePalette;
    dark: ThemePalette;
  };
  typography: {
    bodyFont: string;
    headingWeight: string;
    displayTracking: string;
  };
  radii: {
    section: string;
    card: string;
    button: string;
  };
  spacing: {
    sectionY: string;
  };
  buttons: {
    primary: "solid" | "soft";
    secondary: "outline" | "soft";
  };
  icons: {
    style: "soft-gradient" | "minimal";
  };
  layout: "modern-clean" | "dark-premium";
};

export type ThemePalette = {
  colors: {
    pageBackground: string;
    sectionBackground: string;
    darkBackground: string;
    heroBackground: string;
    heroOverlay: string;
    cardBackground: string;
    cardBorder: string;
    panelBackground: string;
    panelBorder: string;
    textPrimary: string;
    textMuted: string;
    textInverse: string;
    heading: string;
    primary: string;
    primaryHover: string;
    primaryForeground: string;
    primaryShadow: string;
    secondaryBackground: string;
    secondaryHover: string;
    secondaryForeground: string;
    accent: string;
    accentSoft: string;
    accentGlow: string;
    whatsapp: string;
    whatsappHover: string;
    whatsappForeground: string;
    whatsappShadow: string;
    successBackground: string;
    successForeground: string;
    errorBackground: string;
    errorForeground: string;
  };
};

export type WhatsAppConfig = {
  number: string;
  message: string;
  heroButtonLabel: string;
  sectionButtonLabel: string;
  desktopLabel: string;
  mobileLabel: string;
  subLabel: string;
};

export type HeaderNavItem = {
  label: string;
  href: string;
};

export type HeaderContent = {
  logo: {
    text: string;
    imageSrc?: string;
    imageAlt?: string;
    width?: number;
    height?: number;
  };
  navItems: HeaderNavItem[];
  phoneDisplay?: string;
  phoneHref?: string;
  ctaLabel: string;
  ctaHref: string;
};

export type TrustIconName = "clock" | "shield" | "message" | "phone" | "headset" | "truck" | "target" | "calendar" | "pen";

export type TrustIcon = {
  name: TrustIconName;
  label: string;
  accent?: PlaceholderAccent;
};

export type HeroContent = {
  layout?: "background-form";
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  secondaryLink?: {
    label: string;
    href: string;
  };
  backgroundImage?: PlaceholderImage;
  formCard?: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    selectPlaceholder: string;
    options: string[];
    submitLabel: string;
    submittingLabel: string;
    successMessage: string;
    genericErrorMessage: string;
    helperText?: string;
  };
};

export type TrustBenefit = {
  title: string;
  description: string;
  icon: TrustIcon;
};

export type TrustSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: TrustBenefit[];
  cardsEyebrow: string;
  cardsTitle: string;
  cardsDescription: string;
  cards: TrustBenefit[];
};

export type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  image: PlaceholderImage;
};

export type ServicesSection = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: ServiceItem[];
};

export type PackageItem = {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

export type PackagesSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: PackageItem[];
};

export type WhyChooseUsSection = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  statLabel: string;
  statValue: string;
  primaryCta: string;
  image: PlaceholderImage;
};

export type TestimonialItem = {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: PlaceholderImage;
};

export type TestimonialsSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: TestimonialItem[];
};

export type CtaSection = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  supportingText: string;
  image: PlaceholderImage;
};

export type GalleryItem = {
  slug: string;
  category: string;
  title: string;
  image: PlaceholderImage;
  client: string;
  duration: string;
  year: string;
  summary: string;
  overviewTitle: string;
  overview: string;
  services: string[];
  outcomes: string[];
  images: PlaceholderImage[];
  liveUrl?: string;
};

export type GallerySection = {
  eyebrow: string;
  title: string;
  description: string;
  allFilterLabel: string;
  viewProjectLabel: string;
  emptyStateLabel: string;
  items: GalleryItem[];
};

export type ContactDetails = {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  serviceArea: string;
  responseTime: string;
};

export type ContactSection = {
  eyebrow: string;
  title: string;
  description: string;
  callLabel: string;
  emailLabel: string;
  whatsappLabel: string;
  serviceAreaLabel: string;
  responseTimeLabel: string;
  image: PlaceholderImage;
};

export type FormContent = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  budgetLabel: string;
  budgetPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  genericErrorMessage: string;
};

export type IntakePageContent = {
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  backHomeLabel: string;
  highlightsTitle: string;
  highlights: string[];
  formTitle: string;
  formDescription: string;
  fallbackLinkLabel: string;
  followUpText: string;
  supportTitle: string;
  supportDescription: string;
  embedUrl: string;
  embedTitle: string;
  embedHeight: number;
};

export type PortfolioPageContent = {
  backToProjectsLabel: string;
  detailLabels: {
    category: string;
    client: string;
    duration: string;
    year: string;
  };
  summaryEyebrow: string;
  summaryTitle: string;
  processEyebrow: string;
  processTitle: string;
  resultsEyebrow: string;
  resultsTitle: string;
  liveAccessEyebrow: string;
  liveAccessTitle: string;
  liveAccessDescription: string;
  openPreviewLabel: string;
};

export type FooterContent = {
  tagline: string;
  copyrightLabel: string;
  secondaryText: string;
  socialLinks: Array<{
    platform: "facebook" | "youtube" | "instagram" | "linkedin";
    label: string;
    href: string;
  }>;
};

export type ClientConfig = {
  businessName: string;
  industry: string;
  location: string;
  domain: string;
  meta: {
    title: string;
    description: string;
  };
  styles: ThemeStyles;
  hero: HeroContent;
  trust: TrustSection;
  services: ServicesSection;
  packages: PackagesSection;
  whyChooseUs: WhyChooseUsSection;
  testimonials: TestimonialsSection;
  cta: CtaSection;
  gallery: GallerySection;
  contact: ContactDetails;
  whatsapp: WhatsAppConfig;
  header: HeaderContent;
  contactSection: ContactSection;
  form: FormContent;
  intakePage: IntakePageContent;
  portfolioPage: PortfolioPageContent;
  footer: FooterContent;
};

const baseClientConfig: ClientConfig = {
  businessName: "Lika Digital Marketing",
  industry: "Digital Marketing",
  location: "Utah",
  domain: "https://www.lika-digital.com",
  meta: {
    title: "Lika Digital Marketing | Websites Built To Grow Your Online Presence",
    description:
      "Lika Digital Marketing builds conversion-focused websites for businesses that want a stronger online presence, more trust, and more customer inquiries.",
  },
  header: {
    logo: {
      text: "Lika",
      imageSrc: "/images/branding/logo.png",
      imageAlt: "Lika Digital logo",
      width: 220,
      height: 88,
    },
    navItems: [
      {
        label: "Services",
        href: "#services",
      },
      {
        label: "Process",
        href: "#benefits",
      },
      {
        label: "Work",
        href: "#gallery",
      },
      {
        label: "Contact",
        href: "#contact-form",
      },
    ],
    phoneDisplay: "(208) 948-75-48",
    phoneHref: "tel:+12089487548",
    ctaLabel: "Book Free Call",
    ctaHref: "#contact-form",
  },
  styles: {
    mode: "light",
    quickColors: {
      primary: "#9b6df3",
      secondary: "#ffffff",
      accent: "#7da3ff",
    },
    palettes: {
      light: {
        colors: {
          pageBackground: "#f8f7ff",
          sectionBackground: "#ffffff",
          darkBackground: "#120f2f",
          heroBackground: "#0f1028",
          heroOverlay: "radial-gradient(circle_at_top_left,rgba(157,109,243,0.22),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(125,163,255,0.2),transparent_26%),linear-gradient(180deg,rgba(15,16,40,0.98),rgba(10,14,34,1))",
          cardBackground: "rgba(255,255,255,0.98)",
          cardBorder: "rgba(186,170,244,0.38)",
          panelBackground: "rgba(255,255,255,0.88)",
          panelBorder: "rgba(157,109,243,0.16)",
          textPrimary: "#2f3147",
          textMuted: "#70738f",
          textInverse: "#f8f7ff",
          heading: "#4d2d92",
          primary: "#9b6df3",
          primaryHover: "#8958ea",
          primaryForeground: "#ffffff",
          primaryShadow: "rgba(155,109,243,0.24)",
          secondaryBackground: "#f6f3ff",
          secondaryHover: "#eee7ff",
          secondaryForeground: "#4d2d92",
          accent: "#7da3ff",
          accentSoft: "rgba(125,163,255,0.12)",
          accentGlow: "rgba(125,163,255,0.24)",
          whatsapp: "#25d366",
          whatsappHover: "#1ebe5a",
          whatsappForeground: "#ffffff",
          whatsappShadow: "rgba(37,211,102,0.28)",
          successBackground: "#f5efff",
          successForeground: "#6d3ed6",
          errorBackground: "#fff1f6",
          errorForeground: "#c24186",
        },
      },
      dark: {
        colors: {
          pageBackground: "#060816",
          sectionBackground: "rgba(14,19,37,0.74)",
          darkBackground: "#050816",
          heroBackground: "#050816",
          heroOverlay: "radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.14),transparent_26%),linear-gradient(180deg,rgba(6,8,22,0.98),rgba(4,7,18,1))",
          cardBackground: "rgba(13,18,35,0.72)",
          cardBorder: "rgba(255,255,255,0.08)",
          panelBackground: "rgba(255,255,255,0.05)",
          panelBorder: "rgba(255,255,255,0.08)",
          textPrimary: "#f8fafc",
          textMuted: "#94a3b8",
          textInverse: "#f8fafc",
          heading: "#ffffff",
          primary: "#ffffff",
          primaryHover: "#e2e8f0",
          primaryForeground: "#050816",
          primaryShadow: "rgba(255,255,255,0.18)",
          secondaryBackground: "rgba(255,255,255,0.06)",
          secondaryHover: "rgba(255,255,255,0.1)",
          secondaryForeground: "#ffffff",
          accent: "#8b5cf6",
          accentSoft: "rgba(139,92,246,0.16)",
          accentGlow: "rgba(99,102,241,0.3)",
          whatsapp: "#25d366",
          whatsappHover: "#1ebe5a",
          whatsappForeground: "#ffffff",
          whatsappShadow: "rgba(37,211,102,0.28)",
          successBackground: "rgba(6,95,70,0.24)",
          successForeground: "#bbf7d0",
          errorBackground: "rgba(159,18,57,0.2)",
          errorForeground: "#fecdd3",
        },
      },
    },
    typography: {
      bodyFont: "var(--font-geist-sans)",
      headingWeight: "700",
      displayTracking: "-0.04em",
    },
    radii: {
      section: "2rem",
      card: "1.5rem",
      button: "9999px",
    },
    spacing: {
      sectionY: "14rem",
    },
    buttons: {
      primary: "solid",
      secondary: "outline",
    },
    icons: {
      style: "soft-gradient",
    },
    layout: "modern-clean",
  },
  hero: {
    layout: "background-form",
    eyebrow: "",
    title: "Build an online presence that brings in more customers.",
    description:
      "Lika Digital Marketing creates websites for businesses that want to look professional, earn trust fast, and turn more visitors into calls, bookings, and leads.",
    badge: "",
    secondaryLink: {
      label: "Free Demo Website",
      href: "#contact-form",
    },
    backgroundImage: {
      src: "/images/hero/images.webp",
      label: "Hero background image",
      alt: "Lika Digital Marketing hero background",
      accent: "cyan",
    },
    formCard: {
      title: "Get your free strategy call",
      subtitle: "",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      phonePlaceholder: "Your phone number",
      selectPlaceholder: "Select your city",
      options:[
  "Salt Lake City",
  "West Valley City",
  "Sandy",
  "Draper",
  "Murray",
  "South Jordan",
  "Lehi",
  "Provo",
  "Ogden",
  "Remote / Other",
],
      submitLabel: "Book My Call",
      submittingLabel: "Sending...",
      successMessage: "Thanks! I’ll reach out shortly to schedule your free strategy call.",
      genericErrorMessage: "Something went wrong. Please try again.",
      helperText: "Free call • No pressure • Fast response",
    },
  },
  trust: {
    eyebrow: "",
    title: "How it works",
    description:
      "",
    items: [
      {
        title: "Book your free strategy call",
        description:
          "We talk about your business, your goals, and what your website needs to do better.",
        icon: {
          name: "calendar",
          label: "Call icon",
          accent: "amber",
        },
      },
      {
        title: "We build your strategy",
        description:
          "You get a clear plan for a website that improves your online presence and helps bring in more leads.",
        icon: {
          name: "target",
          label: "Strategy icon",
          accent: "amber",
        },
      },
      {
        title: "We design, build & launch",
        description:
          "We handle the design, build, and launch so you get a website ready to attract and convert customers.",
        icon: {
          name: "pen",
          label: "Launch icon",
          accent: "amber",
        },
      },
    ],
    cardsEyebrow: "",
    cardsTitle: "Why businesses keep moving forward with us",
    cardsDescription:
      "",
    cards: [
      {
        title: "Fast response",
        description: "You get clear communication and quick replies from start to finish.",
        icon: {
          name: "clock",
          label: "Fast response icon",
          accent: "emerald",
        },
      },
      {
        title: "Professional presence",
        description: "Your business looks credible, modern, and ready for serious customers.",
        icon: {
          name: "shield",
          label: "Professional presentation icon",
          accent: "violet",
        },
      },
      {
        title: "Built for leads",
        description: "Every page is designed to help more visitors contact and book with you.",
        icon: {
          name: "target",
          label: "Results icon",
          accent: "amber",
        },
      },
      {
        title: "Done for you",
        description: "We take care of the website work so you can stay focused on running your business.",
        icon: {
          name: "message",
          label: "Done for you icon",
          accent: "amber",
        },
      },
    ],
  },
  services: {
    eyebrow: "",
    title: "Our Services",
    description:
      "From strategy to launch, Lika gives you the core digital services you need to build a stronger online presence and win more customers.",
    ctaLabel: "Book a Free Call",
    ctaHref: "#contact-form",
    items: [
      {
        title: "Web Development",
        description:
          "We build modern websites and landing pages that make your business look credible and help turn visitors into customers.",
        bullets: [
          "Stronger online presence",
          "More calls and inquiries",
        ],
        image: {
          src: "/images/assets/web-dev.png",
          label: "Service image 01",
          alt: "Web development service image",
          accent: "cyan",
        },
      },
      {
        title: "Logo Design",
        description:
          "We create logos that help your business look polished, memorable, and more trustworthy from the first impression.",
        bullets: [
          "More brand recognition",
          "A more professional image",
        ],
        image: {
          src: "/images/assets/logo-design.png",
          label: "Service image 02",
          alt: "Logo design service image",
          accent: "emerald",
        },
      },
      {
        title: "App Development",
        description:
          "We build apps and web-based tools that make it easier for customers to interact with your business and stay engaged.",
        bullets: [
          "Better customer experience",
          "More ways to grow online",
        ],
        image: {
          src: "/images/assets/app-dev.png",
          label: "Service image 03",
          alt: "App development service image",
          accent: "violet",
        },
      },
      {
        title: "Brand Identity",
        description:
          "We build a consistent visual identity so your business feels established, clear, and easy to trust across every touchpoint.",
        bullets: [
          "More trust from visitors",
          "A more consistent brand presence",
        ],
        image: {
          src: "/images/assets/branding.png",
          label: "Service image 04",
          alt: "Brand identity service image",
          accent: "amber",
        },
      },
      {
        title: "Digital Marketing",
        description:
          "We help your business get seen online with marketing that brings the right people to your website and turns attention into leads.",
        bullets: [
          "More qualified traffic",
          "More bookings and customers",
        ],
        image: {
          src: "/images/assets/digital-marketing.png",
          label: "Service image 05",
          alt: "Digital marketing service image",
          accent: "rose",
        },
      },
      {
        title: "Brand Strategy",
        description:
          "We help define the positioning, message, and visual direction that make your business feel more focused, credible, and memorable.",
        bullets: [
          "Clearer market positioning",
          "A stronger brand direction",
        ],
        image: {
          src: "/images/assets/branding.png",
          label: "Service image 06",
          alt: "Brand strategy service image",
          accent: "violet",
        },
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "",
    title: "Why working with us feels simple and strategic",
    description:
      "",
    points: [
      "You get strategy, design, and launch support in one place",
      "Every page is built to guide people toward messaging, calling, or booking",
      "We keep the process clear, collaborative, and easy to move through",
      "Your brand shows up with a cleaner, more credible online presence",
    ],
    statLabel: "",
    statValue: "",
    primaryCta: "Get in touch",
    image: {
      src: "/images/assets/why-choose-us.png",
      label: "Why choose us image",
      alt: "Lika Digital Marketing strategy and website visual",
      accent: "rose",
    },
  },
  testimonials: {
    eyebrow: "",
    title: "Results that a stronger online presence can create",
    description:
      "",
    items: [
      {
        name: "More calls",
        role: "Clearer conversion path",
        location: "",
        quote:
          "A stronger website makes it easier for visitors to take action instead of clicking away.",
        rating: 5,
        avatar: {
          src: "/images/assets/man-one.png",
          label: "MG",
          alt: "Client result avatar 01",
          accent: "cyan",
        },
      },
      {
        name: "More bookings",
        role: "More trust from visitors",
        location: "",
        quote:
          "When your business looks professional online, more people feel comfortable booking with you.",
        rating: 5,
        avatar: {
          src: "/images/assets/woman-one.png",
          label: "DR",
          alt: "Client result avatar 02",
          accent: "emerald",
        },
      },
      {
        name: "More customers",
        role: "Stronger online presence",
        location: "",
        quote:
          "A better online presence helps your business stand out, build trust, and win more work.",
        rating: 5,
        avatar: {
          src: "/images/assets/man-two.png",
          label: "TL",
          alt: "Client result avatar 03",
          accent: "violet",
        },
      },
    ],
  },
  cta: {
    eyebrow: "",
    title: "Ready to get more customers?",
    description:
      "Let’s build a website that makes your business look stronger online and turns more visitors into real inquiries.",
    buttonLabel: "Book a Free Call",
    buttonHref: "#contact-form",
    supportingText: "Fast replies • No pressure",
    image: {
      src: "/images/assets/cta.png",
      label: "CTA background image",
      alt: "Call to action image for Lika Digital Marketing",
      accent: "amber",
    },
  },
  gallery: {
    eyebrow: "",
    title: "Landing pages built for real clients",
    description:
      "A selection of real client websites focused on stronger first impressions, clearer messaging, and effective CTAs that move visitors toward contact.",
    allFilterLabel: "All",
    viewProjectLabel: "View project",
    emptyStateLabel: "No projects in this category yet.",
    items: [
      {
        slug: "legacy-international-child-care",
        category: "Education",
        title: "Legacy International Child Care landing page",
        client: "Legacy International Child Care",
        duration: "2 weeks",
        year: "2026",
        summary:
          "A bilingual childcare landing page designed to build trust quickly, explain the program clearly, and guide parents toward high-intent inquiries with stronger CTAs.",
        overviewTitle: "Background.",
        overview:
          "Legacy International Child Care needed a landing page that felt more polished and reassuring for families discovering the school online. The goal was to present the childcare program with more clarity, highlight trust-building information faster, and make it easier for interested parents to take the next step. I structured the page around clearer sections, warmer visuals, and direct conversion paths so the offer could feel more credible from the first visit.",
        services: ["Landing page design", "Conversion-focused structure", "CTA optimization"],
        outcomes: [
          "Clearer presentation of the childcare offer",
          "Stronger trust signals for first-time visitors",
          "More visible inquiry and contact CTAs across the page",
        ],
        images: [
          {
            src: "/images/portfolio/legacy-international-daycare/web-hero.png",
            label: "Legacy website hero",
            alt: "Legacy International Child Care website hero section",
            accent: "cyan",
          },
          {
            src: "/images/portfolio/legacy-international-daycare/legacy-international.gif",
            label: "Legacy animated preview",
            alt: "Animated preview of the Legacy International Child Care landing page",
            accent: "emerald",
          },
        ],
        liveUrl: "https://legacybilingualschoolhn.org/",
        image: {
          src: "/images/portfolio/legacy-international-daycare/legacy-international.gif",
          label: "legacybilingualschoolhn.org",
          alt: "Animated website mockup for Legacy International Child Care",
          accent: "cyan",
        },
      },
      {
        slug: "osiris-damas",
        category: "Beauty",
        title: "Osiris Damas makeup landing page",
        client: "Osiris Damas",
        duration: "2 weeks",
        year: "2026",
        summary:
          "A beauty service landing page built to showcase the brand with more confidence, improve service clarity, and support bookings through stronger CTA placement.",
        overviewTitle: "Background.",
        overview:
          "Osiris Damas needed a landing page that felt more premium and made the makeup services easier to understand at a glance. The objective was to help visitors connect with the brand faster, see the offer with more clarity, and reach out with less friction. I built the page around stronger visual hierarchy, more persuasive section flow, and CTA moments that feel natural throughout the experience.",
        services: ["Landing page design", "Service presentation", "CTA optimization"],
        outcomes: [
          "More polished and premium brand presentation",
          "Clearer explanation of beauty services",
          "Better CTA visibility for inquiry-driven traffic",
        ],
        images: [
          {
            src: "/images/portfolio/osiris-damas/web-hero.png",
            label: "Osiris website hero",
            alt: "Osiris Damas landing page hero section",
            accent: "emerald",
          },
          {
            src: "/images/portfolio/osiris-damas/osiris-damas.gif",
            label: "Osiris animated preview",
            alt: "Animated preview of the Osiris Damas landing page",
            accent: "violet",
          },
        ],
        liveUrl: "https://osiris-damas-makeup.netlify.app/",
        image: {
          src: "/images/portfolio/osiris-damas/osiris-damas.gif",
          label: "osiris-damas-makeup.netlify.app",
          alt: "Animated website mockup for Osiris Damas",
          accent: "emerald",
        },
      },
      {
        slug: "renne-ceron",
        category: "Personal Brand",
        title: "Renne Ceron microblading landing page",
        client: "Renne Ceron",
        duration: "3 weeks",
        year: "2026",
        summary:
          "A personal-brand landing page for a microblading artist, created to make the before-and-after transformation more visible and turn interest into direct inquiries.",
        overviewTitle: "Background.",
        overview:
          "Renne Ceron needed a landing page that highlighted the artistry of the service while keeping the path to contact simple and direct. The site had to showcase transformation work, communicate the brand with more personality, and use CTAs in a way that supported lead generation instead of distracting from the visuals. I built a cleaner one-page experience with stronger contrast, better flow, and visual proof points that support trust and action.",
        services: ["Landing page design", "Visual storytelling", "Lead-focused CTA flow"],
        outcomes: [
          "Stronger visual storytelling for the personal brand",
          "Better use of before-and-after proof",
          "A cleaner path from interest to direct contact",
        ],
        images: [
          {
            src: "/images/portfolio/renne-ceron/web-hero.png",
            label: "Renne website hero",
            alt: "Renne Ceron landing page hero section",
            accent: "violet",
          },
          {
            src: "/images/portfolio/renne-ceron/renne-ceron.gif",
            label: "Renne animated preview",
            alt: "Animated preview of the Renne Ceron landing page",
            accent: "rose",
          },
          {
            src: "/images/portfolio/renne-ceron/antes-publicidad.png",
            label: "Before ad creative",
            alt: "Before version of Renne Ceron promotional creative",
            accent: "amber",
          },
          {
            src: "/images/portfolio/renne-ceron/despues-publicidad.png",
            label: "After ad creative",
            alt: "After version of Renne Ceron promotional creative",
            accent: "cyan",
          },
          {
            src: "/images/portfolio/renne-ceron/antes-logo.png",
            label: "Before logo",
            alt: "Before version of Renne Ceron logo",
            accent: "amber",
          },
          {
            src: "/images/portfolio/renne-ceron/despues-logo.png",
            label: "After logo",
            alt: "After version of Renne Ceron logo",
            accent: "cyan",
          },
        ],
        liveUrl: "https://renne-ceron.netlify.app/",
        image: {
          src: "/images/portfolio/renne-ceron/renne-ceron.gif",
          label: "renne-ceron.netlify.app",
          alt: "Animated website mockup for Renne Ceron",
          accent: "violet",
        },
      },
      {
        slug: "always-green",
        category: "Landscaping",
        title: "Always Green landscaping landing page",
        client: "Always Green",
        duration: "2 weeks",
        year: "2026",
        summary:
          "A landscaping landing page created to make the service offer feel more trustworthy, showcase outdoor work more clearly, and move local visitors toward direct inquiries.",
        overviewTitle: "Background.",
        overview:
          "Always Green needed a landing page that made the business look more established while keeping the message simple for homeowners searching for help fast. The goal was to present the landscaping offer with clearer structure, use visuals that support trust, and make the next step obvious across the page. I shaped the experience around a cleaner hierarchy, stronger service framing, and conversion points that feel natural instead of forced.",
        services: ["Landing page design", "Service positioning", "Lead-focused CTA flow"],
        outcomes: [
          "Clearer presentation of landscaping services",
          "Stronger visual trust for first-time visitors",
          "A more direct path from browsing to inquiry",
        ],
        images: [
          {
            src: "/images/portfolio/always-green/always-green-hero.png",
            label: "Always Green website hero",
            alt: "Always Green landing page hero section",
            accent: "emerald",
          },
          {
            src: "/images/portfolio/always-green/always-green-gif.gif",
            label: "Always Green animated preview",
            alt: "Animated preview of the Always Green landing page",
            accent: "cyan",
          },
        ],
        image: {
          src: "/images/portfolio/always-green/always-green-gif.gif",
          label: "Always Green project preview",
          alt: "Animated website mockup for Always Green",
          accent: "emerald",
        },
      },
      {
        slug: "amazing-clean",
        category: "Cleaning",
        title: "Amazing Clean service landing page",
        client: "Amazing Clean",
        duration: "2 weeks",
        year: "2026",
        summary:
          "A cleaning service landing page built to communicate reliability faster, simplify the offer, and turn attention into more contact-ready leads.",
        overviewTitle: "Background.",
        overview:
          "Amazing Clean needed a landing page that felt more polished and easier to understand for people looking for cleaning help quickly. The objective was to make the service promise clearer, support credibility with a stronger visual presentation, and reduce friction around reaching out. I organized the page with a cleaner section flow, more confident messaging, and CTA placement that keeps the contact path visible throughout the experience.",
        services: ["Landing page design", "Offer clarity", "Conversion-focused CTA structure"],
        outcomes: [
          "A clearer and more credible service presentation",
          "Better visibility for key contact actions",
          "A smoother flow from interest to inquiry",
        ],
        images: [
          {
            src: "/images/portfolio/amazing-clean/amazing-cleaning-hero.png",
            label: "Amazing Clean website hero",
            alt: "Amazing Clean landing page hero section",
            accent: "cyan",
          },
          {
            src: "/images/portfolio/amazing-clean/cleaning.gif",
            label: "Amazing Clean animated preview",
            alt: "Animated preview of the Amazing Clean landing page",
            accent: "amber",
          },
        ],
        image: {
          src: "/images/portfolio/amazing-clean/cleaning.gif",
          label: "Amazing Clean project preview",
          alt: "Animated website mockup for Amazing Clean",
          accent: "cyan",
        },
      },
    ],
  },
  packages: {
    eyebrow: "",
    title: "Custom websites built to convert and scale",
    description:
      "Choose the package that fits your business now, then grow from there with strategy, content, and conversion upgrades when you’re ready.",
    items: [
      {
        name: "Starter Website Package",
        price: "$149",
        subtitle: "Ideal for getting your business online with a clean, credible foundation.",
        features: [
          "Simple one-page layout",
          "Mobile-friendly design",
          "Basic contact section",
          "WhatsApp or call CTA",
          "Fast launch setup",
        ],
        ctaLabel: "Start Project",
        ctaHref: "#contact-form",
      },
      {
        name: "Growth Website Package",
        price: "$349",
        subtitle: "Built for businesses that want a stronger presence and more inquiries.",
        features: [
          "Multi-section conversion layout",
          "Custom design styling",
          "Lead-focused contact form",
          "Service highlights and portfolio",
          "On-page SEO foundation",
          "Launch support included",
        ],
        ctaLabel: "Start Project",
        ctaHref: "#contact-form",
        highlighted: true,
      },
      {
        name: "Professional Website Package",
        price: "$649",
        subtitle: "Best for brands that need a polished, strategic, higher-converting website.",
        features: [
          "Advanced custom layout",
          "Brand identity alignment",
          "Stronger calls-to-action",
          "Expanded pages or funnels",
          "Analytics and tracking setup",
          "Priority design revisions",
        ],
        ctaLabel: "Start Project",
        ctaHref: "#contact-form",
      },
    ],
  },
  contact: {
    phoneDisplay: "(208) 948-7548",
    phoneHref: "tel:+12089487548",
    email: "likadigitalmarketing@gmail.com",
    serviceArea: "Utah and remote projects",
    responseTime: "Usually replies within 15 minutes",
  },
  whatsapp: {
    number: "12089487548",
    message: "Hi Lesliee, I want help improving my website and online presence.",
    heroButtonLabel: "Chat on WhatsApp",
    sectionButtonLabel: "Message on WhatsApp",
    desktopLabel: "Chat on WhatsApp",
    mobileLabel: "Chat on WhatsApp",
    subLabel: "",
  },
  contactSection: {
    eyebrow: "",
    title: "Get in touch today!",
    description:
      "Ready to transform your business vision? Contact us for a personalized consultation and unlock your project’s full potential.",
    callLabel: "Call",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    serviceAreaLabel: "Service area",
    responseTimeLabel: "Response time",
    image: {
      src: "/images/assets/why-choose-us%20(2).png",
      label: "Contact image placeholder",
      alt: "Contact section image for Lika Digital Marketing",
      accent: "emerald",
    },
  },
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Full Name",
    emailLabel: "Email Address",
    emailPlaceholder: "Email Address",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Phone Number",
    companyLabel: "Company Name",
    companyPlaceholder: "Company Name",
    serviceLabel: "Service",
    servicePlaceholder: "Service",
    budgetLabel: "Budget",
    budgetPlaceholder: "Budget",
    messageLabel: "Project Details",
    messagePlaceholder: "Describe your project...",
    submitLabel: "Get in Touch",
    submittingLabel: "Sending...",
    successMessage:
      "Thanks — we’ll reach out shortly.",
    genericErrorMessage: "Something went wrong. Please try again.",
  },
  intakePage: {
    meta: {
      title: "Tell Us About Your Business | Lika Digital Marketing",
      description:
        "Share your business details, goals, and landing page needs so Lika Digital Marketing can start planning your project.",
    },
    eyebrow: "Project intake",
    title: "Let's get your project started",
    description:
      "Use this form to send the details we need to plan your landing page faster, align the offer, and start with the right direction from day one.",
    primaryCtaLabel: "Open project form",
    backHomeLabel: "Back to homepage",
    highlightsTitle: "What to prepare",
    highlights: [
      "Your business name, services, and service area",
      "The main offer or promotion you want the page to focus on",
      "Any branding, photos, copy, or references you already have",
      "Your goals, timeline, and preferred way for us to contact you",
    ],
    formTitle: "Landing page project form",
    formDescription:
      "The embedded Tally form collects the project details we need so we can start with a clear brief instead of chasing missing information later.",
    fallbackLinkLabel: "Open the form in a new tab",
    followUpText: "Lika Digital Marketing reviews each submission and follows up as soon as possible.",
    supportTitle: "Need help before submitting?",
    supportDescription:
      "If you are missing information or want to talk through your project first, contact us directly and we can help you complete the brief.",
    embedUrl: tallyLandingPageEmbedUrl,
    embedTitle: "Formulario de Informacion para Crear tu Landing Page",
    embedHeight: 3768,
  },
  portfolioPage: {
    backToProjectsLabel: "Back to Projects",
    detailLabels: {
      category: "Category",
      client: "Client",
      duration: "Duration",
      year: "Year",
    },
    summaryEyebrow: "What I did",
    summaryTitle: "A brief overview of the work",
    processEyebrow: "How I did it",
    processTitle: "The approach behind the landing page",
    resultsEyebrow: "Key focus",
    resultsTitle: "What the page was built to improve",
    liveAccessEyebrow: "Live Access",
    liveAccessTitle: "View the live website.",
    liveAccessDescription:
      "Open the finished website to see the project live and experience the final landing page directly.",
    openPreviewLabel: "View Live Website",
  },
  footer: {
    tagline: "Websites, branding, and digital design support for businesses that want a stronger online presence.",
    copyrightLabel: "© 2026 Lika Digital Marketing. All rights reserved.",
    secondaryText: "Helping businesses look credible online and convert more visitors into inquiries.",
    socialLinks: [
      {
        platform: "facebook",
        label: "Facebook",
        href: "https://facebook.com/yourbusiness",
      },
      {
        platform: "youtube",
        label: "YouTube",
        href: "https://youtube.com/@yourbusiness",
      },
      {
        platform: "instagram",
        label: "Instagram",
        href: "https://instagram.com/yourbusiness",
      },
      {
        platform: "linkedin",
        label: "LinkedIn",
        href: "https://linkedin.com/company/yourbusiness",
      },
    ],
  },
};

const spanishClientConfig: ClientConfig = {
  ...baseClientConfig,
  meta: {
    title: "Lika Digital Marketing | Sitios web creados para fortalecer tu presencia online",
    description:
      "Lika Digital Marketing crea sitios web enfocados en conversiones para negocios que quieren una presencia online más fuerte, más confianza y más consultas de clientes.",
  },
  header: {
    ...baseClientConfig.header,
    navItems: [
      {
        label: "Servicios",
        href: "#services",
      },
      {
        label: "Proceso",
        href: "#benefits",
      },
      {
        label: "Proyectos",
        href: "#gallery",
      },
      {
        label: "Contacto",
        href: "#contact-form",
      },
    ],
    ctaLabel: "Agenda una llamada",
  },
  hero: {
    ...baseClientConfig.hero,
    title: "Construye una presencia online que atraiga más clientes.",
    description:
      "Lika Digital Marketing crea sitios web para negocios que quieren verse profesionales, generar confianza rápido y convertir más visitas en llamadas, reservas y contactos.",
    secondaryLink: {
      label: "Sitio web demo gratis",
      href: "#contact-form",
    },
    formCard: baseClientConfig.hero.formCard
      ? {
          ...baseClientConfig.hero.formCard,
          title: "Agenda tu llamada estratégica gratis",
          namePlaceholder: "Tu nombre",
          emailPlaceholder: "Tu correo",
          phonePlaceholder: "Tu número de teléfono",
          selectPlaceholder: "Selecciona tu ciudad",
          options: [
            "Salt Lake City",
            "West Valley City",
            "Sandy",
            "Draper",
            "Murray",
            "South Jordan",
            "Lehi",
            "Provo",
            "Ogden",
            "Remoto / Otro",
          ],
          submitLabel: "Agendar mi llamada",
          submittingLabel: "Enviando...",
          successMessage: "Gracias. Te escribiré pronto para agendar tu llamada estratégica gratuita.",
          genericErrorMessage: "Algo salió mal. Inténtalo de nuevo.",
          helperText: "Llamada gratis • Sin presión • Respuesta rápida",
        }
      : undefined,
  },
  trust: {
    ...baseClientConfig.trust,
    title: "Cómo funciona",
    items: [
      {
        ...baseClientConfig.trust.items[0],
        title: "Agenda tu llamada estratégica gratis",
        description:
          "Hablamos de tu negocio, tus objetivos y lo que tu sitio web necesita hacer mejor.",
      },
      {
        ...baseClientConfig.trust.items[1],
        title: "Creamos tu estrategia",
        description:
          "Recibes un plan claro para un sitio web que mejora tu presencia online y te ayuda a generar más prospectos.",
      },
      {
        ...baseClientConfig.trust.items[2],
        title: "Diseñamos, desarrollamos y lanzamos",
        description:
          "Nos encargamos del diseño, desarrollo y lanzamiento para que tengas un sitio listo para atraer y convertir clientes.",
      },
    ],
    cardsTitle: "Por qué los negocios siguen avanzando con nosotros",
    cards: [
      {
        ...baseClientConfig.trust.cards[0],
        title: "Respuesta rápida",
        description: "Recibes comunicación clara y respuestas ágiles de principio a fin.",
      },
      {
        ...baseClientConfig.trust.cards[1],
        title: "Presencia profesional",
        description: "Tu negocio se ve creíble, moderno y listo para clientes serios.",
      },
      {
        ...baseClientConfig.trust.cards[2],
        title: "Pensado para generar leads",
        description: "Cada página está diseñada para ayudar a que más visitantes te contacten y reserven.",
      },
      {
        ...baseClientConfig.trust.cards[3],
        title: "Hecho por ti",
        description: "Nos ocupamos del trabajo web para que tú sigas enfocado en operar tu negocio.",
      },
    ],
  },
  services: {
    ...baseClientConfig.services,
    title: "Nuestros servicios",
    description:
      "Desde la estrategia hasta el lanzamiento, Lika te da los servicios digitales clave para construir una presencia online más fuerte y ganar más clientes.",
    ctaLabel: "Agenda una llamada gratis",
    items: [
      {
        ...baseClientConfig.services.items[0],
        title: "Desarrollo web",
        description:
          "Creamos sitios web y landing pages modernas que hacen que tu negocio se vea creíble y conviertan más visitas en clientes.",
        bullets: ["Mejor presencia online", "Más llamadas y consultas"],
      },
      {
        ...baseClientConfig.services.items[1],
        title: "Diseño de logo",
        description:
          "Creamos logos que ayudan a que tu negocio se vea pulido, memorable y más confiable desde la primera impresión.",
        bullets: ["Más reconocimiento de marca", "Imagen más profesional"],
      },
      {
        ...baseClientConfig.services.items[2],
        title: "Desarrollo de apps",
        description:
          "Creamos apps y herramientas web que facilitan que tus clientes interactúen con tu negocio y se mantengan conectados.",
        bullets: ["Mejor experiencia del cliente", "Más oportunidades de crecer online"],
      },
      {
        ...baseClientConfig.services.items[3],
        title: "Identidad de marca",
        description:
          "Construimos una identidad visual consistente para que tu negocio se sienta establecido, claro y fácil de confiar en cada punto de contacto.",
        bullets: ["Más confianza de los visitantes", "Presencia de marca más consistente"],
      },
      {
        ...baseClientConfig.services.items[4],
        title: "Marketing digital",
        description:
          "Ayudamos a que tu negocio gane visibilidad online con marketing que atrae a las personas correctas a tu sitio y convierte atención en leads.",
        bullets: ["Más tráfico calificado", "Más reservas y clientes"],
      },
      {
        ...baseClientConfig.services.items[5],
        title: "Estrategia de marca",
        description:
          "Definimos el posicionamiento, mensaje y dirección visual que hacen que tu negocio se vea más claro, creíble y memorable.",
        bullets: ["Posicionamiento más claro", "Dirección de marca más sólida"],
      },
    ],
  },
  packages: {
    ...baseClientConfig.packages,
    title: "Paquetes",
    description: "Opciones claras para negocios que necesitan lanzar una página simple o una presencia digital más robusta.",
    items: baseClientConfig.packages.items.map((item, index) => ({
      ...item,
      name:
        index === 0
          ? "Paquete Landing Page"
          : "Paquete Sitio Web Profesional",
      subtitle:
        index === 0
          ? "Ideal para una oferta clara y una landing page enfocada en conversión."
          : "Ideal para marcas que necesitan un sitio más estratégico, pulido y con mayor conversión.",
      features:
        index === 0
          ? [
              "Landing page personalizada",
              "Diseño responsive",
              "Estructura enfocada en conversiones",
              "Formulario y CTA de WhatsApp",
              "Carga rápida y experiencia móvil",
              "Configuración básica de analítica",
            ]
          : [
              "Layout avanzado y personalizado",
              "Alineación con identidad de marca",
              "Llamados a la acción más fuertes",
              "Páginas o funnels ampliados",
              "Configuración de analítica y tracking",
              "Revisiones prioritarias de diseño",
            ],
      ctaLabel: "Iniciar proyecto",
    })),
  },
  whyChooseUs: {
    ...baseClientConfig.whyChooseUs,
    title: "Por qué trabajar con nosotros se siente simple y estratégico",
    points: [
      "Obtienes estrategia, diseño y lanzamiento en un solo lugar",
      "Cada página está creada para guiar a las personas a escribir, llamar o reservar",
      "Mantenemos el proceso claro, colaborativo y fácil de seguir",
      "Tu marca se muestra con una presencia online más limpia y creíble",
    ],
    primaryCta: "Contáctanos",
  },
  cta: {
    ...baseClientConfig.cta,
    title: "¿Listo para conseguir más clientes?",
    description:
      "Construyamos un sitio web que fortalezca tu presencia online y convierta más visitantes en consultas reales.",
    buttonLabel: "Agenda una llamada gratis",
    supportingText: "Respuestas rápidas • Sin presión",
  },
  gallery: {
    ...baseClientConfig.gallery,
    title: "Landing pages creadas para clientes reales",
    description:
      "Una selección de sitios web reales para clientes, enfocados en una mejor primera impresión, mensajes más claros y CTAs efectivos que mueven al visitante al contacto.",
    allFilterLabel: "Todos",
    viewProjectLabel: "Ver proyecto",
    emptyStateLabel: "Todavía no hay proyectos en esta categoría.",
    items: [
      {
        ...baseClientConfig.gallery.items[0],
        category: "Educación",
        title: "Landing page de Legacy International Child Care",
        summary:
          "Una landing page bilingüe para childcare diseñada para generar confianza más rápido, explicar mejor el programa y guiar a los padres hacia consultas con CTAs más visibles.",
        overviewTitle: "Contexto.",
        overview:
          "Legacy International Child Care necesitaba una landing page que se sintiera más pulida y más confiable para las familias que descubrían la escuela online. El objetivo era presentar el programa con más claridad, destacar información que genera confianza más rápido y facilitar el siguiente paso para los padres interesados. Estructuré la página con secciones más claras, visuales más cálidos y rutas de conversión directas para que la oferta se sintiera más creíble desde la primera visita.",
        services: ["Diseño de landing page", "Estructura enfocada en conversión", "Optimización de CTA"],
        outcomes: [
          "Presentación más clara de la oferta educativa",
          "Señales de confianza más fuertes para visitantes nuevos",
          "Mayor visibilidad de los CTA de contacto y consulta",
        ],
      },
      {
        ...baseClientConfig.gallery.items[1],
        category: "Belleza",
        title: "Landing page de maquillaje para Osiris Damas",
        summary:
          "Una landing page para servicios de belleza creada para mostrar la marca con más fuerza, mejorar la claridad de los servicios y apoyar reservas mediante CTAs mejor ubicados.",
        overviewTitle: "Contexto.",
        overview:
          "Osiris Damas necesitaba una landing page que se sintiera más premium y que hiciera los servicios de maquillaje más fáciles de entender desde el primer vistazo. El objetivo era ayudar a que las visitantes conectaran con la marca más rápido, vieran la oferta con más claridad y pudieran escribir con menos fricción. Construí la página con una jerarquía visual más fuerte, una secuencia de secciones más persuasiva y momentos de CTA integrados de forma natural durante toda la experiencia.",
        services: ["Diseño de landing page", "Presentación de servicios", "Optimización de CTA"],
        outcomes: [
          "Presentación de marca más pulida y premium",
          "Explicación más clara de los servicios de belleza",
          "Mejor visibilidad de CTA para tráfico orientado a consultas",
        ],
      },
      {
        ...baseClientConfig.gallery.items[2],
        category: "Marca personal",
        title: "Landing page de microblading para Renne Ceron",
        summary:
          "Una landing page de marca personal para una artista de microblading, creada para hacer más visible la transformación visual y convertir el interés en consultas directas.",
        overviewTitle: "Contexto.",
        overview:
          "Renne Ceron necesitaba una landing page que mostrara mejor la parte artística del servicio sin complicar el camino al contacto. El sitio debía destacar los resultados de transformación, comunicar la marca con más personalidad y usar CTAs de una forma que ayudara a generar leads. Construí una experiencia one-page más limpia, con mejor contraste, mejor flujo y pruebas visuales que ayudan a generar confianza y acción.",
        services: ["Diseño de landing page", "Narrativa visual", "Flujo de CTA enfocado en leads"],
        outcomes: [
          "Narrativa visual más fuerte para la marca personal",
          "Mejor uso de pruebas visuales antes y después",
          "Un camino más claro desde el interés hasta el contacto directo",
        ],
      },
      {
        ...baseClientConfig.gallery.items[3],
        category: "Jardinería",
        title: "Landing page de jardinería para Always Green",
        summary:
          "Una landing page de jardinería creada para presentar los servicios con más confianza, mostrar mejor el trabajo exterior y llevar al visitante local hacia consultas directas.",
        overviewTitle: "Contexto.",
        overview:
          "Always Green necesitaba una landing page que hiciera ver el negocio más establecido sin complicar el mensaje para quienes buscan ayuda rápido. El objetivo era presentar la oferta de jardinería con una estructura más clara, usar visuales que reforzaran la confianza y dejar más visible el siguiente paso en toda la página. Organicé la experiencia con una jerarquía más limpia, mejor presentación de servicios y puntos de conversión naturales.",
        services: ["Diseño de landing page", "Posicionamiento de servicios", "Flujo de CTA enfocado en leads"],
        outcomes: [
          "Presentación más clara de los servicios de jardinería",
          "Mayor confianza visual para visitantes nuevos",
          "Un camino más directo desde la visita hasta la consulta",
        ],
      },
      {
        ...baseClientConfig.gallery.items[4],
        category: "Limpieza",
        title: "Landing page de servicios para Amazing Clean",
        summary:
          "Una landing page para servicios de limpieza creada para comunicar confiabilidad más rápido, simplificar la oferta y convertir el interés en más contactos listos para consultar.",
        overviewTitle: "Contexto.",
        overview:
          "Amazing Clean necesitaba una landing page más pulida y más fácil de entender para personas que buscan ayuda de limpieza sin perder tiempo. El objetivo era dejar más clara la promesa del servicio, reforzar la credibilidad con una mejor presentación visual y reducir la fricción al momento de escribir. Organicé la página con una secuencia más limpia, mensajes más seguros y CTAs visibles durante toda la experiencia.",
        services: ["Diseño de landing page", "Claridad de oferta", "Estructura de CTA enfocada en conversión"],
        outcomes: [
          "Una presentación del servicio más clara y más creíble",
          "Mejor visibilidad para acciones clave de contacto",
          "Un flujo más simple desde el interés hasta la consulta",
        ],
      },
    ],
  },
  contact: {
    ...baseClientConfig.contact,
    serviceArea: "Utah y proyectos remotos",
    responseTime: "Normalmente respondemos dentro de 15 minutos",
  },
  whatsapp: {
    ...baseClientConfig.whatsapp,
    message: "Hola Lesliee, quiero ayuda para mejorar mi sitio web y mi presencia online.",
    heroButtonLabel: "Escribir por WhatsApp",
    sectionButtonLabel: "Enviar mensaje por WhatsApp",
    desktopLabel: "Escribir por WhatsApp",
    mobileLabel: "Escribir por WhatsApp",
    subLabel: "",
  },
  contactSection: {
    ...baseClientConfig.contactSection,
    title: "Ponte en contacto hoy",
    description:
      "¿Lista para transformar la visión de tu negocio? Escríbenos para una consulta personalizada y descubre cómo impulsar tu proyecto.",
    callLabel: "Llamar",
    emailLabel: "Correo",
    whatsappLabel: "WhatsApp",
    serviceAreaLabel: "Área de servicio",
    responseTimeLabel: "Tiempo de respuesta",
  },
  form: {
    ...baseClientConfig.form,
    nameLabel: "Nombre completo",
    namePlaceholder: "Nombre completo",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "Correo electrónico",
    phoneLabel: "Número de teléfono",
    phonePlaceholder: "Número de teléfono",
    companyLabel: "Nombre de la empresa",
    companyPlaceholder: "Nombre de la empresa",
    serviceLabel: "Servicio",
    servicePlaceholder: "Servicio",
    budgetLabel: "Presupuesto",
    budgetPlaceholder: "Presupuesto",
    messageLabel: "Detalles del proyecto",
    messagePlaceholder: "Cuéntanos sobre tu proyecto...",
    submitLabel: "Quiero información",
    submittingLabel: "Enviando...",
    successMessage: "Gracias. Nos pondremos en contacto contigo pronto.",
    genericErrorMessage: "Algo salió mal. Inténtalo de nuevo.",
  },
  intakePage: {
    ...baseClientConfig.intakePage,
    meta: {
      title: "Cuéntanos sobre tu negocio | Lika Digital Marketing",
      description:
        "Comparte los detalles de tu negocio, tus objetivos y lo que necesitas para que Lika Digital Marketing pueda empezar a planear tu landing page.",
    },
    eyebrow: "Onboarding del proyecto",
    title: "Empecemos tu proyecto",
    description:
      "Usa este formulario para enviarnos la información que necesitamos y así planear tu landing page más rápido, alinear la oferta y empezar con la dirección correcta desde el primer día.",
    primaryCtaLabel: "Abrir formulario del proyecto",
    backHomeLabel: "Volver al inicio",
    highlightsTitle: "Qué preparar",
    highlights: [
      "El nombre de tu negocio, servicios y área de servicio",
      "La oferta principal o promoción que quieres destacar",
      "Branding, fotos, textos o referencias que ya tengas",
      "Tus objetivos, tiempos y la forma en que prefieres que te contactemos",
    ],
    formTitle: "Formulario para tu landing page",
    formDescription:
      "El formulario de Tally recoge los detalles que necesitamos para empezar con un brief claro en lugar de perder tiempo pidiendo información faltante después.",
    fallbackLinkLabel: "Abrir el formulario en una nueva pestaña",
    followUpText: "Lika Digital Marketing revisa cada envío y da seguimiento lo antes posible.",
    supportTitle: "¿Necesitas ayuda antes de enviarlo?",
    supportDescription:
      "Si aún te falta información o prefieres hablar primero sobre tu proyecto, contáctanos directamente y te ayudamos a completar el brief.",
  },
  portfolioPage: {
    backToProjectsLabel: "Volver a proyectos",
    detailLabels: {
      category: "Categoría",
      client: "Cliente",
      duration: "Duración",
      year: "Año",
    },
    summaryEyebrow: "Qué hice",
    summaryTitle: "Un resumen breve del proyecto",
    processEyebrow: "Cómo lo hice",
    processTitle: "El enfoque detrás de la landing page",
    resultsEyebrow: "En qué me enfoqué",
    resultsTitle: "Lo que la página buscaba mejorar",
    liveAccessEyebrow: "Acceso en vivo",
    liveAccessTitle: "Ver el sitio web en vivo.",
    liveAccessDescription:
      "Abre el sitio final para ver el proyecto publicado y recorrer la landing page completa directamente.",
    openPreviewLabel: "Ver sitio en vivo",
  },
  footer: {
    ...baseClientConfig.footer,
    tagline: "Sitios web, branding y apoyo en diseño digital para negocios que quieren una presencia online más fuerte.",
    secondaryText: "Ayudando a negocios a verse creíbles online y convertir más visitantes en consultas.",
  },
};

const localizedClientConfigs: Record<Locale, ClientConfig> = {
  en: baseClientConfig,
  es: spanishClientConfig,
};

export const clientConfig = baseClientConfig;

export function getClientConfig(locale: Locale = defaultLocale) {
  return localizedClientConfigs[locale];
}

export function getWhatsAppLink(whatsapp: Pick<WhatsAppConfig, "number" | "message">) {
  const params = new URLSearchParams({ text: whatsapp.message });
  return `https://wa.me/${whatsapp.number}?${params.toString()}`;
}

export function getGalleryProjectBySlug(locale: Locale, slug: string) {
  return getClientConfig(locale).gallery.items.find((item) => item.slug === slug);
}

export function getGalleryProjectSlugs(locale: Locale = defaultLocale) {
  return getClientConfig(locale).gallery.items.map((item) => item.slug);
}

function normalizeHexColor(color: string) {
  const trimmed = color.trim();
  const shortHex = /^#([\da-fA-F]{3})$/;

  if (shortHex.test(trimmed)) {
    const [, value] = trimmed.match(shortHex) ?? [];

    if (value) {
      return `#${value
        .split("")
        .map((character) => `${character}${character}`)
        .join("")}`;
    }
  }

  return /^#([\da-fA-F]{6})$/.test(trimmed) ? trimmed : null;
}

function hexToRgb(color: string) {
  const normalized = normalizeHexColor(color);

  if (!normalized) {
    return null;
  }

  return {
    red: Number.parseInt(normalized.slice(1, 3), 16),
    green: Number.parseInt(normalized.slice(3, 5), 16),
    blue: Number.parseInt(normalized.slice(5, 7), 16),
  };
}

function rgbToHex(red: number, green: number, blue: number) {
  return `#${[red, green, blue]
    .map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0"))
    .join("")}`;
}

function mixHexColors(baseColor: string, mixColor: string, amount: number) {
  const baseRgb = hexToRgb(baseColor);
  const mixRgb = hexToRgb(mixColor);

  if (!baseRgb || !mixRgb) {
    return baseColor;
  }

  return rgbToHex(
    baseRgb.red + (mixRgb.red - baseRgb.red) * amount,
    baseRgb.green + (mixRgb.green - baseRgb.green) * amount,
    baseRgb.blue + (mixRgb.blue - baseRgb.blue) * amount,
  );
}

function withAlpha(color: string, alpha: number) {
  const rgb = hexToRgb(color);

  if (!rgb) {
    return color;
  }

  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${alpha})`;
}

function getContrastForeground(color: string) {
  const rgb = hexToRgb(color);

  if (!rgb) {
    return "#ffffff";
  }

  const luminance = (0.299 * rgb.red + 0.587 * rgb.green + 0.114 * rgb.blue) / 255;
  return luminance > 0.64 ? "#0f172a" : "#ffffff";
}

export function getThemeStyleVariables(styles: ThemeStyles) {
  const activePalette = styles.palettes[styles.mode];
  const primaryColor = styles.quickColors?.primary ?? activePalette.colors.primary;
  const secondaryColor = styles.quickColors?.secondary ?? activePalette.colors.secondaryBackground;
  const accentColor = styles.quickColors?.accent ?? activePalette.colors.accent;

  return {
    "--theme-mode": styles.mode,
    "--page-background": activePalette.colors.pageBackground,
    "--section-background": activePalette.colors.sectionBackground,
    "--dark-background": activePalette.colors.darkBackground,
    "--hero-background": activePalette.colors.heroBackground,
    "--hero-overlay": activePalette.colors.heroOverlay,
    "--card-background": activePalette.colors.cardBackground,
    "--card-border": activePalette.colors.cardBorder,
    "--panel-background": activePalette.colors.panelBackground,
    "--panel-border": activePalette.colors.panelBorder,
    "--text-primary": activePalette.colors.textPrimary,
    "--text-muted": activePalette.colors.textMuted,
    "--text-inverse": activePalette.colors.textInverse,
    "--heading-color": activePalette.colors.heading,
    "--color-primary": primaryColor,
    "--color-primary-hover": mixHexColors(primaryColor, "#000000", 0.12),
    "--color-primary-foreground": getContrastForeground(primaryColor),
    "--color-primary-shadow": withAlpha(primaryColor, 0.26),
    "--color-secondary-background": secondaryColor,
    "--color-secondary-hover": mixHexColors(secondaryColor, styles.mode === "light" ? "#000000" : "#ffffff", styles.mode === "light" ? 0.04 : 0.08),
    "--color-secondary-foreground": getContrastForeground(secondaryColor),
    "--color-accent": accentColor,
    "--color-accent-soft": withAlpha(accentColor, 0.12),
    "--color-accent-glow": withAlpha(accentColor, 0.18),
    "--color-whatsapp": activePalette.colors.whatsapp,
    "--color-whatsapp-hover": activePalette.colors.whatsappHover,
    "--color-whatsapp-foreground": activePalette.colors.whatsappForeground,
    "--color-whatsapp-shadow": activePalette.colors.whatsappShadow,
    "--color-success-background": activePalette.colors.successBackground,
    "--color-success-foreground": activePalette.colors.successForeground,
    "--color-error-background": activePalette.colors.errorBackground,
    "--color-error-foreground": activePalette.colors.errorForeground,
    "--font-body": styles.typography.bodyFont,
    "--font-heading-weight": styles.typography.headingWeight,
    "--tracking-display": styles.typography.displayTracking,
    "--radius-section": styles.radii.section,
    "--radius-card": styles.radii.card,
    "--radius-button": styles.radii.button,
    "--section-space": styles.spacing.sectionY,
  } satisfies Record<string, string>;
}
