/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_DOdjJ9xJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 w-full h-12 items-center z-10" data-astro-cid-3ef6ksr2> <nav class="flex justify-between px-4 items-center bg-white" data-astro-cid-3ef6ksr2> <div class="logo text-xl" data-astro-cid-3ef6ksr2> <a href=".." data-astro-cid-3ef6ksr2> <h1 data-astro-cid-3ef6ksr2>El Rincón <span class="text-orange-500 block" data-astro-cid-3ef6ksr2>del Bocata</span></h1> </a> </div> <div class="hb cursor-pointer" data-astro-cid-3ef6ksr2> <div class="hb1" data-astro-cid-3ef6ksr2></div> <div class="hb2" data-astro-cid-3ef6ksr2></div> <div class="hb3" data-astro-cid-3ef6ksr2></div> </div> <ul id="menu" class="absolute w-full h-svh top-16 left-0
        flex flex-col justify-evenly items-center gap-8 py-8 text-center
        transition translate-x-full
        text-3xl bg-black text-orange-500 font-semibold uppercase" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> <li class="my-4" data-astro-cid-3ef6ksr2><a class="py-1 px-2" href=".." data-astro-cid-3ef6ksr2>Inicio</a></li> <li class="my-4" data-astro-cid-3ef6ksr2><a class="py-1 px-2" href="/carta" data-astro-cid-3ef6ksr2>Carta</a></li> <li class="my-4" data-astro-cid-3ef6ksr2><a class="py-1 px-2" href="/contacto" data-astro-cid-3ef6ksr2>Contacto</a></li> </div> <div data-astro-cid-3ef6ksr2> <li class="" data-astro-cid-3ef6ksr2><a class="text-sm text-center" href="" data-astro-cid-3ef6ksr2>Trabaja con nostros</a></li> <li class="" data-astro-cid-3ef6ksr2><a class="text-sm text-center" href="" data-astro-cid-3ef6ksr2>Síguenos:</a></li> <div class="flex gap-4 justify-center my-2" data-astro-cid-3ef6ksr2> <a class="cursor-pointer hover:scale-105 transition" href="https://es-es.facebook.com/elrincondelbocata/" target="_blank" rel="noreferrer" data-astro-cid-3ef6ksr2> <img class="size-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/220px-2021_Facebook_icon.svg.png" alt="" data-astro-cid-3ef6ksr2> </a> <a class="cursor-pointer hover:scale-105 transition" href="https://www.instagram.com/explore/locations/413751147/el-rincon-del-bocata/" data-astro-cid-3ef6ksr2> <img class="size-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="" data-astro-cid-3ef6ksr2> </a> </div> </div> </ul> </nav> </header>  `;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/components/Header.astro", void 0);

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width , initial-scale=1 "><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/layouts/Layout.astro", void 0);

const $$Astro$8 = createAstro();
const $$Tapas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Tapas;
  return renderTemplate`${maybeRenderHead()}<div id="tapasList"></div> <template id="tapasTemplate"> <article class=" w-96 border-2 m-4 rounded-lg shadow-lg flex flex-col justify-evenly gap-8 items-center p-4"> <img class="max-w-52 aspect-video" src="https://raw.githubusercontent.com/ssoare/elrincondelbocata/d51d0cc163682945f99bc17cf4725a006770571c/public/img/no-image.svg"> <div class=" flex justify-between w-full items-center"> <h2 class="basis-4/5 text-xl font-semibold"></h2> <p></p> </div> </article> </template> `;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/components/Tapas.astro", void 0);

const $$Astro$7 = createAstro();
const $$Ensaladas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Ensaladas;
  return renderTemplate`${maybeRenderHead()}<div id="ensaladasList"></div> <template id="ensaladasTemplate"> <article class=" w-96 border-2 m-4 rounded-lg shadow-lg flex flex-col justify-evenly gap-8 items-center p-4"> <img class="max-w-52 aspect-video" src="https://raw.githubusercontent.com/ssoare/elrincondelbocata/d51d0cc163682945f99bc17cf4725a006770571c/public/img/no-image.svg" alt=""> <div class="flex justify-between items-center w-full"> <div class="basis-4/5"> <h2 class="text-xl font-semibold"></h2> <p class="desc italic text-gray-600"></p> </div> <p class="precio"></p> </div> </article> </template> `;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/components/Ensaladas.astro", void 0);

const $$Astro$6 = createAstro();
const $$Torraetas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Torraetas;
  return renderTemplate`${maybeRenderHead()}<div id="torraetasList"></div> <template id="torraetasTemplate"> <article class=" w-96 border-2 m-4 rounded-lg shadow-lg flex flex-col justify-evenly gap-8 items-center p-4"> <img class="max-w-52 aspect-video" src="https://raw.githubusercontent.com/ssoare/elrincondelbocata/d51d0cc163682945f99bc17cf4725a006770571c/public/img/no-image.svg" alt=""> <div class=" flex justify-between w-full items-center"> <h2 class="basis-4/5 text-xl font-semibold"></h2> <p></p> </div> </article> </template> `;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/components/Torraetas.astro", void 0);

const $$Astro$5 = createAstro();
const $$Sandwiches = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Sandwiches;
  return renderTemplate`${maybeRenderHead()}<div id="sandwichesList"></div> <template id="sandwichesTemplate"> <article class=" w-96 border-2 m-4 rounded-lg shadow-lg flex flex-col justify-evenly gap-8 items-center p-4"> <img class="max-w-52 aspect-video" src="https://raw.githubusercontent.com/ssoare/elrincondelbocata/d51d0cc163682945f99bc17cf4725a006770571c/public/img/no-image.svg" alt=""> <div class="flex justify-between items-center w-full"> <div class="basis-4/5"> <h2 class="text-xl font-semibold"></h2> <p class="desc italic text-gray-600"></p> </div> <p class="precio"></p> </div> </article> </template> `;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/components/Sandwiches.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hamburguesas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hamburguesas;
  return renderTemplate`${maybeRenderHead()}<div id="hamburguesasList"></div> <template id="hamburguesasTemplate"> <article class=" w-96 border-2 m-4 rounded-lg shadow-lg flex flex-col justify-evenly gap-8 items-center p-4"> <img class="max-w-52 aspect-video" src="https://raw.githubusercontent.com/ssoare/elrincondelbocata/d51d0cc163682945f99bc17cf4725a006770571c/public/img/no-image.svg" alt=""> <div class="flex justify-between items-center w-full"> <div class="basis-4/5"> <h2 class="text-xl font-semibold"></h2> <p class="desc italic text-gray-600"></p> </div> <p class="precio"></p> </div> </article> </template> `;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/components/Hamburguesas.astro", void 0);

const $$Astro$3 = createAstro();
const $$Bocadillos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Bocadillos;
  return renderTemplate`${maybeRenderHead()}<div id="bocadillosList"></div> <template id="bocadillosTemplate"> <article class=" w-96 border-2 m-4 rounded-lg shadow-lg flex flex-col justify-evenly gap-8 items-center p-4"> <img class="max-w-52 aspect-video" src="https://raw.githubusercontent.com/ssoare/elrincondelbocata/d51d0cc163682945f99bc17cf4725a006770571c/public/img/no-image.svg" alt=""> <div class=" flex justify-between w-full items-center"> <h2 class="basis-4/5 text-xl font-semibold"></h2> <p></p> </div> </article> </template> `;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/components/Bocadillos.astro", void 0);

const $$Astro$2 = createAstro();
const $$PlatosCombinados = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PlatosCombinados;
  return renderTemplate`${maybeRenderHead()}<div id="platosCombinadosList"></div> <template id="platosCombinadosTemplate"> <article class=" w-96 border-2 m-4 rounded-lg shadow-lg flex flex-col justify-evenly gap-8 items-center p-4"> <img class="max-w-52 aspect-video" src="https://raw.githubusercontent.com/ssoare/elrincondelbocata/d51d0cc163682945f99bc17cf4725a006770571c/public/img/no-image.svg" alt=""> <div class="flex justify-between items-center w-full"> <div class="basis-4/5"> <h2 class="text-xl font-semibold"></h2> <p class="desc italic text-gray-600"></p> </div> <p class="precio"></p> </div> </article> </template> `;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/components/PlatosCombinados.astro", void 0);

const $$Astro$1 = createAstro();
const $$ComidaVegetariana = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ComidaVegetariana;
  return renderTemplate`${maybeRenderHead()}<div id="comidaVegetarianaList"></div> <template id="comidaVegetarianaTemplate"> <h1 class="text-center text-3xl font-semibold my-8 text-orange-500"></h1> </template> <template id="clone2"> <article class="flex justify-between p-4 mt-4 items-center max-w-[800px] mx-auto"> <div class="basis-4/5"> <h2 class="text-xl font-semibold"></h2> <p class="italic"></p> </div> <p id="precio"></p> </article> <hr class="w-1/4 max-w-[200px] mx-auto my-4"> </template> `;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/components/ComidaVegetariana.astro", void 0);

const $$Astro = createAstro();
const $$Carta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carta;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "El Rinc\xF3n del Bocata | Restaurante", "data-astro-cid-f2vctvlz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-20" data-astro-cid-f2vctvlz> <nav class="w-full overflow-auto flex gap-2 px-4 lg:justify-center" data-astro-cid-f2vctvlz> <button id="tapas" class="button active border-2 rounded-full py-2 px-4 text-2xl whitespace-nowrap transition" data-astro-cid-f2vctvlz>Tapas</button> <button id="ensaladas" class="button border-2 rounded-full py-2 px-4 text-2xl whitespace-nowrap transition" data-astro-cid-f2vctvlz>Ensaladas</button> <button id="torraetas" class="button border-2 rounded-full py-2 px-4 text-2xl whitespace-nowrap transition" data-astro-cid-f2vctvlz>Torraetas</button> <button id="sandwiches" class="button border-2 rounded-full py-2 px-4 text-2xl whitespace-nowrap transition" data-astro-cid-f2vctvlz>Sandwiches</button> <button id="hamburguesas" class="button border-2 rounded-full py-2 px-4 text-2xl whitespace-nowrap transition" data-astro-cid-f2vctvlz>Hamburguesas</button> <button id="bocadillos" class="button border-2 rounded-full py-2 px-4 text-2xl whitespace-nowrap transition" data-astro-cid-f2vctvlz>Bocadillos</button> <button id="platosCombinados" class="button border-2 rounded-full py-2 px-4 text-2xl whitespace-nowrap transition" data-astro-cid-f2vctvlz>Platos combinados</button> <button id="comidaVegetariana" class="button border-2 rounded-full py-2 px-4 text-2xl whitespace-nowrap transition" data-astro-cid-f2vctvlz>Comida vegetariana</button> </nav> <section id="tapasList" class="mt-4" data-astro-cid-f2vctvlz> ${renderComponent($$result2, "Tapas", $$Tapas, { "data-astro-cid-f2vctvlz": true })} </section> <section id="ensaladasList" class="mt-4 hidden" data-astro-cid-f2vctvlz> ${renderComponent($$result2, "Ensaladas", $$Ensaladas, { "data-astro-cid-f2vctvlz": true })} </section> <section id="torraetasList" class="mt-4 hidden" data-astro-cid-f2vctvlz> ${renderComponent($$result2, "Torraetas", $$Torraetas, { "data-astro-cid-f2vctvlz": true })} </section> <section id="sandwichesList" class="mt-4 hidden" data-astro-cid-f2vctvlz> ${renderComponent($$result2, "Sandwiches", $$Sandwiches, { "data-astro-cid-f2vctvlz": true })} </section> <section id="hamburguesasList" class="mt-4 hidden" data-astro-cid-f2vctvlz> ${renderComponent($$result2, "Hamburguesas", $$Hamburguesas, { "data-astro-cid-f2vctvlz": true })} </section> <section id="bocadillosList" class="mt-4 hidden" data-astro-cid-f2vctvlz> ${renderComponent($$result2, "Bocadillos", $$Bocadillos, { "data-astro-cid-f2vctvlz": true })} </section> <section id="platosCombinadosList" class="mt-4 hidden" data-astro-cid-f2vctvlz> ${renderComponent($$result2, "PlatosCombinados", $$PlatosCombinados, { "data-astro-cid-f2vctvlz": true })} </section> <section id="comidaVegetarianaList" class="mt-4 hidden" data-astro-cid-f2vctvlz> ${renderComponent($$result2, "ComidaVegetariana", $$ComidaVegetariana, { "data-astro-cid-f2vctvlz": true })} </section> </main> ` })}  `;
}, "C:/Users/Soare/Desktop/rincon-aproach2/src/pages/carta.astro", void 0);

const $$file = "C:/Users/Soare/Desktop/rincon-aproach2/src/pages/carta.astro";
const $$url = "/carta";

const carta = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Carta,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, carta as c };
