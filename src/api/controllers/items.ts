import { v4 as uuidv4 } from "uuid";
import { ItemsTable } from "../../components/tableTemplate";
let items = require("./../../../mock-data/testItems.json");

export const getItems = (req, res) => {
	res.send(ItemsTable(items?.items));
};

export const getItem = (req, res) => {
	const { id } = req.params;
	const item = items?.items.filter((item) => item.id === id);

	res.send(ItemsTable(item));
};

export const postItem = (req, res) => {
	const { name } = req.body;
	const item = {
		id: uuidv4(),
		name: name,
	};

	items["items"].push(item);

	res.code(201).send(ItemsTable(items?.items));
};

export const deleteItem = (req, res) => {
	const id = req.params.id;

	items = items.filter((item) => item.id !== id);

	res.send({ message: `Item ${id} has been removed` });
};

export const updateItem = (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	items = items.map((item) => (item.id === id ? { id, name } : item));

	let item = items.find((item) => item.id === id);

	res.send(ItemsTable(item));
};
