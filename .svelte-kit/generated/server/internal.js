
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"../assets/SPAT_Logo_zondertekst.png\" />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    <meta name=\"description\" content=\"Spatwater\" />\n\n    <title>SPATwater</title>\n\n    " + head + "\n\n    <!--=============== REMIXICONS ===============-->\n    <link\n      href=\"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css\"\n      rel=\"stylesheet\"\n    />\n\n    <!--=============== GOOGLE ICONS ===============-->\n    <link\n      rel=\"stylesheet\"\n      href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\"\n    />\n\n    <!--=============== SWIPER CSS ===============-->\n    <link rel=\"stylesheet\" href=\"/assets/swiper-bundle.min.css\" />\n\n    <!--=============== SWIPER JS ===============-->\n    <script src=\"/assets/swiper-bundle.min.js\"></script>\n\n    <!--=============== LEAFLET JS ===============-->\n    <link\n      rel=\"stylesheet\"\n      href=\"https://unpkg.com/leaflet@1.9.2/dist/leaflet.css\"\n      integrity=\"sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=\"\n      crossorigin=\"\"\n    />\n    <script\n      src=\"https://unpkg.com/leaflet@1.9.2/dist/leaflet.js\"\n      integrity=\"sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=\"\n      crossorigin=\"\"\n    ></script>\n    <script src=\"https://smtpjs.com/v3/smtp.js\"></script>\n  </head>\n\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n\n<style>\n  @import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap\");\n\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    scroll-behavior: smooth;\n    font-family: \"Open sans\", sans-serif;\n  }\n\n  p {\n    margin-bottom: 1rem;\n    color: var(--darkblue);\n    font-size: 0.8rem;\n  }\n\n  html {\n    scroll-behavior: smooth;\n  }\n\n  body {\n    font-family: \"Poppins\", serif;\n  }\n\n  main {\n    overflow-x: hidden;\n    overflow-y: hidden;\n  }\n\n  .button {\n    display: inline-block;\n    background-color: var(--green);\n    color: white;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    font-weight: var(--font-semi-bold);\n    transition: 0.3s;\n    text-decoration: none;\n    z-index: 7;\n  }\n\n  .button:hover {\n    background-color: var(--darkblue);\n  }\n</style>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "anbj84"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
