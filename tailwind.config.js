/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "firstBodyGradientCol": "#b5179e",
                "secondBodyGradientCol": "#480ca8",
                "thirdBodyGradientCol": "#3f37c9",
                "headerAndFooterCol": "#07004d",
                "mainCol": "#2d82b7",
            }
        },
    },
    plugins: [],
}
