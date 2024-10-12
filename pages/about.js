import { htmlLayout } from "roseview";
import TonalButton from "../components/tonalButton.js";

let aboutPage = new htmlLayout("linear", "center, scrolly, fillxy");

const div = TonalButton(aboutPage, "About Page");

export default aboutPage;
