import * as server from '../entries/pages/projecten/_slug_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projecten/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projecten/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.2560bfeb.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.fae5566e.js","_app/immutable/chunks/Footer.5977b5e4.js"];
export const stylesheets = ["_app/immutable/assets/4.06d2f574.css","_app/immutable/assets/Footer.57fc06a6.css"];
export const fonts = [];
