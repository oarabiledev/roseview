import { CreateLayout } from "roseview";
import TonalButton from "../components/tonalButton.js";

let aboutPage = CreateLayout("linear", "center, scrolly, fillxy");

const div = TonalButton(aboutPage, "About Page");

export default aboutPage;
