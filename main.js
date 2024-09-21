// Main Testing Script For roseview Features

import { html, htmlPage, cssParser } from 'roseview'

let main = html.CreateLayout("index", "linear", "center, scrolly, fillxy");
main.setChildMargins = "null, 15px";

let customIn = cssParser({
	"@keyframes fadeIn": {
		"0%": { opacity: "0" },
		"100%": { opacity: "1" }
	},
	animation: "fadeIn 1s ease forwards"
});

let customOut = cssParser({
	"@keyframes fadeOut": {
		"0%": { opacity: "0" },
		"100%": { opacity: "1" }
	},
	animation: "fadeIn 1s ease forwards"
});

main.Transition = [customIn, customOut];

let nav_title = html.Text(main, "HomePage 😋");
nav_title.classes = "pacifico-regular";

let loginBtn = html.Button(main, "About Page");
loginBtn.on("click", () => {
	htmlPage.Open("#about");
});

let login = html.CreateLayout("about", "linear", "center, scrolly, fillxy");
login.setChildMargins = "15px, 15px, 15px";
login.style({
	backgroundColor: "yellow"
});

let txt = html.Text(login, "We Keep Pushing");
txt.style({
	fontSize: "50px",
	wordWrap: "wrap"
});
