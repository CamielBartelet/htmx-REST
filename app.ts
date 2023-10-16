import * as dotenv from "dotenv";
// import { fastify } from "fastify";
import ItemRoutes from "./src/api/routes/items";
import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import GlobalRoutes from "./src/api/routes/global";

const app = require("fastify")({ logger: true });

dotenv.config();
// const app = fastify({ logger: true });
const path = require("node:path");

const swaggerOptions = {
	swagger: {
		info: {
			title: "Fastify custom API",
			description: "Test cases vs htmx REST",
			version: "1.0.0",
		},
		host: process.env.HOST_NAME,
		schemes: ["http", "https"],
		consumes: ["application/json"],
		produces: ["application/json"],
		tags: [{ name: "Default", description: "Default" }],
	},
};

const swaggerUiOptions = {
	routePrefix: "/docs",
	exposeRoute: true,
};

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);
app.register(ItemRoutes);
app.register(GlobalRoutes);

app.register(cors, {
	// origin: (origin, cb) => {
	// 	const hostname = new URL(origin).hostname;
	// 	if (hostname.includes("local")) {
	// 		//  Request from localhost will pass
	// 		cb(null, true);
	// 		return;
	// 	}
	// 	// Generate an error on other origins, disabling access
	// 	cb(new Error(`Not allowed ${hostname}`), false);
	// },
	origin: [
		`http://${process.env.HOST_NAME}:5000`,
		`http://${process.env.HOST_NAME}:3000`,
	],
});

// app.register((app, options, done) => {
// 	app.get("/", {
// 		schema: {
// 			tags: ["Default"],
// 			response: {
// 				200: {
// 					type: "object",
// 					properties: {
// 						anything: { type: "string" },
// 					},
// 				},
// 			},
// 		},
// 		handler: (req, res) => {
// 			res.send({ anything: "meaningfull" });
// 		},
// 	});
// 	done();
// });

app.register(require("@fastify/static"), {
	// An absolute path containing static files to serve.
	root: path.join(__dirname, "/public"),
});

app.listen(
	{
		port: 3000, // Pulled from env file.
		host: process.env.HOST_NAME,
	},
	(err, address) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
	}
);

export default app;
