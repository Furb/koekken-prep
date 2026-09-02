import { defineQuery } from "next-sanity";

export const recipesQuery =
  defineQuery(`*[_type == "opskrifter"] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}`);

export const recipeBySlugQuery = defineQuery(`
  *[_type == "opskrifter" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    udbytte,
    metode,
    ingredienser[] {
      name,
      amount,
      unit
    }
  }
`);
