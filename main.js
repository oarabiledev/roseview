// Main Testing Script For roseview Features

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

let nav_title = html.Text(main, "Main Page");
nav_title.classes = "pacifico-regular";

let loginBtn = html.Button(main, "Open Login Page");
loginBtn.on("click", () => {
	htmlPage.Open("#login");
});

let login = html.CreateLayout("login", "linear", "center, scrolly, fillxy");
login.setChildMargins = "null, 15px";
login.style({
	backgroundColor: "yellow"
});
login.Transition = ["slideInLeft", "slideOutRight"];

let input = html.Input(login, "text");

let goSet = html.Button(login, "Settings");
goSet.on("click", () => {
	htmlPage.Open("#settings");
});
let goBack = html.Button(login, "Go Back");
goBack.on("click", () => {
	htmlPage.Back();
});

let settings = html.CreateLayout("settings", "linear", "center, scrolly, fillxy");
settings.setChildMargins = "null, 15px";
settings.style({
	backgroundColor: "red"
});
settings.Transition = ["slideInTop", "slideOutBottom"];

let inputB = html.Input(settings, "text");

let goBackB = html.Button(settings, "Go Back");
goBackB.on("click", () => {
	htmlPage.Back();
});

let goBackC = html.Button(settings, "Go Home");
goBackC.on("click", () => {
	htmlPage.Open("#index");
});

htmlPage.LoadStyle("main.css");
