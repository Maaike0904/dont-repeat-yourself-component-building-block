export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/Aquathermie.png","assets/Comment_Wim.png","assets/Comment_project_Klimaatadaptatie.png","assets/Constructed wetland with cattail and water birds.png","assets/Droogte.png","assets/GBC-Landelijk.png","assets/Gemeente_Bladel_logo.png","assets/Gemeente_Tilburg_logo.png","assets/Gemeente_Tilburg_logo2.png","assets/Hoogheemraadschap-van-Delfland.png","assets/Jesse1_fullscreen.png","assets/Jesse2_fullscreen.png","assets/Klimaatadaptatie_icoon-02.png","assets/Logo-Gemeente-Amsterdam.png","assets/LogoBunnikCMYK.png","assets/Mees1_fullscreen.png","assets/Mees2_fullscreen.png","assets/Parallax2/berg1.png","assets/Parallax2/berg2.png","assets/Parallax2/berg3.png","assets/Parallax2/berg4.png","assets/Parallax2/bird.png","assets/Parallax2/city.png","assets/Parallax2/farm.png","assets/Parallax2/grond.png","assets/Parallax2/grond2.png","assets/Parallax2/mid.png","assets/Parallax2/water.png","assets/SPAT_Logo_zondertekst.png","assets/Timo1_fullscreen.png","assets/Timo2_fullscreen.png","assets/Untitled.png","assets/Untitled2.png","assets/Untitled3.png","assets/Untitled4.png","assets/Untitledhuiss.png","assets/Untitlegrond2d.png","assets/VU_logo.png","assets/Water.svg","assets/Waterbank.png","assets/Waterbank_Website.png","assets/amsterdam_rainproof_logo_line_2400dpi_colour-1.png","assets/bRAIN.png","assets/backgroundfullfinall.png","assets/berg1-full.png","assets/berg2-full.png","assets/berg2.png","assets/berg3-full.png","assets/berg3.png","assets/berg4-full.png","assets/berg4.png","assets/bergje1.png","assets/bg_illu.png","assets/bird-full.png","assets/bird.png","assets/bolt-svgrepo-com.png","assets/brainlogo.png","assets/city-full.png","assets/city.png","assets/cloud-svgrepo-com.png","assets/eteck_pic.png","assets/footer-mobile.svg","assets/footer.svg","assets/grind-rest.png","assets/grond-full.png","assets/grond.png","assets/grondmobilee.png","assets/huis.png","assets/huisje-full.png","assets/image6.png","assets/jesse.png","assets/logo-cra.png","assets/logo-gemeente-png.png","assets/logo_Eteck.png","assets/logo_spatwater.png","assets/logotest2.png","assets/mees1.png","assets/projects1.png","assets/projects2.png","assets/projects3.png","assets/projects4-2.png","assets/projects4.png","assets/shoeprints-svgrepo-com.png","assets/sponsors1.png","assets/sponsors2.png","assets/sponsors3.png","assets/sponsors4.png","assets/sponsors5.png","assets/stagiar_1.png","assets/stagiar_2.png","assets/stagiar_full1.png","assets/stagiar_full2.png","assets/swiper-bundle.min.css","assets/swiper-bundle.min.js","assets/timo.png","assets/tree.png","assets/verg.png","assets/water-full.png","assets/water-svgrepo-com.png","assets/water.png","assets/waterkwaliteit.png","assets/world3.png","favicon.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".css":"text/css",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.aaf155f0.js","app":"_app/immutable/entry/app.7c3c6969.js","imports":["_app/immutable/entry/start.aaf155f0.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.589f87db.js","_app/immutable/entry/app.7c3c6969.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.fae5566e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/post/[slug]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projecten/[slug]",
				pattern: /^\/projecten\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
