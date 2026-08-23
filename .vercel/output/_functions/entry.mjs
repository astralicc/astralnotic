import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C4JFKgfe.mjs';
import { manifest } from './manifest_D-HcHu-G.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/experience.astro.mjs');
const _page2 = () => import('./pages/projects/_slug_.astro.mjs');
const _page3 = () => import('./pages/projects.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/experience.astro", _page1],
    ["src/pages/projects/[slug].astro", _page2],
    ["src/pages/projects.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6dcbf044-9439-4bcd-9869-813a66e5689f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
