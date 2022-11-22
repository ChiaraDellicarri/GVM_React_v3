module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  
    "./lib/**/*.{js,jsx}"
  ],
   theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'm-l': '992px', // custom query
      // => @media (min-width: 992px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'small': '576px',
        'medium': '768px',
        'large': '992px',
        'xlarge': '1200px'
      },
      colors: {
        primary: "var(--primary-color, #2563eb)",
        "primary-light": "var(--primary-color-light, #dbeafe)",
        "primary-dark": "var(--primary-color-dark, #1e40af)",
        neutral: "var(--neutral-color, #4b5563)",
        "neutral-light": "var(--neutral-color-light, #9ca3af)",
        "neutral-dark": "var(--neutral-color-dark, #1f2937)",
          "ll-blue": "#00173C",
        "ll-hover-blue": "#001c48",
        "ll-red": "#E52222",
        "ll-light-blue": "#5c6d88",
        "clutter": "#037f78",
        "lightblue": "#eaf3f9",
          "dark": "#242424",
          "light": "#f9f9f9",
      },
      borderRadius: {
        cta: "var(--cta-border-radius, 1rem)",
      },
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        dash: {
          "0%": { transform: "rotate(0deg)", "stroke-dashoffset": 204 },
          "50%": { transform: "rotate(45deg)", "stroke-dashoffset": 52 },
          "100%": { transform: "rotate(360deg)", "stroke-dashoffset": 204 },
        },
      },
    },
  },

  plugins: [],
};
