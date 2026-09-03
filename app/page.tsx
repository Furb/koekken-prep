import Link from "next/link";
import { sanityFetch } from "@/lib/live";
import SearchForm from "@/app/components/SearchForm";
import { allRecipesQuery, searchRecipesQuery } from "@/lib/queries";

type PageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q.trim() : "";

  const { data: recipes } = await sanityFetch({
    query: query ? searchRecipesQuery : allRecipesQuery,
    ...(query ? { params: { q: query } } : {}),
    stega: false,
  });

  return (
    <main className="px-4 py-8">
      <SearchForm initialQuery={query} />

      {query && recipes.length === 0 ? (
        <p>Ingen opskrifter fundet for &quot;{query}&quot;.</p>
      ) : (
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
      )}
    </main>
  );
}
