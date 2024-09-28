// roseview web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.1.7

// router Module

export const HashRouter = function (hashParam) {
    const plugin = {
        routes: hashParam,
        currentRoute: null,

        _init: function () {
            window.location.hash = `#index`;
            window.onhashchange = this._handleHashChange.bind(this);
            return this;
        },

        _install: function (app) {
            this._init();
            app.router = this;
        },

        _render: function () {
            const container = document.querySelector("#app");
            if (container) {
                container.innerHTML = "";
                container.appendChild(this.currentRoute.component.element);
            }
            return this;
        },

        _handleHashChange: function () {},

        navigate: function (path) {
            const route = this.routes.find((r) => r.path === path);
            if (route) {
                this.currentRoute = route;
                window.location.hash = path;
                this._render();
            } else {
                console.error(`route not found: ${path}`);
            }
            return this;
        },
    };
    plugin._init();
    return plugin;
};
