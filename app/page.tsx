import Link from "next/link";
import { sanityFetch } from "@/lib/live";
import { recipesQuery } from "@/lib/queries";

export default async function Home() {
  const { data: recipes } = await sanityFetch({
    query: recipesQuery,
    stega: false,
  });

  return (
    <div className="px-4 py-8">
      <ul className="space-y-3">
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <Link href={recipe.slug ? `/${recipe.slug}` : "/"}>
              <div className="font-semibol border rounded-lg px-4 py-3">
                {recipe.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
