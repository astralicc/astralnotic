/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#e8e8e8',
          dark: '#121212',
        },
        text: {
          light: '#1a1a1a',
          dark: '#e8e8e8',
        },
        border: {
          light: '#d0d0d0',
          dark: '#404040',
        },
      },
      fontFamily: {
        sans: [
          '"Uncut Sans"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"Departure Mono"',
          'JetBrains Mono',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        pixel: [
          '"Departure Mono"',
          '"Press Start 2P"',
          'Silkscreen',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
