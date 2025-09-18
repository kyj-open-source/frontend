import { SearchResults } from "@/lib/types";

export async function getSearchResults(query: string): Promise<SearchResults> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const res = await fetch(
    `${apiUrl}/api/search?q=${encodeURIComponent(query)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch search results from the API.");
  }

  return res.json();
}
