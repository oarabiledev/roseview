import { html } from "roseview";
import TonalButton from "../components/tonalButton";

let homePage = html.CreateLayout("linear", "center, scrolly, fillxy");

let btn = TonalButton(homePage, "Go To About 😋");
btn.classes = "pacifico-regular";

btn.on("click", function () {
    app.router.navigate("about");
});

export default homePage;
