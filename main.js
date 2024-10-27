// Main Testing Script For roseview Features

import { HashRouter } from "./src/router/index.js";
import { createApp } from "./src/roseview.core.js";

import homePage from "./pages/index.js";
import aboutPage from "./pages/about.js";

const routes = [
    { path: "index", component: homePage },
    { path: "about", component: aboutPage },
];
const router = HashRouter(routes);

window.app = createApp(homePage).use(router).mount("#app");
