import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "o7wephq1",
  dataset: "production",
  apiVersion: "v2022-03-07",
  useCdn: true,
});
