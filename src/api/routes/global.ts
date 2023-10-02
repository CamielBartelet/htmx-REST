import { getHeaderItems, getFooterItems, getHomeItems, getBlogItems, getAboutItems } from "../controllers/global";

const Item = {
	type: "object",
	properties: {
		id: { type: "string" },
		name: { type: "string" },
		description: { type: "string" },
	},
};

const getNavBarOpts = {
	schema: {
		response: {
			200: {
				type: "array",
				items: Item,
			},
		},
	},
	handler: getHeaderItems,
};

const getHomeOpts = {
	schema: {
		response: {
			200: {
				type: "array",
				items: Item,
			},
		},
	},
	handler: getHomeItems,
};

const getBlogOpts = {
	schema: {
		response: {
			200: {
				type: "array",
				items: Item,
			},
		},
	},
	handler: getBlogItems,
};

const getAboutOpts = {
	schema: {
		response: {
			200: {
				type: "array",
				items: Item,
			},
		},
	},
	handler: getAboutItems,
};

const getFooterOpts = {
	schema: {
		response: {
			200: {
				type: "array",
				items: Item,
			},
		},
	},
	handler: getFooterItems,
};

const GlobalRoutes = (app, options, done) => {
	//get all menu options
	app.get("/header", getNavBarOpts);

	//get home page
	app.get("/home", getHomeOpts);

	//get home page
	app.get("/blog", getBlogOpts);

	//get home page
	app.get("/about", getAboutOpts);

	//get footer
	app.get("/footer", getFooterOpts);

	done();
};

export default GlobalRoutes;
