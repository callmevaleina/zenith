import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#757575",
        lightGray: "#a7b0ba",
        extraLightGray: "#eef2f6",
        extraExtraLightGray: "#f8fafb",
        darkGray: "#343a3e",
        extraDarkGray: "#343a3f",
        grayTitle: "#505866",
        grayText: "#767f86",
        redPrimary: "#ff545a",
        grayIcon: "50616c",
        blueRestaurant: "#70a9ff",
        greenHotel:"#00c61c",
        yellowDestination:"#ffcc5d",
        purpleRealState:"#bd70ff",
        orangeAutomotive:"#ff7a40",
      },
    },
  },
  plugins: [],
};
export default config;
