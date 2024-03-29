import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/nombre-de-tu-repositorio/', // Reemplaza 'nombre-de-tu-repositorio' con el nombre real de tu repositorio en GitHub
  plugins: [react()],
  build: {
    outDir: 'docs', // Carpeta de salida para GitHub Pages
  },
});