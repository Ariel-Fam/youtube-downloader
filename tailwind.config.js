// tailwind.config.js
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                'xs': '375px',       // iPhone X and similar
                'sm': '640px',       // Small tablets
                'md': '768px',       // Default medium
                'lg': '1024px',      // Default large
                'xl': '1280px',      // Default extra large
                '2xl': '1536px',     // Desktop HD
                '3xl': '1920px',     // Full HD monitors
                '4k': '2560px',      // 4K screens
                'ultra': '3840px',   // 4K+ or ultrawide
            },
        },
    },
    plugins: [],
};
