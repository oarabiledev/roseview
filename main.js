// Main Testing Script For roseview Features

import { HashRouter } from "roseview";
import { createApp } from "roseview";

import homePage from "./pages/index.js";
import aboutPage from "./pages/about.js";
import partners from "./pages/partners.js";

const routes = [
    { path: "index", component: homePage },
    { path: "about", component: aboutPage },
    { path: "about/partners", component: partners },
];
const router = HashRouter(routes);

window.app = createApp(homePage).use(router).mount("#app");
