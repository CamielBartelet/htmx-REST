import { NavBar } from "../../components/header";
import { Footer } from "../../components/footer";
import { ItemsTable } from "../../components/tableTemplate";
let navigationItems = require("./../../../mock-data/pageContent/global/navigationItems.json");
let homeItems = require("./../../../mock-data/pageContent/homeItems.json");
let blogItems = require("./../../../mock-data/pageContent/blogItems.json");
let aboutItems = require("./../../../mock-data/pageContent/aboutItems.json");
let footerItems = require("./../../../mock-data/pageContent/global/footerItems.json");

export const getHeaderItems = (req, res) => {
	res.send(NavBar(navigationItems?.navigationItems));
};

export const getHomeItems = (req, res) => {
	res.send(ItemsTable(homeItems?.homeItems));
};

export const getBlogItems = (req, res) => {
	res.send(ItemsTable(blogItems?.blogItems));
};

export const getAboutItems = (req, res) => {
	res.send(ItemsTable(aboutItems?.aboutItems));
};

export const getFooterItems = (req, res) => {
	res.send(Footer(footerItems?.footerItems));
};
