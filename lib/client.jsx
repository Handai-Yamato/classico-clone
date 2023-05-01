import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: "5wmay4mbnw",
  apiKey: process.env.API_KEY,
});

export { client };
