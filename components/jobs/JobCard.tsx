import { Job } from '@/lib/types';
import Card from '../common/Card';
import SkillTag from '../common/SkillTag';

export default function JobCard({ job }: { job: Job }) {
	return (
		<Card title={job.title}>
			<div className="text-gray-700">{job.companyName}</div>
			<p className="text-gray-500 text-sm mt-1">{job.location}</p>
			{job.skills && job.skills.length > 0 && (
				<div className="mt-4 flex flex-wrap gap-2">
					{job.skills.map((skill) => (
						<SkillTag key={skill.id} skill={skill} />
					))}
				</div>
			)}
		</Card>
	);
}