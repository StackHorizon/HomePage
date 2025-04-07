// @ts-check
import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
    site: 'https://stackhorizon.github.io',
    base: '/HomePage',
    vite: {
        plugins: [tailwindcss()],
    },
});