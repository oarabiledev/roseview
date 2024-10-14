import { htmlLayout, htmlElement } from "roseview";

let homePage = new htmlLayout("linear", "center, scrolly, fillxy");

const btn = new htmlElement(homePage, "button", {
    textContent: "Go To About",
});

btn.element.onclick = function () {
    app.router.navigate("about");
};

export default homePage;
