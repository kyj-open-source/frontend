"use client";

import { Resource } from "@/lib/types";
import { useState } from "react";
import Card from "../common/Card";
import SkillTag from "../common/SkillTag";
import apiClient from "@/utilities/apiClient";


export default function ResourceCard({ resource, isInitiallySaved }: { resource: Resource; isInitiallySaved: boolean }) {
	const [isSaved, setIsSaved] = useState(isInitiallySaved);

	const handleSave = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		e.stopPropagation();

		const previous = isSaved;
		setIsSaved(!isSaved);

		const method = !previous ? "post" : "delete";
		const url = !previous
			? `/resources/${resource.id}/save`
			: `/resources/${resource.id}/unsave`;

		try {
			const response = await apiClient({
				url,
				method,
			});

			if (response.status < 200 || response.status >= 300) {
				setIsSaved(previous); // revert to previous
				alert("Failed to update save status. Please try again.");
			}
		} catch (error) {
			setIsSaved(previous); // revert to previous
			alert("An error occurred. Please try again.");
		}
	};

	return (
		<a href={resource.url} target="_blank" rel="noopener noreferrer" className="block hover:scale-[1.02] transition-transform">
			<Card title={resource.title}>
				<div className="relative flex items-center mt-2">
					<p className="text-indigo-600 text-sm truncate">{resource.url}</p>
					<span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap ml-2">
						{resource.type}
					</span>

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
						aria-label={isSaved ? 'Unsave resource' : 'Save resource'}
					>
						<BookmarkIcon filled={isSaved} />
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