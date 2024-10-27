import { htmlElement, htmlLayout } from "../src/roseview.core.js";

import TonalButton from "../components/tonalButton.js";
import NavigationBar from "../components/navigation.js";
let aboutPage = new htmlLayout("linear", "top, scrolly, fillxy");

NavigationBar(aboutPage);

let contentDiv = new htmlLayout("linear", "center, fillxy");
aboutPage.addChild(contentDiv);
contentDiv.setChildMargins = "null, 15px, null";

new htmlElement(contentDiv, "span", {
    textContent: `RoseViewJs, is a high perfomance library built for developers who enjoy functional-ish Javascript :)`,
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
transition-timing-function: ease;`;

TonalButton(contentDiv, "Go Back :)").element.onclick = function () {
    app.router.back();
};

export default aboutPage;
