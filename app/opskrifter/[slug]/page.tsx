import { notFound } from "next/navigation";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/lib/live";

const recipeBySlugQuery = defineQuery(`
  *[_type == "opskrifter" && slug.current == $slug][0] {
    _id,
    title,
    ingredienser[] {
      name,
      amount,
      unit
    }
  }
`);

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await sanityFetch({
    query: recipeBySlugQuery,
    params: { slug },
  });

  const recipe = result.data as
    | {
        _id: string;
        title: string;
        ingredienser?: Array<{ name?: string; amount?: number; unit?: string }>;
      }
    | null;

  if (!recipe) {
    notFound();
  }

  return (
    <div className="px-4 py-8">
      <small className="mb-6">← Oversigt</small>
      <h1 className="mb-8">{recipe.title}</h1>

      <ul className="space-y-4 *:border-b-green *:border-b *:pb-1 mb-8">
        {recipe.ingredienser?.map((ingredient, index) => (
          <li
            key={`${ingredient.name ?? "ingredient"}-${index}`}
            className="flex justify-between"
          >
            <p>{ingredient.name}</p>
            <p>
              {ingredient.amount}
              {ingredient.unit ? ` ${ingredient.unit}` : ""}
            </p>
          </li>
        ))}
      </ul>
      <div className="px-6 py-8 bg-soft rounded-md">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
          consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
          quisque faucibus ex sapien vitae pellentesque.
        </p>
      </div>
    </div>
  );
}
