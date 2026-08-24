import { createClient } from '@supabase/supabase-js';

// 1. Supabase Environment Variables (with fallback to your active bseoyiyoqykafltzxdsl database)
const supabaseUrl =
  import.meta.env.PUBLIC_SUPABASE_URL ||
  'https://bseoyiyoqykafltzxdsl.supabase.co';

const supabaseAnonKey =
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZW95aXlvcXlrYWZsdHp4ZHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0ODgzNTIsImV4cCI6MjEwMzA2NDM1Mn0._mDVBaU0IAmqPxktRqY-q2VZ5I_zgi6uJSxXulvUmH0';

// 2. Initialize Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 3. TypeScript Interfaces for Supabase Tables

export interface Project {
  id?: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured?: boolean;
  github_url?: string | null;
  live_url?: string | null;
  image_url?: string | null;
  display_order: number;
  problem?: string | null;
  user?: string | null;
  solution?: string | null;
  key_features?: string[] | null;
  challenge?: string | null;
  impact?: string | null;
  tech_choices?: Array<{ tech: string; rationale: string }> | null;
}

export interface Experience {
  id?: string;
  company: string;
  role: string;
  start_date: string;
  end_date: string;
  type?: 'Work' | 'Leadership' | 'Achievement';
  location: string;
  description?: string;
  highlights?: string[];
  display_order: number;
}

export interface Achievement {
  id?: string;
  date: string;
  title: string;
  entity: string;
  impact: string;
  display_order: number;
}

export interface CurrentlyItem {
  id?: string;
  action: string;
  detail: string;
  display_order?: number;
}

export interface ConnectLink {
  label: string;
  url: string;
}

export interface SiteMetadata {
  id?: string;
  key: string;
  value: any;
}

// 4. Fallback Static Data

const FALLBACK_PROJECTS: Project[] = [
  {
    slug: 'craft-design-system',
    title: 'Craft Design System',
    description: 'Zero-runtime CSS design token engine and component primitives for enterprise web applications.',
    date: '2025',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Design Tokens', 'WCAG 2.1'],
    featured: true,
    github_url: 'https://github.com',
    live_url: 'https://example.com',
    image_url: '/assets/craft-design-system.jpg',
    display_order: 1,
    problem: 'Large frontend teams struggled with UI token fragmentation, inconsistent theme switching across micro-frontends, and CSS bundle bloat exceeding 180KB per page load.',
    user: 'Enterprise frontend engineers, design system architects, and product designers building multi-brand web applications.',
    solution: 'Architected a zero-runtime CSS design token engine that compiles W3C design token JSON into CSS custom properties and typed React component primitives at build time.',
    key_features: [
      'Zero-runtime CSS variable injection with instant light/dark mode toggling',
      'Fully accessible ARIA component primitives compliant with WCAG 2.1 AA',
      'Automated Figma-to-Code design token sync pipeline via GitHub Actions',
      'Tree-shakeable React 19 component library with strict TypeScript props',
    ],
    challenge: 'Eliminating runtime style recalculations and FOUC during server-side rendering (SSR) while supporting dynamic theme overrides across micro-frontends.',
    impact: 'Reduced CSS bundle size by 68% (from 180KB to 57KB), improved Largest Contentful Paint (LCP) by 420ms, and adopted by 15,000+ active developers across 12 product teams.',
    tech_choices: [
      { tech: 'React 19', rationale: 'Leveraged Server Components and compiler auto-memoization to minimize client JS footprint.' },
      { tech: 'TypeScript', rationale: 'Enforced strict design token auto-completion and prop validation across cross-functional teams.' },
      { tech: 'Tailwind CSS', rationale: 'Used utility-first CSS variables as design token primitives for consistent spacing and color scales.' },
    ],
  },
  {
    slug: 'antigravity-analytics',
    title: 'Antigravity Analytics',
    description: 'Privacy-focused, real-time web telemetry and performance monitoring dashboard.',
    date: '2024',
    tags: ['Astro', 'TypeScript', 'Three.js', 'WebGL', 'Shaders'],
    featured: true,
    github_url: 'https://github.com',
    live_url: 'https://example.com',
    image_url: '/assets/antigravity-analytics.jpg',
    display_order: 2,
    problem: 'Traditional analytics tools introduced heavy 40KB+ tracking scripts, blocked main thread rendering, and compromised user data privacy.',
    user: 'Product managers, performance engineers, and privacy-conscious web creators requiring real-time web telemetry.',
    solution: 'Engineered an edge-computed analytics dashboard powered by Astro SSG, WebGL GPU visualization shaders, and a lightweight 1.2KB telemetry collector.',
    key_features: [
      '1.2KB async telemetry script with zero main-thread blocking',
      'Real-time 3D WebGL particle visualization of active visitor traffic',
      'Cookieless privacy preservation compliant with GDPR & CCPA standards',
      'Instant Core Web Vitals (LCP, INP, CLS) performance score reporting',
    ],
    challenge: 'Rendering 50,000 concurrent visitor data nodes in a WebGL canvas at 60 FPS without overheating mobile GPU devices.',
    impact: 'Processed 10M+ daily events with sub-5ms edge latency, reducing telemetry script load time from 450ms to 12ms.',
    tech_choices: [
      { tech: 'Astro v4', rationale: 'Delivered static HTML shell with zero client JavaScript overhead for the primary dashboard UI.' },
      { tech: 'Three.js & GLSL Shaders', rationale: 'Offloaded 3D data point rendering to WebGL shaders for smooth 60 FPS data visualization.' },
      { tech: 'TypeScript', rationale: 'Ensured end-to-end data safety between Cloudflare Workers edge functions and frontend state.' },
    ],
  },
  {
    slug: 'minimal-astro-starter',
    title: 'Minimal Astro Starter',
    description: 'High-performance editorial portfolio template built with Astro, Tailwind CSS, and MDX.',
    date: '2024',
    tags: ['Astro', 'Tailwind CSS', 'MDX', 'TypeScript'],
    featured: false,
    github_url: 'https://github.com',
    live_url: 'https://example.com',
    image_url: '/assets/minimal-astro-starter.jpg',
    display_order: 3,
    problem: 'Developers needed an ultra-clean, brutalist-minimal portfolio boilerplate with perfect 100 Lighthouse scores and built-in View Transitions.',
    user: 'Creative developers, software engineers, and digital designers showcasing personal projects and technical essays.',
    solution: 'Created an open-source Astro 4 starter kit featuring dark/light mode FOUC prevention, Lenis smooth scroll engine, and typed MDX content collections.',
    key_features: [
      '100/100 Google Lighthouse performance, accessibility, and SEO score',
      'Zero-FOUC theme engine with Astro View Transitions support',
      'Lenis smooth scrolling integrated with requestAnimationFrame sync',
      'Pre-configured Zod content collections for projects and work experience',
    ],
    challenge: 'Ensuring client-side scripts like Lenis scroll and theme state re-synchronize cleanly across Astro View Transitions page swaps.',
    impact: 'Starred by 1,200+ GitHub developers and cloned over 8,000 times as a benchmark developer portfolio boilerplate.',
    tech_choices: [
      { tech: 'Astro v4', rationale: 'Selected for island architecture and zero client JS compilation for static text routes.' },
      { tech: 'Tailwind CSS', rationale: 'Provided low-contrast border utilities and responsive continuous grid alignment.' },
      { tech: 'MDX', rationale: 'Allowed embedding interactive UI components seamlessly within markdown blog posts and case studies.' },
    ],
  },
];

const FALLBACK_EXPERIENCES: Experience[] = [
  {
    company: 'V6 Studio',
    role: 'Lead Frontend Engineer',
    start_date: '2023',
    end_date: 'Present',
    location: 'San Francisco, CA',
    highlights: [
      'Architected micro-frontend design system component engine serving 12+ enterprise product teams.',
      'Reduced Largest Contentful Paint (LCP) by 48% across core web applications.',
    ],
    display_order: 1,
  },
  {
    company: 'Astro Core Team',
    role: 'Senior UI Architect',
    start_date: '2021',
    end_date: '2023',
    location: 'Remote',
    highlights: [
      'Engineered core static site generator build pipeline utilities and zero-runtime CSS tokens.',
      'Mentored cross-functional team of 8 engineers in web accessibility and WCAG 2.1 compliance.',
    ],
    display_order: 2,
  },
];

const FALLBACK_ACHIEVEMENTS: Achievement[] = [
  {
    date: '2025.04',
    title: '1st Place Winner — Global Web Vitals Hackathon',
    entity: 'Google Web Developers',
    impact: 'Architected a zero-bundle Astro SSG compiler engine reducing LCP by 54% across 10,000+ benchmark routes.',
    display_order: 1,
  },
  {
    date: '2024.11',
    title: 'Design System Lead & Open Source Maintainer',
    entity: 'Astro & Tailwind CSS Community',
    impact: 'Maintained accessible UI component primitives consumed by 15,000+ active frontend developers.',
    display_order: 2,
  },
  {
    date: '2023.08',
    title: 'Certified Web Accessibility Specialist (WAS)',
    entity: 'IAAP (Accessibility Association)',
    impact: 'Formal certification in WCAG 2.1 AA/AAA compliance audit methodologies and screen reader ergonomics.',
    display_order: 3,
  },
  {
    date: '2024.06',
    title: 'Technical Keynote Speaker — JSConf West',
    entity: 'JSConf Organization',
    impact: 'Delivered keynote on "Zero-Runtime CSS in Micro-Frontend Ecosystems" to an audience of 800+ engineers.',
    display_order: 4,
  },
];

const FALLBACK_CURRENTLY: CurrentlyItem[] = [
  { action: 'Reading', detail: 'Designing Data-Intensive Applications', display_order: 1 },
  { action: 'Building', detail: 'Open-source Astro primitives', display_order: 2 },
  { action: 'Exploring', detail: 'Canvas API & WebGL shaders', display_order: 3 },
];

const FALLBACK_CONNECT_LINKS: ConnectLink[] = [
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'Email', url: 'mailto:alex@example.com' },
];

const FALLBACK_PROFILE = {
  name: 'Alex Chen',
  short_name: 'chen',
  roles: ['senior frontend engineer', 'ui/ux architect'],
  bio: [
    "I'm Alex, a frontend engineer and creative technologist based in San Francisco. Currently, I'm leading web application architecture and design systems at V6 Studio, and previously helped build core UI component engines at Astro Core.",
    "I specialize in zero-runtime CSS tokens, React 19 concurrent rendering pipelines, and accessible WCAG 2.1 component primitives. Outside of work, I spend time drawing, tinkering with open-source utilities, and exploring minimalist web design.",
  ],
  connect_links: FALLBACK_CONNECT_LINKS,
};

// 5. Rich Text & Formatting Utilities

export function formatRichText(text: string | null | undefined): string {
  if (!text) return '';
  // Convert Markdown **bold** to <strong>bold</strong>
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Convert Markdown *italic* to <em>italic</em>
  formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
  return formatted;
}

// 6. Data Fetching Functions

export async function getProfile() {
  try {
    const { data, error } = await supabase
      .from('site_metadata')
      .select('*');

    if (error || !data || data.length === 0) {
      return FALLBACK_PROFILE;
    }

    const metadataMap: Record<string, any> = {};
    data.forEach((row) => {
      metadataMap[row.key] = row.value;
    });

    const fullName = metadataMap.name || FALLBACK_PROFILE.name;
    const computedLastName = metadataMap.short_name || metadataMap.last_name || (fullName ? fullName.split(' ').slice(-1)[0] : 'chen');

    return {
      name: fullName,
      short_name: computedLastName,
      roles: metadataMap.roles || FALLBACK_PROFILE.roles,
      bio: metadataMap.bio || FALLBACK_PROFILE.bio,
      connect_links: metadataMap.connect_links || FALLBACK_PROFILE.connect_links,
    };
  } catch {
    return FALLBACK_PROFILE;
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return FALLBACK_PROJECTS;
    }
    return data as Project[];
  } catch {
    return FALLBACK_PROJECTS;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      return FALLBACK_PROJECTS.find((p) => p.slug === slug) || null;
    }
    return data as Project;
  } catch {
    return FALLBACK_PROJECTS.find((p) => p.slug === slug) || null;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('display_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return FALLBACK_EXPERIENCES;
    }
    return data as Experience[];
  } catch {
    return FALLBACK_EXPERIENCES;
  }
}

export async function getAchievements(): Promise<Achievement[]> {
  try {
    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .order('display_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return FALLBACK_ACHIEVEMENTS;
    }
    return data as Achievement[];
  } catch {
    return FALLBACK_ACHIEVEMENTS;
  }
}

export async function getCurrentlyItems(): Promise<CurrentlyItem[]> {
  try {
    const { data, error } = await supabase
      .from('currently')
      .select('*')
      .order('display_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return FALLBACK_CURRENTLY;
    }
    return data as CurrentlyItem[];
  } catch {
    return FALLBACK_CURRENTLY;
  }
}

// 7. Supabase Storage Image Upload Helpers

export async function uploadProjectImage(
  file: File,
  bucketName = 'portfolio-images'
): Promise<{ publicUrl: string | null; error: string | null }> {
  try {
    const fileExt = file.name.split('.').pop() || 'png';
    const cleanFileName = file.name
      .replace(/\.[^/.]+$/, '')
      .replace(/[^a-zA-Z0-9_-]/g, '_');
    const filePath = `projects/${Date.now()}_${cleanFileName}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (uploadError) {
      return { publicUrl: null, error: uploadError.message };
    }

    const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
    return { publicUrl: data.publicUrl, error: null };
  } catch (err: any) {
    return { publicUrl: null, error: err?.message || 'Failed to upload image' };
  }
}

export async function updateProjectImage(
  slug: string,
  imageUrl: string
): Promise<{ success: boolean; error: string | null }> {
  try {
    const { error } = await supabase
      .from('projects')
      .update({ image_url: imageUrl })
      .eq('slug', slug);

    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to update project' };
  }
}
