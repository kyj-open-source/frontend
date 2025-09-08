import { Resource } from '@/lib/types';
// Assuming your common Card component is at this path
import Card from '../common/Card';

export default function ResourceCard({ resource }: { resource: Resource }) {
	// This component also uses your generic Card.
	// It makes the entire card a clickable link.
	return (
		<a href={resource.url} target="_blank" rel="noopener noreferrer" className="block hover:scale-[1.02] transition-transform">
			<Card title={resource.title}>
				<div className="flex justify-between items-center mt-2">
					<p className="text-indigo-600 text-sm truncate">{resource.url}</p>
					<span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap">
						{resource.type}
					</span>
				</div>
			</Card>
		</a>
	);
}