/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,jsx, tsx, js, ts}"],
    theme: {
        extend: {
            screens: {
                xd: "1345px",
            },
        },
    },
    plugins: [],
};
