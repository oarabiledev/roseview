// Main Testing Script For roseview Features

import { HashRouter } from "roseview/router";
import { createApp } from "roseview/core";

import main from "./pages/main.js";
import about from "./pages/about.js";

const routes = [
    { path: "/", component: main },
    { path: "/about", component: about },
];
const router = HashRouter(routes);

window.app = createApp(main).use(router).mount("#app");
