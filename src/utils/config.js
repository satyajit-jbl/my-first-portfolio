export const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://my-first-portfolio-backend.vercel.app/api";
    // : "https://my-first-portfolio-backend.vercel.app/api";
