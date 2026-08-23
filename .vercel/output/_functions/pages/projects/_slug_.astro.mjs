import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BQFwdXgv.mjs';
import 'kleur/colors';
import { d as getProjectBySlug, $ as $$BaseLayout } from '../../chunks/supabase_XVBXStQC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const data = await getProjectBySlug(slug);
  if (!data) {
    return Astro2.redirect("/projects");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${data.title.toLowerCase()} \u2014 case study | alex chen`, "description": data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="space-y-12 max-w-3xl mx-auto"> <!-- Top Back Link --> <div> <a href="/projects" class="inline-flex items-center space-x-2 font-pixel text-xs text-neutral-500 hover:text-[#1a1a1a] dark:hover:text-white underline underline-offset-4 transition-colors"> <span>←</span> <span>Back to projects</span> </a> </div> <!-- Project Hero Header --> <header class="space-y-4 border-b border-neutral-300/40 dark:border-neutral-700/40 pb-8"> <div class="flex items-center justify-between font-pixel text-xs text-neutral-500"> <span>[case study]</span> <span>${data.date}</span> </div> <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1a1a] dark:text-white font-pixel"> ${data.title} </h1> <!-- Case Study Subtitle in Uncut Sans --> <p class="text-sm sm:text-base font-sans text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal"> ${data.description} </p> <!-- Dot-separated Tags & Plain Text External Links --> <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2"> <div class="font-pixel text-xs text-neutral-500 dark:text-neutral-400"> ${data.tags.join(" \xB7 ")} </div> <div class="flex items-center space-x-4 font-pixel text-xs shrink-0"> ${data.live_url && renderTemplate`<a${addAttribute(data.live_url, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-800 dark:text-neutral-200 font-bold hover:underline underline-offset-4 inline-flex items-center space-x-1"> <span>Live Demo</span> <span>↗</span> </a>`} ${data.github_url && renderTemplate`<a${addAttribute(data.github_url, "href")} target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-[#1a1a1a] dark:hover:text-white underline underline-offset-4 transition-colors inline-flex items-center space-x-1"> <span>GitHub</span> <span>↗</span> </a>`} </div> </div> </header> <!-- Quiet Screenshot Frame --> <section class="space-y-2"> <div class="w-full rounded bg-neutral-200/50 dark:bg-[#1a1a1a]/50 border border-neutral-300/40 dark:border-neutral-700/40 overflow-hidden"> <!-- Minimal Terminal Header (Centered Title, 3 Dots Removed) --> <div class="px-4 py-2 border-b border-neutral-300/40 dark:border-neutral-700/40 text-center font-pixel text-[10px] text-neutral-500">
[ ${data.title.toLowerCase()} preview ]
</div> <!-- Screenshot Display Area --> ${data.image_url ? renderTemplate`<img${addAttribute(data.image_url, "src")}${addAttribute(data.title, "alt")} class="w-full h-auto object-cover opacity-95">` : renderTemplate`<div class="p-8 sm:p-12 flex flex-col items-center justify-center min-h-[200px] text-center space-y-2"> <div class="font-pixel text-2xl select-none">
🖥️
</div> <p class="font-pixel text-xs text-[#1a1a1a] dark:text-white">
Interactive UI Demo Window: ${data.title} </p> <p class="text-xs text-neutral-500 font-sans max-w-md">
Rendered live with zero-runtime CSS tokens and WCAG 2.1 AA screen reader compliance.
</p> </div>`} </div> </section> <!-- Quiet Structured Case Study Sections --> <div class="space-y-10 pt-4"> <!-- Section 1: Problem --> ${data.problem && renderTemplate`<section class="space-y-2 pb-6 border-b border-neutral-300/30 dark:border-neutral-800/60"> <h2 class="font-pixel text-xs font-bold text-neutral-500 tracking-wider uppercase">
01. Problem
</h2> <p class="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed"> ${data.problem} </p> </section>`} <!-- Section 2: User --> ${data.user && renderTemplate`<section class="space-y-2 pb-6 border-b border-neutral-300/30 dark:border-neutral-800/60"> <h2 class="font-pixel text-xs font-bold text-neutral-500 tracking-wider uppercase">
02. Target User
</h2> <p class="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed"> ${data.user} </p> </section>`} <!-- Section 3: Solution --> ${data.solution && renderTemplate`<section class="space-y-2 pb-6 border-b border-neutral-300/30 dark:border-neutral-800/60"> <h2 class="font-pixel text-xs font-bold text-neutral-500 tracking-wider uppercase">
03. Architectural Solution
</h2> <p class="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed"> ${data.solution} </p> </section>`} <!-- Section 4: Key Features --> ${data.key_features && data.key_features.length > 0 && renderTemplate`<section class="space-y-3 pb-6 border-b border-neutral-300/30 dark:border-neutral-800/60"> <h2 class="font-pixel text-xs font-bold text-neutral-500 tracking-wider uppercase">
04. Key Features
</h2> <ul class="space-y-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans"> ${data.key_features.map((feature) => renderTemplate`<li class="flex items-start space-x-2 leading-relaxed"> <span class="text-neutral-400 font-pixel text-xs shrink-0 mt-1">—</span> <span>${feature}</span> </li>`)} </ul> </section>`} <!-- Section 5: Challenge --> ${data.challenge && renderTemplate`<section class="space-y-2 pb-6 border-b border-neutral-300/30 dark:border-neutral-800/60"> <h2 class="font-pixel text-xs font-bold text-neutral-500 tracking-wider uppercase">
05. Engineering Challenge
</h2> <p class="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed"> ${data.challenge} </p> </section>`} <!-- Section 6: Impact --> ${data.impact && renderTemplate`<section class="space-y-2 pb-6 border-b border-neutral-300/30 dark:border-neutral-800/60"> <h2 class="font-pixel text-xs font-bold text-neutral-500 tracking-wider uppercase">
06. Impact
</h2> <div class="p-4 rounded border border-neutral-300/40 dark:border-neutral-700/40 text-neutral-800 dark:text-neutral-200 font-sans text-sm sm:text-base leading-relaxed"> ${data.impact} </div> </section>`} <!-- Section 7: Tech Choices --> ${data.tech_choices && data.tech_choices.length > 0 && renderTemplate`<section class="space-y-3 pb-6 border-b border-neutral-300/30 dark:border-neutral-800/60"> <h2 class="font-pixel text-xs font-bold text-neutral-500 tracking-wider uppercase">
07. Tech Choices & Rationale
</h2> <div class="space-y-3"> ${data.tech_choices.map((choice) => renderTemplate`<div class="p-3 rounded border border-neutral-300/40 dark:border-neutral-700/40 space-y-1"> <div class="font-pixel text-xs font-bold text-[#1a1a1a] dark:text-white"> ${choice.tech} </div> <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed"> ${choice.rationale} </p> </div>`)} </div> </section>`} </div> <!-- Bottom Navigation --> <div class="pt-6 flex items-center justify-between border-t border-neutral-300/40 dark:border-neutral-700/40 font-pixel text-xs"> <a href="/projects" class="text-neutral-500 hover:text-[#1a1a1a] dark:hover:text-white underline underline-offset-4 transition-colors">
← View all projects
</a> <a href="/" class="text-neutral-500 hover:text-[#1a1a1a] dark:hover:text-white underline underline-offset-4 transition-colors">
Back to bio ↑
</a> </div> </article> ` })}`;
}, "D:/Projects/Personal/Portfolio/V6/src/pages/projects/[slug].astro", void 0);

const $$file = "D:/Projects/Personal/Portfolio/V6/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
