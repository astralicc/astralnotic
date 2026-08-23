import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../chunks/astro/server_BQFwdXgv.mjs';
import 'kleur/colors';
import { b as getProjects, $ as $$BaseLayout } from '../chunks/supabase_XVBXStQC.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const sortedProjects = await getProjects();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects \u2014 Alex Chen", "description": "Selected software engineering projects and open-source tools." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-4 max-w-4xl mx-auto"> <!-- Header Section --> <div class="space-y-2 border-b border-[#d0d0d0] dark:border-[#404040] pb-6 mb-2"> <!-- Page Title: Projects (Capitalized) --> <h1 class="text-xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#e8e8e8] font-pixel">
Projects
</h1> <p class="text-sm font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed">
A selected collection of production web applications, open-source software, and design systems.
</p> </div> <!-- Quiet Editorial Stack (Side-by-Side 2-Column Split for media, Flat rows for text) --> <div> ${sortedProjects.map((project) => {
    const hasImage = Boolean(project.image_url);
    const hasLiveUrl = Boolean(project.live_url);
    const hasGithubUrl = Boolean(project.github_url);
    if (hasImage) {
      return renderTemplate`<article class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-8 border-b border-[#d0d0d0] dark:border-[#404040] last:border-0"> <!-- Left Column (5 Cols — Framed Media Window) --> <div class="md:col-span-5"> <a${addAttribute(`/projects/${project.slug}`, "href")} class="block aspect-[16/10] overflow-hidden rounded-md border border-[#d0d0d0] dark:border-[#404040] group"> <img${addAttribute(project.image_url, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"> </a> </div> <!-- Right Column (7 Cols — Content & Typography) --> <div class="md:col-span-7 space-y-3"> <!-- Header Row: Title Left, Year & Links Right --> <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"> <h2 class="text-base font-bold font-pixel"> <a${addAttribute(`/projects/${project.slug}`, "href")} class="link-slate"> ${project.title} </a> </h2> <div class="flex items-center space-x-2.5 text-xs font-pixel text-neutral-500 shrink-0"> <span>${project.date}</span> <span>/</span> ${hasLiveUrl && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a${addAttribute(project.live_url, "href")} target="_blank" rel="noopener noreferrer" class="link-slate">
Live Demo ↗
</a> <span>/</span> ` })}`} ${hasGithubUrl && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a${addAttribute(project.github_url, "href")} target="_blank" rel="noopener noreferrer" class="link-slate">
GitHub ↗
</a> <span>/</span> ` })}`} <a${addAttribute(`/projects/${project.slug}`, "href")} class="link-slate">
View Case Study →
</a> </div> </div> <!-- 2-Sentence Description --> <p class="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans font-normal"> ${project.description} </p> <!-- Tech Stack Tags --> <div class="font-pixel text-xs text-neutral-500 dark:text-neutral-400 pt-1"> ${project.tags.join(" \xB7 ")} </div> </div> </article>`;
    } else {
      return renderTemplate`<article class="space-y-3 py-8 border-b border-[#d0d0d0] dark:border-[#404040] last:border-0"> <!-- Flat text row layout without image container --> <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"> <h2 class="text-base font-bold font-pixel"> <a${addAttribute(`/projects/${project.slug}`, "href")} class="link-slate"> ${project.title} </a> </h2> <div class="flex items-center space-x-2.5 text-xs font-pixel text-neutral-500 shrink-0"> <span>${project.date}</span> <span>/</span> ${hasLiveUrl && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a${addAttribute(project.live_url, "href")} target="_blank" rel="noopener noreferrer" class="link-slate">
Live Demo ↗
</a> <span>/</span> ` })}`} ${hasGithubUrl && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a${addAttribute(project.github_url, "href")} target="_blank" rel="noopener noreferrer" class="link-slate">
GitHub ↗
</a> <span>/</span> ` })}`} <a${addAttribute(`/projects/${project.slug}`, "href")} class="link-slate">
View Case Study →
</a> </div> </div> <p class="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans font-normal"> ${project.description} </p> <div class="font-pixel text-xs text-neutral-500 dark:text-neutral-400 pt-1"> ${project.tags.join(" \xB7 ")} </div> </article>`;
    }
  })} </div> </div> ` })}`;
}, "D:/Projects/Personal/Portfolio/V6/src/pages/projects.astro", void 0);

const $$file = "D:/Projects/Personal/Portfolio/V6/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
