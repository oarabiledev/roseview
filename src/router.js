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
            if (!window.location.hash) {
                window.location.hash = `#index`;
            } else this._handleHashChange();

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
                if (this.currentRoute && this.currentRoute.component) {
                    container.appendChild(this.currentRoute.component.element);
                } else console.error("No valid component found for route");
            }
            return this;
        },

        _handleHashChange: function () {
            const hash = window.location.hash.slice(1) || "/";
            const route = this.routes.find((r) => r.path === hash);

            if (route) {
                this.currentRoute = route;
                this._render();
            } else console.error(`Route not found: ${hash}`);
        },

        navigate: function (path) {
            const route = this.routes.find((r) => r.path === path);
            if (route) {
                this.currentRoute = route;
                window.location.hash = path;
                this._render();
            } else console.error(`Route not found: ${path}`);

            return this;
        },

        back: function () {
            history.back();
        },

        forward: function () {
            history.forward();
        },
    };
    return plugin;
};
