import { defineConfig } from 'vite';
import injectHtml from 'vite-plugin-html-inject';

export default defineConfig({
    plugins: [
        injectHtml(),
    ],
    root: '.',
    build: {
        outDir: 'dist',
    },
    server: {
        open: true,
    }
});
