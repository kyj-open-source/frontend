import { SearchResults } from "@/lib/types";

export async function getSearchResults(query: string): Promise<SearchResults> {
  const API_BASE_URL = "http://localhost:3000";
  const res = await fetch(
    `${API_BASE_URL}/search?q=${encodeURIComponent(query)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch search results from the API.");
  }

  return res.json();
}
