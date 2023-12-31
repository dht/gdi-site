import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

const cwd = path.resolve(process.cwd(), '../../');

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    build: {
        sourcemap: true,
        outDir: 'dist/site',
    },
    plugins: [
        tsconfigPaths({
            loose: true,
        }),
        react(),
    ],
    define: {},
    server: {
        host: true,
        port: 3001,
    },
});
