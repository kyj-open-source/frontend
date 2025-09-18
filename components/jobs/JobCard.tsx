'use client';

import { useState } from 'react';
import { Job } from '@/lib/types';
import Card from '../common/Card';
import SkillTag from '../common/SkillTag';

// The component now receives the initial 'isSaved' state from the server
export default function JobCard({ job, isInitiallySaved }: { job: Job; isInitiallySaved: boolean; }) {
	const [isSaved, setIsSaved] = useState(isInitiallySaved);

	const handleSave = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		e.stopPropagation();

		const previous = isSaved;
		setIsSaved(!isSaved);

		const method = !previous ? 'POST' : 'DELETE';
		const url = !previous
			? `/api/jobs/${job.id}/save`
			: `/api/jobs/${job.id}/unsave`;

		try {
			const response = await fetch(url, {
				method: method,
			});

			if (!response.ok) {
				setIsSaved(previous); // revert to previous
				alert('Failed to update save status. Please try again.');
			}
		} catch (error) {
			setIsSaved(previous); // revert to previous
			alert('An error occurred. Please try again.');
		}
	};

	return (
		<Card title={job.title}>
			<div className="relative">
				<div className="text-gray-700">{job.companyName}</div>
				<p className="text-gray-500 text-sm mt-1">{job.location}</p>

				{/* Save Button */}
				<span
					role="button"
					tabIndex={0}
					onClick={handleSave}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							handleSave(e);
						}
					}}
					className="absolute top-0 right-0 p-1 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
					aria-label={isSaved ? 'Unsave job' : 'Save job'}
				>
					<BookmarkIcon filled={isSaved} />
				</span>

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
			focusable={false}
			aria-hidden={true}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
			/>
		</svg>
	);
}