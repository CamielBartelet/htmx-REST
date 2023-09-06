import {
	getItems,
	getItem,
	postItem,
	deleteItem,
	updateItem,
} from "../controllers/items";
import fastifyBody from "@fastify/formbody";

const Item = {
	type: "object",
	properties: {
		id: { type: "string" },
		name: { type: "string" },
	},
};

const getItemsOpts = {
	schema: {
		response: {
			200: {
				type: "array",
				items: Item,
			},
		},
	},
	handler: getItems,
};

const getItemOpts = {
	schema: {
		response: {
			200: Item,
		},
	},
	handler: getItem,
};

const postItemOpts = {
	schema: {
		body: {
			type: "object",
			required: ["name"],
			properties: {
				name: { type: "string" },
			},
		},
		response: {
			201: Item,
		},
	},
	handler: postItem,
};

const deleteItemOpts = {
	schema: {
		response: {
			200: {
				type: "object",
				properties: {
					message: { type: "string" },
				},
			},
		},
	},
	handler: deleteItem,
};

const updateItemOpts = {
	schema: {
		response: {
			200: Item,
		},
	},
	handler: updateItem,
};

const ItemRoutes = (app, options, done) => {
	//get all items
	app.get("/items", getItemsOpts);

	//get single item
	app.get("/items/:id", getItemOpts);

	app.register(fastifyBody);
	//add item
	app.post("/items", postItemOpts);

	// Delete item
	app.delete("/items/:id", deleteItemOpts);

	// Update item
	app.put("/items/:id", updateItemOpts);

	done();
};

export default ItemRoutes;
