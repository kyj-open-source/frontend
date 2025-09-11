'use client'; // This component now handles user interaction

import { useState } from 'react';
import { Job } from '@/lib/types';
import Card from '../common/Card';
import SkillTag from '../common/SkillTag';

// The component now receives the initial 'isSaved' state from the server
export default function JobCard({ job, isInitiallySaved }: { job: Job; isInitiallySaved: boolean; }) {
	const [isSaved, setIsSaved] = useState(isInitiallySaved);

	const handleSave = async (e: React.MouseEvent) => {
		e.preventDefault(); // Prevent link navigation if the card is wrapped in <a>
		e.stopPropagation(); // Stop the event from bubbling up

		// Optimistic UI update for instant feedback
		setIsSaved(!isSaved);

		const method = !isSaved ? 'POST' : 'DELETE';

		try {
			const response = await fetch(`/api/jobs/${job.id}/save`, {
				method: method,
			});

			if (!response.ok) {
				// If the API call fails, revert the state and alert the user
				setIsSaved(isSaved);
				alert('Failed to update save status. Please try again.');
			}
		} catch (error) {
			// Revert state on network error
			setIsSaved(isSaved);
			alert('An error occurred. Please try again.');
		}
	};

	return (
		<Card title={job.title}>
			<div className="relative">
				<div className="text-gray-700">{job.companyName}</div>
				<p className="text-gray-500 text-sm mt-1">{job.location}</p>

				{/* Save Button */}
				<button
					onClick={handleSave}
					className="absolute top-0 right-0 p-1 rounded-full hover:bg-gray-200 transition-colors"
					aria-label={isSaved ? 'Unsave job' : 'Save job'}
				>
					<BookmarkIcon filled={isSaved} />
				</button>

				{job.skills && job.skills.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-2">
						{job.skills.map((skill) => (
							<SkillTag key={skill.id} skill={skill} />
						))}
					</div>
				)}
			</div>
		</Card>
	);
}

function BookmarkIcon({ filled }: { filled: boolean }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={`h-6 w-6 ${filled ? 'text-indigo-600 fill-current' : 'text-gray-500 fill-none stroke-current'}`}
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
			/>
		</svg>
	);
}