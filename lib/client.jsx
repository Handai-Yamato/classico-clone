import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "5wmay4mbnw",
  apiKey: process.env.API_KEY,
});
