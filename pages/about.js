import { html } from "roseview";
import TonalButton from "../components/tonalButton.js";

let aboutPage = html.CreateLayout("linear", "fillxy, center");

let btnv = TonalButton(aboutPage, "Go To Partners 😋");

btnv.on("click", function () {
    app.router.navigate("about/partners");
});

export default aboutPage;
