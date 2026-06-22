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
  previewTabLabel: string;
  caseStudyTabLabel: string;
  previewSectionEyebrow: string;
  previewSectionTitle: string;
  previewSectionDescription: string;
  liveAccessEyebrow: string;
  liveAccessTitle: string;
  liveAccessDescription: string;
  openPreviewLabel: string;
  projectScopeEyebrow: string;
  projectScopeTitle: string;
  highlightsEyebrow: string;
  similarProjectEyebrow: string;
  similarProjectTitle: string;
  similarProjectDescription: string;
  startProjectLabel: string;
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
    title: "Solution-based digital projects",
    description:
      "A look at the kinds of branding, websites, and launch assets we create to help businesses look polished and ready to convert.",
    allFilterLabel: "All",
    viewProjectLabel: "View project",
    emptyStateLabel: "No projects in this category yet.",
    items: [
      {
        slug: "brand-product-presentation",
        category: "Branding",
        title: "Branding and product presentation",
        client: "Glowhaus Beauty",
        duration: "3 weeks",
        year: "2026",
        summary:
          "A premium product presentation system built to make a new beauty brand look polished, consistent, and launch-ready across digital touchpoints.",
        overviewTitle: "Background.",
        overview:
          "Glowhaus Beauty needed a sharper visual system before launching new product drops online. The initial materials felt disconnected across packaging, social previews, and the website, which weakened trust at the first point of contact. We developed a cleaner brand presentation direction focused on luxury cues, tighter hierarchy, and visual consistency so the brand could feel more established from the first impression.",
        services: ["Brand identity", "Art direction", "Product presentation"],
        outcomes: [
          "Stronger visual consistency across launch assets",
          "More premium first impression for new visitors",
          "Clearer product storytelling for social and web",
        ],
        images: [
          {
            src: "/images/gallery/web1.png",
            label: "Glowhaus homepage presentation",
            alt: "Glowhaus Beauty branding showcase",
            accent: "cyan",
          },
          {
            src: "/images/assets/branding.png",
            label: "Brand identity board",
            alt: "Glowhaus Beauty brand identity board",
            accent: "rose",
          },
        ],
        image: {
          src: "/images/gallery/web1.png",
          label: "Gallery 01",
          alt: "Branding and product presentation showcase image",
          accent: "cyan",
        },
      },
      {
        slug: "landing-page-conversion-design",
        category: "Websites",
        title: "Landing page and conversion design",
        client: "Edup.ai",
        duration: "2 weeks",
        year: "2026",
        summary:
          "A conversion-led landing page for an AI education product, designed to explain the offer faster and move visitors toward sign-up with less friction.",
        overviewTitle: "Background.",
        overview:
          "Edup.ai was building momentum around its AI-assisted math feedback experience, but its landing page was not doing enough to support that growth. The product concept was compelling, yet the interface hierarchy and visual storytelling made it harder for visitors to quickly understand the value. We redesigned the page around clarity, stronger contrast, and a more guided conversion path so the product could feel credible and easier to act on.",
        services: ["Landing page design", "UX strategy", "Conversion structure"],
        outcomes: [
          "Clearer explanation of the product offer",
          "Stronger CTA visibility across the page",
          "More polished presentation for demos and outreach",
        ],
        images: [
          {
            src: "/images/gallery/web2.png",
            label: "Edup.ai preview",
            alt: "Edup.ai landing page preview",
            accent: "emerald",
          },
          {
            src: "/images/gallery/web7.png",
            label: "Edup.ai case study visual",
            alt: "Edup.ai case study visual panel",
            accent: "violet",
          },
        ],
        liveUrl: "#contact-form",
        image: {
          src: "/images/gallery/web2.png",
          label: "Gallery 02",
          alt: "Landing page and conversion design showcase image",
          accent: "emerald",
        },
      },
      {
        slug: "mobile-first-app-interface",
        category: "Apps",
        title: "Mobile-first app interface",
        client: "TaskFlow Mobile",
        duration: "4 weeks",
        year: "2026",
        summary:
          "A mobile product interface concept focused on smoother onboarding, cleaner screens, and a clearer path to first-time user activation.",
        overviewTitle: "Background.",
        overview:
          "TaskFlow Mobile needed an app interface that felt easier to navigate and less overwhelming for first-time users. The original experience surfaced too much information too early, which made onboarding feel heavier than it needed to be. We simplified the visual system, tightened the core screens, and reworked the journey around faster comprehension and easier action on smaller devices.",
        services: ["App UI design", "Onboarding UX", "Interaction design"],
        outcomes: [
          "Cleaner mobile navigation patterns",
          "Better onboarding clarity for new users",
          "A more modern, product-ready interface system",
        ],
        images: [
          {
            src: "/images/gallery/web3.png",
            label: "TaskFlow interface",
            alt: "TaskFlow mobile app interface showcase",
            accent: "violet",
          },
          {
            src: "/images/assets/app-dev.png",
            label: "App concept visual",
            alt: "App development concept visual",
            accent: "cyan",
          },
        ],
        image: {
          src: "/images/gallery/web3.png",
          label: "Gallery 03",
          alt: "Mobile-first app interface showcase image",
          accent: "violet",
        },
      },
      {
        slug: "brand-identity-system",
        category: "Branding",
        title: "Brand identity system",
        client: "Northline Studio",
        duration: "3 weeks",
        year: "2026",
        summary:
          "A structured visual identity system built to help a creative brand present itself more consistently across client-facing channels.",
        overviewTitle: "Background.",
        overview:
          "Northline Studio had strong creative work but lacked a visual identity system that tied everything together. The brand needed a more unified way to show up across proposals, web materials, and presentation graphics. We created an identity direction with stronger typography, repeatable layout rules, and a more distinct visual language so the studio could feel more established and recognizable.",
        services: ["Identity system", "Typography direction", "Brand toolkit"],
        outcomes: [
          "More consistent branding across touchpoints",
          "A clearer visual language for client materials",
          "Faster design execution with reusable brand rules",
        ],
        images: [
          {
            src: "/images/gallery/web4.png",
            label: "Northline brand system",
            alt: "Northline Studio brand identity system showcase",
            accent: "rose",
          },
          {
            src: "/images/assets/logo-design.png",
            label: "Identity applications",
            alt: "Logo design and identity applications",
            accent: "amber",
          },
        ],
        image: {
          src: "/images/gallery/web4.png",
          label: "Gallery 04",
          alt: "Brand identity showcase image",
          accent: "rose",
        },
      },
      {
        slug: "digital-campaign-visuals",
        category: "Marketing",
        title: "Digital campaign visuals",
        client: "Vista Dental",
        duration: "10 days",
        year: "2026",
        summary:
          "A campaign visual kit created to support paid traffic, social promotions, and cleaner messaging across a local service brand.",
        overviewTitle: "Background.",
        overview:
          "Vista Dental needed campaign visuals that looked more aligned with the quality of the service it was offering. Existing creative lacked consistency and did not give the campaigns enough visual strength to stand out. We created a refreshed set of digital assets with clearer messaging structure, more cohesive art direction, and reusable templates for ads and web placements.",
        services: ["Campaign design", "Ad creative", "Messaging hierarchy"],
        outcomes: [
          "More cohesive visuals across paid and organic channels",
          "Stronger ad-ready asset system for launch cycles",
          "Cleaner visual hierarchy for promotional messaging",
        ],
        images: [
          {
            src: "/images/gallery/web5.png",
            label: "Vista campaign set",
            alt: "Vista Dental digital campaign showcase",
            accent: "amber",
          },
          {
            src: "/images/assets/digital-marketing.png",
            label: "Marketing concept visual",
            alt: "Digital marketing concept visual",
            accent: "emerald",
          },
        ],
        image: {
          src: "/images/gallery/web5.png",
          label: "Gallery 05",
          alt: "Digital marketing showcase image",
          accent: "amber",
        },
      },
      {
        slug: "creative-strategy-planning",
        category: "Strategy",
        title: "Creative strategy and planning",
        client: "Summit Collective",
        duration: "2 weeks",
        year: "2026",
        summary:
          "A strategy presentation package designed to align positioning, page direction, and launch priorities before full design production.",
        overviewTitle: "Background.",
        overview:
          "Summit Collective needed a clearer strategic direction before investing deeper into design and development. There were too many disconnected ideas competing for attention, which made the brand feel less focused than it should have. We built a structured planning package that clarified the audience, offer hierarchy, messaging priorities, and visual direction so execution could move faster with fewer revisions.",
        services: ["Creative strategy", "Offer positioning", "Launch planning"],
        outcomes: [
          "A clearer strategic direction before production",
          "Stronger alignment across messaging and visuals",
          "Faster decision-making during execution",
        ],
        images: [
          {
            src: "/images/gallery/web6.png",
            label: "Strategy planning deck",
            alt: "Creative strategy planning showcase",
            accent: "cyan",
          },
          {
            src: "/images/assets/why-choose-us.png",
            label: "Planning support visual",
            alt: "Creative planning support visual",
            accent: "violet",
          },
        ],
        image: {
          src: "/images/gallery/web6.png",
          label: "Gallery 06",
          alt: "Agency visual showcase image",
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
    title: "Tell us about your business before we start your landing page.",
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
    previewTabLabel: "Preview",
    caseStudyTabLabel: "Case Study",
    previewSectionEyebrow: "Project Preview",
    previewSectionTitle: "Visual direction and polished presentation",
    previewSectionDescription:
      "This view highlights the main presentation layer of the project so visitors can quickly understand the look, feel, and quality of the final work before reading the full case study.",
    liveAccessEyebrow: "Live Access",
    liveAccessTitle: "Open the project preview.",
    liveAccessDescription:
      "Use the preview link to open the live destination when one is available, or keep browsing the visuals here for a quick look at the project direction.",
    openPreviewLabel: "Open Preview",
    projectScopeEyebrow: "Project Scope",
    projectScopeTitle: "What was delivered",
    highlightsEyebrow: "Highlights",
    similarProjectEyebrow: "Need something similar?",
    similarProjectTitle: "Let's build your next project.",
    similarProjectDescription:
      "We design landing pages, branding systems, and digital experiences that make businesses look more credible and convert better.",
    startProjectLabel: "Start Your Project",
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
    title: "Proyectos digitales enfocados en soluciones",
    description:
      "Una muestra del tipo de branding, sitios web y activos de lanzamiento que creamos para que los negocios se vean pulidos y listos para convertir.",
    allFilterLabel: "Todos",
    viewProjectLabel: "Ver proyecto",
    emptyStateLabel: "Todavía no hay proyectos en esta categoría.",
    items: [
      {
        ...baseClientConfig.gallery.items[0],
        category: "Branding",
        title: "Branding y presentación de producto",
        summary:
          "Un sistema de presentación premium creado para que una nueva marca de belleza se vea pulida, consistente y lista para lanzar en sus canales digitales.",
        overviewTitle: "Contexto.",
        overview:
          "Glowhaus Beauty necesitaba una dirección visual más sólida antes de lanzar nuevos productos online. Sus materiales iniciales se sentían desconectados entre empaque, redes sociales y sitio web, lo que debilitaba la confianza en el primer contacto. Desarrollamos una dirección de presentación más limpia con señales de lujo, mejor jerarquía y consistencia visual para que la marca se sintiera más establecida desde la primera impresión.",
        services: ["Identidad de marca", "Dirección de arte", "Presentación de producto"],
        outcomes: [
          "Mayor consistencia visual entre activos de lanzamiento",
          "Primera impresión más premium para nuevos visitantes",
          "Narrativa de producto más clara en web y redes sociales",
        ],
      },
      {
        ...baseClientConfig.gallery.items[1],
        category: "Sitios web",
        title: "Landing page y diseño para conversiones",
        summary:
          "Una landing page orientada a conversión para un producto de educación con IA, diseñada para explicar la oferta más rápido y mover a los visitantes al registro con menos fricción.",
        overviewTitle: "Contexto.",
        overview:
          "Edup.ai estaba ganando impulso alrededor de su experiencia de retroalimentación matemática asistida por IA, pero su landing page no apoyaba ese crecimiento lo suficiente. La idea del producto era fuerte, pero la jerarquía visual y la narrativa hacían más difícil entender rápidamente el valor. Rediseñamos la página con más claridad, mejor contraste y un recorrido de conversión más guiado para que el producto se sintiera más creíble y más fácil de accionar.",
        services: ["Diseño de landing page", "Estrategia UX", "Estructura de conversión"],
        outcomes: [
          "Explicación más clara de la oferta",
          "Mayor visibilidad de los CTA en toda la página",
          "Presentación más pulida para demos y outreach",
        ],
      },
      {
        ...baseClientConfig.gallery.items[2],
        category: "Apps",
        title: "Interfaz mobile-first para app",
        summary:
          "Un concepto de interfaz mobile-first enfocado en un onboarding más fluido, pantallas más limpias y un camino más claro hacia la activación del usuario.",
        overviewTitle: "Contexto.",
        overview:
          "TaskFlow Mobile necesitaba una interfaz que se sintiera más simple de navegar y menos abrumadora para usuarios nuevos. La experiencia original mostraba demasiada información demasiado pronto, haciendo el onboarding más pesado de lo necesario. Simplificamos el sistema visual, refinamos las pantallas clave y reestructuramos el flujo para una comprensión más rápida y una acción más fácil en dispositivos móviles.",
        services: ["Diseño UI para app", "UX de onboarding", "Diseño de interacción"],
        outcomes: [
          "Patrones de navegación móvil más claros",
          "Mejor claridad en el onboarding",
          "Un sistema de interfaz más moderno y listo para producto",
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
    title: "Cuéntanos sobre tu negocio antes de empezar tu landing page.",
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
    previewTabLabel: "Vista previa",
    caseStudyTabLabel: "Caso de estudio",
    previewSectionEyebrow: "Vista previa del proyecto",
    previewSectionTitle: "Dirección visual y presentación pulida",
    previewSectionDescription:
      "Esta vista destaca la capa principal de presentación del proyecto para que los visitantes entiendan rápidamente el look, la sensación y la calidad del trabajo final antes de leer el caso de estudio completo.",
    liveAccessEyebrow: "Acceso en vivo",
    liveAccessTitle: "Abre la vista previa del proyecto.",
    liveAccessDescription:
      "Usa el enlace de vista previa para abrir el destino en vivo cuando esté disponible, o sigue explorando las imágenes aquí para ver rápidamente la dirección del proyecto.",
    openPreviewLabel: "Abrir vista previa",
    projectScopeEyebrow: "Alcance del proyecto",
    projectScopeTitle: "Qué se entregó",
    highlightsEyebrow: "Aspectos clave",
    similarProjectEyebrow: "¿Necesitas algo similar?",
    similarProjectTitle: "Construyamos tu próximo proyecto.",
    similarProjectDescription:
      "Diseñamos landing pages, sistemas de branding y experiencias digitales que hacen que los negocios se vean más creíbles y conviertan mejor.",
    startProjectLabel: "Inicia tu proyecto",
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
