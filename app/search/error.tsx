'use client'; // Error components must be Client Components

export default function SearchError() {
	return (
		<div className="container mx-auto p-4 md:p-8">
			<div className="text-center p-10 bg-red-50 border border-red-200 rounded-lg">
				<h2 className="text-xl font-semibold text-red-700">Error Fetching Data</h2>
				<p className="text-red-600 mt-2">Could not connect to the server. Please try again later.</p>
			</div>
		</div>
	);
}