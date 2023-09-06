import * as dotenv from "dotenv";
import { fastify } from "fastify";
import ItemRoutes from "./src/api/routes/items";
import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

dotenv.config();
const app = fastify({ logger: true });

const swaggerOptions = {
	swagger: {
		info: {
			title: "Fastify custom API",
			description: "Test cases vs htmx REST",
			version: "1.0.0",
		},
		host: "localhost",
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
	origin: ["http://localhost:5000", "http://localhost:3000"],
});

app.register((app, options, done) => {
	app.get("/", {
		schema: {
			tags: ["Default"],
			response: {
				200: {
					type: "object",
					properties: {
						anything: { type: "string" },
					},
				},
			},
		},
		handler: (req, res) => {
			res.send({ anything: "meaningfull" });
		},
	});
	done();
});

app.listen(
	{
		port: 5000, // Pulled from env file.
		host: "localhost",
	},
	(err, address) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
	}
);
