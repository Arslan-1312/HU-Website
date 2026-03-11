/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-green': '#15793e',
                'nav-green': '#2e7d32',
                'dark-green': '#0a4f22',
                'light-bg': '#f8f9fa',
                'border-color': '#dee2e6',
                'custom-green': '#297c3b',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
