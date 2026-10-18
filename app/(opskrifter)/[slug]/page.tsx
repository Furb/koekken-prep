import { notFound } from "next/navigation";
import { sanityFetch } from "@/lib/live";
import { recipeBySlugQuery } from "@/lib/queries";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;

  const { data: recipe } = await sanityFetch({
    query: recipeBySlugQuery,
    params: { slug },
    stega: false,
  });

  if (!recipe) notFound();

  return (
    <div className="px-4">
      <div className="mb-8">
        <Link href="/">
          <small>← Tilbage</small>
        </Link>
      </div>

      <div className="flex items-end justify-between mb-20">
        <h2 className="text-dark text-2xl font-semibold">{recipe.title}</h2>
        {recipe.udbytte && (
          <p className="font-semibold text">{recipe.udbytte} L</p>
        )}
      </div>

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
        <p className="whitespace-pre-line">{recipe.metode}</p>
      </div>
    </div>
  );
}
