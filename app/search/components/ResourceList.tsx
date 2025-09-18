import { Resource } from '@/lib/types';
import ResourceCard from '@/components/resource/ResourceCard'; // Adjust path if needed

export default function ResourceList({ resources }: { resources: Resource[] }) {
	if (resources.length === 0) {
		return <p>No learning resources found for this search.</p>;
	}

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4 border-b pb-2">Learning Resources 📚</h2>
			<div className="space-y-4">
				{resources.map((resource) => <ResourceCard
					key={resource.id}
					resource={resource}
					isInitiallySaved={resource.isSaved}
				/>)}
			</div>
		</div>
	);
}