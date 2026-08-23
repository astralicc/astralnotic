import { c as createComponent, d as addAttribute, a as renderTemplate, b as createAstro, g as renderSlot, h as renderHead, r as renderComponent } from './astro/server_BQFwdXgv.mjs';
import 'kleur/colors';
/* empty css                              */
import 'clsx';
import { createClient } from '@supabase/supabase-js';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Projects/Personal/Portfolio/V6/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "alex chen \u2014 senior frontend engineer",
    description = "Personal developer website of Alex Chen."
  } = Astro2.props;
  const pathname = Astro2.url.pathname;
  const navItems = [
    { name: "about", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "experience", path: "/experience" }
  ];
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="h-full dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><!-- SEO Meta Tags --><title>", '</title><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><!-- Font Preloads (Official rektdeckard/departure-mono & Uncut Sans) --><link rel="preload" href="/fonts/DepartureMono-Regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="https://cdn.jsdelivr.net/gh/kasperflorio/Uncut-Sans@main/Fonts/WEB/fonts/UncutSans-Regular.woff2" as="font" type="font/woff2" crossorigin><!-- Astro View Transitions Engine -->', "<!-- Bulletproof Inline Theme Script (#2b2b2b Dark Mode | #e8e8e8 Light Mode) --><script>\n      (function () {\n        function getTargetTheme() {\n          if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n            return localStorage.getItem('theme');\n          }\n          return 'dark';\n        }\n\n        function applyTheme() {\n          var theme = getTargetTheme();\n          if (theme === 'dark') {\n            document.documentElement.classList.add('dark');\n          } else {\n            document.documentElement.classList.remove('dark');\n          }\n        }\n\n        // Apply immediately before DOM render\n        applyTheme();\n\n        // Global theme toggle function attached to window for bulletproof onclick binding\n        window.toggleTheme = function () {\n          var isDark = document.documentElement.classList.contains('dark');\n          if (isDark) {\n            document.documentElement.classList.remove('dark');\n            localStorage.setItem('theme', 'light');\n          } else {\n            document.documentElement.classList.add('dark');\n            localStorage.setItem('theme', 'dark');\n          }\n        };\n\n        // Re-apply theme synchronously on Astro View Transitions swap\n        document.addEventListener('astro:after-swap', applyTheme);\n      })();\n    <\/script>", '</head> <body class="min-h-full flex flex-col bg-[#e8e8e8] dark:bg-[#2b2b2b] text-[#1a1a1a] dark:text-[#e8e8e8] transition-colors duration-150 antialiased font-sans"> <div class="max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex-grow flex flex-col"> <!-- Minimal Sticky Header Navbar --> <header class="sticky top-0 z-50 w-full py-4 mb-10 flex items-center justify-between bg-[#e8e8e8]/90 dark:bg-[#2b2b2b]/90 backdrop-blur-md border-b border-neutral-300/40 dark:border-neutral-700/40 transition-colors duration-150"> <!-- Site Title on Left: alex chen --> <a href="/" class="font-pixel text-sm font-normal tracking-wide text-[#1a1a1a] dark:text-white hover:text-[#4B6B94] dark:hover:text-[#7B9EC8] transition-colors">\nalex chen\n</a> <!-- Center Nav & Right Theme Toggle --> <div class="flex items-center space-x-6"> <nav class="flex items-center space-x-5 text-xs font-pixel tracking-wide"> ', ' </nav> <!-- Single Theme Toggle Icon Button (\u23FE / \u2600) --> <button id="theme-toggle-btn" type="button" onclick="window.toggleTheme()" aria-label="Toggle theme mode" class="text-neutral-600 dark:text-neutral-300 hover:text-[#4B6B94] dark:hover:text-[#7B9EC8] transition-colors cursor-pointer font-pixel text-sm"> <span class="block dark:hidden">\u23FE</span> <span class="hidden dark:block">\u2600</span> </button> </div> </header> <!-- Main Content Area --> <main class="w-full flex-grow"> ', ' </main> <!-- Minimal Footer with "made with \u2665" --> <footer class="w-full py-8 border-t border-neutral-300/40 dark:border-neutral-700/40 flex items-center justify-between text-xs font-pixel text-neutral-500 dark:text-neutral-400 mt-16"> <div> <span>\xA9 ', ' alex chen</span> </div> <div class="flex items-center space-x-1.5"> <span>made with</span> <span class="text-red-500 text-xs inline-block">\u2665</span> </div> </footer> </div> <!-- Client Smooth Scroll Script -->  </body> </html>'])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), navItems.map((item) => {
    const isActive = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
    return renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(`transition-colors ${isActive ? "text-[#1a1a1a] dark:text-white underline underline-offset-[3px] decoration-[#4B6B94] dark:decoration-[#7B9EC8]" : "text-neutral-600 dark:text-neutral-400 hover:text-[#4B6B94] dark:hover:text-[#7B9EC8]"}`, "class")}> ${item.name} </a>`;
  }), renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear());
}, "D:/Projects/Personal/Portfolio/V6/src/layouts/BaseLayout.astro", void 0);

const supabaseUrl = "https://bseoyiyoqykafltzxdsl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZW95aXlvcXlrYWZsdHp4ZHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0ODgzNTIsImV4cCI6MjEwMzA2NDM1Mn0._mDVBaU0IAmqPxktRqY-q2VZ5I_zgi6uJSxXulvUmH0";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const FALLBACK_PROJECTS = [
  {
    slug: "craft-design-system",
    title: "Craft Design System",
    description: "Zero-runtime CSS design token engine and component primitives for enterprise web applications.",
    date: "2025",
    tags: ["React", "TypeScript", "Tailwind CSS", "Design Tokens", "WCAG 2.1"],
    featured: true,
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url: "/assets/craft-design-system.jpg",
    display_order: 1,
    problem: "Large frontend teams struggled with UI token fragmentation, inconsistent theme switching across micro-frontends, and CSS bundle bloat exceeding 180KB per page load.",
    user: "Enterprise frontend engineers, design system architects, and product designers building multi-brand web applications.",
    solution: "Architected a zero-runtime CSS design token engine that compiles W3C design token JSON into CSS custom properties and typed React component primitives at build time.",
    key_features: [
      "Zero-runtime CSS variable injection with instant light/dark mode toggling",
      "Fully accessible ARIA component primitives compliant with WCAG 2.1 AA",
      "Automated Figma-to-Code design token sync pipeline via GitHub Actions",
      "Tree-shakeable React 19 component library with strict TypeScript props"
    ],
    challenge: "Eliminating runtime style recalculations and FOUC during server-side rendering (SSR) while supporting dynamic theme overrides across micro-frontends.",
    impact: "Reduced CSS bundle size by 68% (from 180KB to 57KB), improved Largest Contentful Paint (LCP) by 420ms, and adopted by 15,000+ active developers across 12 product teams.",
    tech_choices: [
      { tech: "React 19", rationale: "Leveraged Server Components and compiler auto-memoization to minimize client JS footprint." },
      { tech: "TypeScript", rationale: "Enforced strict design token auto-completion and prop validation across cross-functional teams." },
      { tech: "Tailwind CSS", rationale: "Used utility-first CSS variables as design token primitives for consistent spacing and color scales." }
    ]
  },
  {
    slug: "antigravity-analytics",
    title: "Antigravity Analytics",
    description: "Privacy-focused, real-time web telemetry and performance monitoring dashboard.",
    date: "2024",
    tags: ["Astro", "TypeScript", "Three.js", "WebGL", "Shaders"],
    featured: true,
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url: "/assets/antigravity-analytics.jpg",
    display_order: 2,
    problem: "Traditional analytics tools introduced heavy 40KB+ tracking scripts, blocked main thread rendering, and compromised user data privacy.",
    user: "Product managers, performance engineers, and privacy-conscious web creators requiring real-time web telemetry.",
    solution: "Engineered an edge-computed analytics dashboard powered by Astro SSG, WebGL GPU visualization shaders, and a lightweight 1.2KB telemetry collector.",
    key_features: [
      "1.2KB async telemetry script with zero main-thread blocking",
      "Real-time 3D WebGL particle visualization of active visitor traffic",
      "Cookieless privacy preservation compliant with GDPR & CCPA standards",
      "Instant Core Web Vitals (LCP, INP, CLS) performance score reporting"
    ],
    challenge: "Rendering 50,000 concurrent visitor data nodes in a WebGL canvas at 60 FPS without overheating mobile GPU devices.",
    impact: "Processed 10M+ daily events with sub-5ms edge latency, reducing telemetry script load time from 450ms to 12ms.",
    tech_choices: [
      { tech: "Astro v4", rationale: "Delivered static HTML shell with zero client JavaScript overhead for the primary dashboard UI." },
      { tech: "Three.js & GLSL Shaders", rationale: "Offloaded 3D data point rendering to WebGL shaders for smooth 60 FPS data visualization." },
      { tech: "TypeScript", rationale: "Ensured end-to-end data safety between Cloudflare Workers edge functions and frontend state." }
    ]
  },
  {
    slug: "minimal-astro-starter",
    title: "Minimal Astro Starter",
    description: "High-performance editorial portfolio template built with Astro, Tailwind CSS, and MDX.",
    date: "2024",
    tags: ["Astro", "Tailwind CSS", "MDX", "TypeScript"],
    featured: false,
    github_url: "https://github.com",
    live_url: "https://example.com",
    image_url: "/assets/minimal-astro-starter.jpg",
    display_order: 3,
    problem: "Developers needed an ultra-clean, brutalist-minimal portfolio boilerplate with perfect 100 Lighthouse scores and built-in View Transitions.",
    user: "Creative developers, software engineers, and digital designers showcasing personal projects and technical essays.",
    solution: "Created an open-source Astro 4 starter kit featuring dark/light mode FOUC prevention, Lenis smooth scroll engine, and typed MDX content collections.",
    key_features: [
      "100/100 Google Lighthouse performance, accessibility, and SEO score",
      "Zero-FOUC theme engine with Astro View Transitions support",
      "Lenis smooth scrolling integrated with requestAnimationFrame sync",
      "Pre-configured Zod content collections for projects and work experience"
    ],
    challenge: "Ensuring client-side scripts like Lenis scroll and theme state re-synchronize cleanly across Astro View Transitions page swaps.",
    impact: "Starred by 1,200+ GitHub developers and cloned over 8,000 times as a benchmark developer portfolio boilerplate.",
    tech_choices: [
      { tech: "Astro v4", rationale: "Selected for island architecture and zero client JS compilation for static text routes." },
      { tech: "Tailwind CSS", rationale: "Provided low-contrast border utilities and responsive continuous grid alignment." },
      { tech: "MDX", rationale: "Allowed embedding interactive UI components seamlessly within markdown blog posts and case studies." }
    ]
  }
];
const FALLBACK_EXPERIENCES = [
  {
    company: "V6 Studio",
    role: "Lead Frontend Engineer",
    start_date: "2023",
    end_date: "Present",
    location: "San Francisco, CA",
    highlights: [
      "Architected micro-frontend design system component engine serving 12+ enterprise product teams.",
      "Reduced Largest Contentful Paint (LCP) by 48% across core web applications."
    ],
    display_order: 1
  },
  {
    company: "Astro Core Team",
    role: "Senior UI Architect",
    start_date: "2021",
    end_date: "2023",
    location: "Remote",
    highlights: [
      "Engineered core static site generator build pipeline utilities and zero-runtime CSS tokens.",
      "Mentored cross-functional team of 8 engineers in web accessibility and WCAG 2.1 compliance."
    ],
    display_order: 2
  }
];
const FALLBACK_ACHIEVEMENTS = [
  {
    date: "2025.04",
    title: "1st Place Winner — Global Web Vitals Hackathon",
    entity: "Google Web Developers",
    impact: "Architected a zero-bundle Astro SSG compiler engine reducing LCP by 54% across 10,000+ benchmark routes.",
    display_order: 1
  },
  {
    date: "2024.11",
    title: "Design System Lead & Open Source Maintainer",
    entity: "Astro & Tailwind CSS Community",
    impact: "Maintained accessible UI component primitives consumed by 15,000+ active frontend developers.",
    display_order: 2
  },
  {
    date: "2023.08",
    title: "Certified Web Accessibility Specialist (WAS)",
    entity: "IAAP (Accessibility Association)",
    impact: "Formal certification in WCAG 2.1 AA/AAA compliance audit methodologies and screen reader ergonomics.",
    display_order: 3
  },
  {
    date: "2024.06",
    title: "Technical Keynote Speaker — JSConf West",
    entity: "JSConf Organization",
    impact: 'Delivered keynote on "Zero-Runtime CSS in Micro-Frontend Ecosystems" to an audience of 800+ engineers.',
    display_order: 4
  }
];
const FALLBACK_CURRENTLY = [
  { action: "Reading", detail: "Designing Data-Intensive Applications", display_order: 1 },
  { action: "Building", detail: "Open-source Astro primitives", display_order: 2 },
  { action: "Exploring", detail: "Canvas API & WebGL shaders", display_order: 3 }
];
async function getProjects() {
  try {
    const { data, error } = await supabase.from("projects").select("*").order("display_order", { ascending: true });
    if (error || !data || data.length === 0) {
      return FALLBACK_PROJECTS;
    }
    return data;
  } catch {
    return FALLBACK_PROJECTS;
  }
}
async function getProjectBySlug(slug) {
  try {
    const { data, error } = await supabase.from("projects").select("*").eq("slug", slug).single();
    if (error || !data) {
      return FALLBACK_PROJECTS.find((p) => p.slug === slug) || null;
    }
    return data;
  } catch {
    return FALLBACK_PROJECTS.find((p) => p.slug === slug) || null;
  }
}
async function getExperiences() {
  try {
    const { data, error } = await supabase.from("experiences").select("*").order("display_order", { ascending: true });
    if (error || !data || data.length === 0) {
      return FALLBACK_EXPERIENCES;
    }
    return data;
  } catch {
    return FALLBACK_EXPERIENCES;
  }
}
async function getAchievements() {
  try {
    const { data, error } = await supabase.from("achievements").select("*").order("display_order", { ascending: true });
    if (error || !data || data.length === 0) {
      return FALLBACK_ACHIEVEMENTS;
    }
    return data;
  } catch {
    return FALLBACK_ACHIEVEMENTS;
  }
}
async function getCurrentlyItems() {
  try {
    const { data, error } = await supabase.from("currently").select("*").order("display_order", { ascending: true });
    if (error || !data || data.length === 0) {
      return FALLBACK_CURRENTLY;
    }
    return data;
  } catch {
    return FALLBACK_CURRENTLY;
  }
}

export { $$BaseLayout as $, getAchievements as a, getProjects as b, getCurrentlyItems as c, getProjectBySlug as d, getExperiences as g };
