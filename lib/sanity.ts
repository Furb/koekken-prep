import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";
import { client } from "./client";

export type Recipe = {
  _id: string;
  title: string;
};

export const recipesQuery =
  defineQuery(`*[_type == "opskrifter"] | order(title asc) {
  _id,
  title
}`);

export async function getRecipes(): Promise<Recipe[]> {
  const result = await sanityFetch({
    query: recipesQuery,
    params: {},
  });

  return result.data as Recipe[];
}

export async function getRecipesDirect(): Promise<Recipe[]> {
  return client.fetch(recipesQuery);
}
