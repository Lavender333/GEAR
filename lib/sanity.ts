import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "YOUR_ID";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion: "2023-10-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
