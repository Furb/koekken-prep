import { client } from '@/lib/sanity';

type Recipe = {
  _id: string;
  title: string;
};

export default async function Home() {
  const recipes = await client.fetch<Recipe[]>(`*[_type == "opskrifter"] | order(title asc) {
    _id,
    title
  }`);

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
