"use client";

import { useRouter } from "next/navigation";
import { useId, useRef } from "react";

type SearchFormProps = {
  initialQuery: string;
};

export default function SearchForm({ initialQuery }: SearchFormProps) {
  const router = useRouter();
  const inputId = useId();
  const debounceRef = useRef<number | null>(null);

  const handleChange = (value: string) => {
    const trimmedQuery = value.trim();
    if (debounceRef.current !== null) window.clearTimeout(debounceRef.current);

    debounceRef.current = window.setTimeout(async () => {
      router.replace(
        trimmedQuery.length >= 3
          ? `/?q=${encodeURIComponent(trimmedQuery)}`
          : "/",
        { scroll: false },
      );
    }, 250);
  };

  return (
    <form action="/" method="get" className="relative mb-8 flex gap-2">
      <label htmlFor={inputId} className="sr-only">
        Søg efter opskrift eller ingrediens
      </label>
      <input
        id={inputId}
        name="q"
        type="search"
        defaultValue={initialQuery}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Søg efter opskrift eller ingrediens"
        className="min-w-0 flex-1 rounded-lg border px-4 py-3"
      />
      <button type="submit" className="rounded-lg border px-4 py-3">
        Søg
      </button>
    </form>
  );
}
