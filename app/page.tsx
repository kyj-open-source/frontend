// No 'use client' here. This is a Server Component.
// No 'useState' import.
import SearchBar from "@/components/common/SearchBar";
import "./globals.css"

export default function HomePage() {
  return (
    <section className="flex flex-col flex-grow items-center justify-center p-8 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
        Know Your Job <span className="text-theme">(KYJ)</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Your journey to a new career starts here. Find roles and the resources you need to land them.
      </p>
      <div className="mt-10 w-full flex justify-center">
        <SearchBar />
      </div>
    </section>
  );
}