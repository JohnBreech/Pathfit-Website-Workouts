import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: 'https://github.com/JohnBreech/Pathfit-Website-Workouts.git',
})