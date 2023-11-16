

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.14dc7c00.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.fae5566e.js"];
export const stylesheets = [];
export const fonts = [];
