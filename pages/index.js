import { htmlLayout } from "roseview";
import NavigationBar from "../components/navigation.js";

let homePage = new htmlLayout("linear", "top, scrolly, fillxy");
NavigationBar(homePage);

export default homePage;
