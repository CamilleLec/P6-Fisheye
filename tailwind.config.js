/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./scripts/index.js"],
    theme: {
        extend: {
            height: {
                730: "730px",
            },
            margin: {
                10: "10%",
            },
            colors: {
                grey: "#EDEDED",
            },
        },
    },
    plugins: [],
};
