import { defineQuery } from "next-sanity";

export const allRecipesQuery = defineQuery(`
  *[_type == "opskrifter" && (!defined(Aktuel) || Aktuel == "Aktuel")] | order(title asc) {
    _id,
    title,
    "slug": slug.current
  }
`);

export const searchRecipesQuery =
  defineQuery(`*[_type == "opskrifter" && (!defined(Aktuel) || Aktuel == "Aktuel") && (!$q || title match ($q + "*") || ingredienser[].name match ($q + "*"))] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}`);

export const recipeBySlugQuery = defineQuery(`
  *[_type == "opskrifter" && Aktuel == "Aktuel" && slug.current == $slug][0] {
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
