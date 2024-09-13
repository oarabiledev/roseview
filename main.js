// Main Testing Script For roseview Features

let main = html.CreateLayout("index", "linear", "center, scrolly, fillxy");
main.setChildMargins = "null, 15px";
let nav_title = html.Text(main, "Main Page");
nav_title.classes = "pacifico-regular";

let loginBtn = html.Button(main, "Open Login Page");
loginBtn.on("click", () => {
	htmlPage.Open("login");
});

let forwardBtn = html.Button(main, "Go Forward");
forwardBtn.on("click", () => {
	htmlPage.Forward();
});

let login = html.CreateLayout("login", "linear", "center, scrolly, fillxy");
login.setChildMargins = "null, 15px";
login.style({
	backgroundColor: "yellow"
});

let input = html.Input(login, "text");

let goBack = html.Button(login, "Go Back");
goBack.on("click", () => {
	htmlPage.Back();
});

//htmlPage.Animations = ["slideInUp", "slideOutDown"];
htmlPage.LoadStyle("main.css");
