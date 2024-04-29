import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-poppins)", "sans-serif"],
    },
    extend: {
      colors: {
        "fundo": "#F1F1F1",
        "fundo2": "#FBFBFB",
        "cinza-claro": "#F6F6F6",
        "cinza": "#DEDEDE",
        "cinza2": "#D9D9D9",
        "cinza-input": "#E8E8E8",
        "azul-principal": "#17232B",
        "azul-titulo": "#20303B",
        "azul-claro": "#2A3E4C",
        "azul-dark": "#111A20",
        "vermelho-principal": "#A02214"
      },
      backgroundImage: {
        'img-hero1': "url('../public/img-hero1.png')",
        'img-hero2': "url('../public/img-hero2.png')",
        'img-hero3': "url('../public/img-hero3.png')",
        'foto-diferenciais': "url('../public/foto-diferenciais.jpg')",
        'fundo-header': "url('../public/img-header.png')",
        'fundo-servico': "url('../public/fundo-serviços.png')",
      },
      fontFamily: {
        mono: ["var(--font-inter)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
