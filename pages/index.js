import { htmlElement, htmlLayout } from "../src/roseview.core.js";

import NavigationBar from "../components/navigation.js";
import TonalButton from "../components/tonalButton.js";

let homePage = new htmlLayout("linear", "top, scrolly, fillxy");
NavigationBar(homePage);

let contentDiv = new htmlLayout("linear", "center, fillxy");
contentDiv.setChildMargins = "null, 15px, null";
homePage.addChild(contentDiv);

new htmlElement(contentDiv, "span", {
    textContent: `Roses are red, code should be clear; with Roseview, simplicity is here.`,
}).css`
font-family: "Playwrite GB S", cursive;
font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
max-width: 960px;
overflow-wrap: break-word;
text-align: center;
text-rendering: optimizelegibility;
text-size-adjust: 100%;
transition-behavior: normal;
transition-delay: 0s;
transition-duration: 0.5s;
transition-property: color;
transition-timing-function: ease;
`;

TonalButton(contentDiv, "Read About Page").element.onclick = function () {
    app.router.navigate("about");
};

export default homePage;
