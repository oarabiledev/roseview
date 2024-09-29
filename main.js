// Main Testing Script For roseview Features

import { HashRouter } from "./src/router.js";
import { createApp } from "./src/roseview.core.js";

import main from "./pages/main.js";
import about from "./pages/about.js";
import partners from "./pages/partners.js";

const routes = [
    { path: "index", component: main },
    { path: "about", component: about },
    { path: "about/partners", component: partners },
];
const router = HashRouter(routes);

window.app = createApp(main).use(router).mount("#app");
