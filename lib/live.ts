import { defineLive } from "next-sanity/live";
import { client } from "@/lib/client";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: false,
  browserToken: false,
});
