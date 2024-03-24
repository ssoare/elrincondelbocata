import { renderers } from './renderers.mjs';
import { manifest } from './manifest_B5aDTB2j.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BFvXlZU1.mjs');
const _page1 = () => import('./chunks/carta_Dg3L6oGo.mjs');
const _page2 = () => import('./chunks/contacto_BoV-ofsd.mjs');
const _page3 = () => import('./chunks/index_CPM5j0G5.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/carta.astro", _page1],
    ["src/pages/contacto.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "1d48fda6-e790-48e4-8104-27601af3e22b"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
