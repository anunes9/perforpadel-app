/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class", '[data-mantine-color-scheme="dark"]'],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    corePlugins: { preflight: false },
    theme: {
        extend: {
            colors: {
                primary: "#63b49f",
            },
            fontFamily: {
                russo: "Russo One",
            },
            backgroundImage: {
                "hero-image":
                    "url(https://images.unsplash.com/photo-1661881545067-b15c94c6b7cd?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                // "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
            },
            height: {
                "screen-footer": "calc(100vh - 3.3rem)",
            },
        },
    },
    plugins: [],
}
