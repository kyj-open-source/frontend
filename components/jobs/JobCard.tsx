import { Job } from '@/lib/types';
import Card from '../common/Card';
// Assuming your common Card component is at this path

export default function JobCard({ job }: { job: Job }) {
	// This component now uses your generic Card.
	// It passes the job's title as the card title and other details as children.
	return (
		<Card title={job.title}>
			<p className="text-gray-700">{job.companyName}</p>
			<p className="text-gray-500 text-sm mt-1">{job.location}</p>
		</Card>
	);
}