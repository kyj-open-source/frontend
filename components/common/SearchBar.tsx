"use client"; // 1. Mark this as a Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // 2. Import the router

// Note: We no longer need props for state management.
export default function SearchBar() {
  // 3. Manage state and router internally
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    // 4. Handle the form submission
    e.preventDefault(); // Prevent the page from reloading
    if (!query.trim()) return; // Don't search if the query is empty

    // Navigate to the search page with the query
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    // 5. Use a <form> element for proper semantics and functionality
    <form
      onSubmit={handleSearch}
      className="w-full max-w-2xl flex items-start gap-3"
    >
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          // Allow submitting with "Enter" but create a new line with "Shift + Enter"
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSearch(e);
          }
        }}
        rows={1}
        className="flex-grow p-4 text-xl resize-none outline-none rounded-md border-2 border-gray-300 focus:theme max-h-48"
        placeholder="Search for jobs, skills, or resources..."
      />

      <button
        type="submit" // 6. Specify the button type as "submit"
        className="px-4 h-[60px] rounded-md flex items-center justify-center bg-theme text-white font-semibold hover:bg-theme-d transition-colors"
      >
        Search
      </button>
    </form>
  );
};