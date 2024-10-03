// roseview web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.1.7

// translater Module

let languageFilePromise = null;

export const Translater = function (translationParam) {
    const plugin = {
        translations: translationParam,
        currentLang: null,

        _init: function () {},

        _install: function () {
            this._init();
            app.translate = this;
        },

        lang: function (languageCode) {
            const elements = document.querySelectorAll("[data-translate-id]");
            for (let element of elements) {
                const id = element.getAttribute("data-translate-id");
                this.text(id, languageCode)
                    .then((translation) => {
                        element.textContent = translation;
                    })
                    .catch((error) => {
                        element.textContent = "Error loading translation";
                    });
            }
        },

        text: async function (id, lang) {
            if (window.languageFile) {
                return window.languageFile.translations[id][lang];
            } else if (languageFilePromise) {
                await languageFilePromise;
                return window.languageFile.translations[id][lang];
            } else {
                languageFilePromise = fetch("./lang.json")
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(
                                "Cannot Load Translation Utility: " +
                                    response.status
                            );
                        }
                        return response.json();
                    })
                    .then((json) => {
                        window.languageFile = json;
                        currentLang = window.languageFile.default;
                        return json.translations[id][lang];
                    })
                    .catch((error) => {
                        console.error(
                            "Error fetching the language file:",
                            error
                        );
                        throw error;
                    });

                return languageFilePromise;
            }
        },
    };
    return plugin;
};
