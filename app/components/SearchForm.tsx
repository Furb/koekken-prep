"use client";

import { useRouter } from "next/navigation";
import { useId, useRef } from "react";
import SearchIcon from "./SearchIcon";

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
    <form
      action="/"
      method="get"
      role="search"
      className="relative mb-8 flex items-center gap-2 rounded-lg border px-3"
    >
      <label htmlFor={inputId} className="sr-only">
        Søg efter opskrift eller ingrediens
      </label>
      <span aria-hidden="true">
        <SearchIcon />
      </span>
      <input
        id={inputId}
        name="q"
        type="search"
        defaultValue={initialQuery}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Søg efter opskrift eller ingrediens"
        className="min-w-0 flex-1 border-0 px-1 py-3 text-sm outline-none"
      />
    </form>
  );
}
