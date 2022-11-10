//is true if env is dev not prod
const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://yourwebsite.com";
