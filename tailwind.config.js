/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        boxShadow: {
          custom: "0 0 24px 0 rgba(8, 23, 53, 0.16)",
        },
        colors: {
          bgGray: "#F5F5F5",
          altGray: "#FAFAFA",
          borderGray: "#D5D7DA",
          primaryBlue: "#1570EF",
          lightBlue: "#B2DDFF",
          altText: "#414651",
          secondaryBlue: "#0049C6",
        },
      },
    },
    plugins: [],
  };