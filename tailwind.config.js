module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background1: "var(--primary-background)",
          backgroundAlpha: "var(--primary-background-alpha)",
          foreground1: "var(--primary-foreground)",
          accent1: "var(--primary-accent)",
          blue1: "var(--primary-blue)",
          lightBlue1: "var(--primary-light-blue)"
        },
        secondary: {
          background1: "var(--secondary-background)",
          foreground1: "var(--secondary-foreground)",
          light1: "var(--secondary-light)",
          beige1: "var(--secondary-beige)",
          pink1: "var(--secondary-pink)",
          purple1: "var(--secondary-purple)",
          orange1: "var(--secondary-orange)"
        },
        text: {
          primary1: "var(--text-primary)",
          secondary1: "var(--text-secondary)",
          muted1: "var(--text-muted)",
          accent1: "var(--text-accent)",
          blue1: "var(--text-blue)",
          white1: "var(--text-white)"
        },
        bg: {
          main1: "var(--bg-main)",
          card1: "var(--bg-card)",
          overlay1: "var(--bg-overlay)",
          overlayLight1: "var(--bg-overlay-light)",
          gray1: "var(--bg-gray)"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};