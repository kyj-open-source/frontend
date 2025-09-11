import { Job } from '@/lib/types';
import JobCard from '@/components/jobs/JobCard'; // Adjust path if needed

export default function JobList({ jobs }: { jobs: Job[] }) {
	if (jobs.length === 0) {
		return <p>No job opportunities found for this search.</p>;
	}

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4 border-b pb-2">Careers ✨</h2>
			<div className="space-y-4">
				{jobs.map((job) => <JobCard
					key={job.id}
					job={job}
					isInitiallySaved={job.isSaved}
				/>)}
			</div>
		</div>
	);
}