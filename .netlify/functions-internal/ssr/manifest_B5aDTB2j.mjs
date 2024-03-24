import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_DOdjJ9xJ.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V26shv4R.js"}],"styles":[{"type":"external","src":"/_astro/carta.DHdKh9L7.css"},{"type":"inline","content":".button[data-astro-cid-f2vctvlz].active{background-color:#f97316;color:#fff}nav[data-astro-cid-f2vctvlz]{scrollbar-width:none}\n"}],"routeData":{"route":"/carta","isIndex":false,"type":"page","pattern":"^\\/carta\\/?$","segments":[[{"content":"carta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/carta.astro","pathname":"/carta","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BYwLTRdn.js"}],"styles":[{"type":"external","src":"/_astro/carta.DHdKh9L7.css"},{"type":"inline","content":"main[data-astro-cid-2mxdoeuz]{height:calc(100svh - 5rem)}\n"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BYwLTRdn.js"}],"styles":[{"type":"external","src":"/_astro/carta.DHdKh9L7.css"},{"type":"inline","content":"#hero[data-astro-cid-j7pv25f6]{background:linear-gradient(#00000050,#00000050),url(https://studyfinds.org/wp-content/uploads/2019/10/Multi-Generation-Family-Enjoying-Meal-Around-Table-At-Home-Together.jpeg?ver=1702400903);background-size:cover;background-position:center;color:#fff;font-size:32px;height:calc(100svh - 4rem)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Soare/Desktop/rincon-aproach2/src/pages/carta.astro",{"propagation":"none","containsHead":true}],["C:/Users/Soare/Desktop/rincon-aproach2/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/Soare/Desktop/rincon-aproach2/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/contacto.astro":"chunks/pages/contacto_Bwp72EmG.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_HbhoRVdX.mjs","/src/pages/index.astro":"chunks/pages/index_C9JK2gA9.mjs","\u0000@astrojs-manifest":"manifest_B5aDTB2j.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BFvXlZU1.mjs","\u0000@astro-page:src/pages/carta@_@astro":"chunks/carta_Dg3L6oGo.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_BoV-ofsd.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CPM5j0G5.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BYwLTRdn.js","/astro/hoisted.js?q=0":"_astro/hoisted.V26shv4R.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/carta.DHdKh9L7.css","/favicon.svg","/_astro/hoisted.BYwLTRdn.js","/_astro/hoisted.V26shv4R.js","/img/bocadillos.jpg","/img/bravas.jpg","/img/cartaEntera.jpg","/img/comidav.jpg","/img/ensaladas.jpg","/img/hamburguesas.jpg","/img/no-image.svg","/img/NoImage.astro","/img/patatas-bacon.png","/img/Phone.astro","/img/platoscombinados.jpg","/img/sandwiches.jpg","/img/tapas.jpg","/img/tapas.webp","/img/torraetas.jpg","/img/Whatsapp.astro"],"buildFormat":"directory"});

export { manifest };
