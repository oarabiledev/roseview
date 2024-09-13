// Main Testing Script For roseview Features

let main = html.CreateLayout("index", "linear", "top, scrolly, fillxy");

let nav = html.Element(main, "nav");

let nav_title = html.Text(nav, "roseview");
nav_title.classes = "pacifico-regular";

let loginBtn = html.Button(main, "Open Login Page");
loginBtn.on("click", () => {
	htmlPage.Open("login");
});

let forwardBtn = html.Button(main, "Forward");
forwardBtn.on("click", () => {
	htmlPage.Forward();
});

let login = html.CreateLayout("login", "linear", "top, scrolly, fillxy");
let input = html.Input(login, "text");

let goBack = html.Button(login, "Go Back");
goBack.on("click", () => {
	htmlPage.Back();
});

htmlPage.LoadStyle("main.css");
