import { Resource } from '@/lib/types';
import Card from '../common/Card';
import SkillTag from '../common/SkillTag';

export default function ResourceCard({ resource }: { resource: Resource }) {
	return (
		<a href={resource.url} target="_blank" rel="noopener noreferrer" className="block hover:scale-[1.02] transition-transform">
			<Card title={resource.title}>
				<div className="flex justify-between items-center mt-2">
					<p className="text-indigo-600 text-sm truncate">{resource.url}</p>
					<span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap">
						{resource.type}
					</span>
				</div>
				{resource.skills && resource.skills.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-2 border-t pt-3">
						{resource.skills.map((skill) => (
							<SkillTag key={skill.id} skill={skill} />
						))}
					</div>
				)}
			</Card>
		</a>
	);
}