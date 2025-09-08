import { getSearchResults } from '@/lib/data';
import JobList from './components/JobList';
import ResourceList from './components/ResourceList';
import AsyncContent from '@/components/common/AsyncContent';

interface SearchPageProps {
	searchParams: { q?: string; };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const query = searchParams.q || '';

	if (!query) {
		return (
			<div className="container mx-auto p-10 text-center">
				<h2 className="text-xl font-semibold">Please enter a search term to begin.</h2>
			</div>
		);
	}

	const { jobs, resources } = await getSearchResults(query);

	// Define the UI for the empty state
	const NoResultsUI = (
		<div className="p-10 bg-white rounded-lg shadow">
			<h2 className="text-xl font-semibold">No results found.</h2>
			<p className="text-gray-500 mt-2">Try searching for something else!</p>
		</div>
	);

	// Define the UI for the success state
	const SuccessUI = (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<JobList jobs={jobs} />
			<ResourceList resources={resources} />
		</div>
	);

	return (
		<main className="container mx-auto p-4 md:p-8">
			<h1 className="text-3xl font-bold mb-6">
				Search Results for: <span className="text-indigo-600">&quot;{query}&quot;</span>
			</h1>

			<AsyncContent
				data={[...jobs, ...resources]}
				emptyState={NoResultsUI}
			>
				{SuccessUI}
			</AsyncContent>
		</main>
	);
}