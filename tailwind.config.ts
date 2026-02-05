import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#4A2C2C", // Deep burgundy/brown for a warm, premium feel
                    foreground: "#F9F5F1",
                },
                secondary: {
                    DEFAULT: "#8C7B7B", // Warm grey
                    foreground: "#4A4A4A", // Dark Grey for readable subtext
                },
                accent: {
                    DEFAULT: "#D4B483", // Gold/Tan accent
                },
                background: "#F9F5F1", // Off-white cream
                foreground: "#2D2424", // Dark brown/black text
            },
            fontFamily: {
                serif: ["var(--font-serif)", "serif"],
                sans: ["var(--font-sans)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
