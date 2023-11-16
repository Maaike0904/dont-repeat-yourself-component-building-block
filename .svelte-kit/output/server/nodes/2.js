import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.c70bacff.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.fae5566e.js","_app/immutable/chunks/Footer.5977b5e4.js"];
export const stylesheets = ["_app/immutable/assets/2.ec8faf25.css","_app/immutable/assets/Footer.57fc06a6.css"];
export const fonts = [];
