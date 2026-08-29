import { getRecipes } from "@/lib/sanity";

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <div className="px-4 py-8">
      <h1 className="mb-8">Opskrifter</h1>
      <ul className="space-y-2">
        {recipes.map((recipe) => (
          <li key={recipe._id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}
