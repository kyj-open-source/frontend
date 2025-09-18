import { Skill } from "@/lib/types";
import { X } from "lucide-react";

interface SkillListProps {
	skills: Skill[];
	onRemove: (id: string) => void;
}

export default function SkillList({ skills, onRemove }: SkillListProps) {
	if (skills.length === 0) {
		return <p className="text-gray-500 mt-4">No skills added yet.</p>;
	}

	return (
		<ul className="flex flex-wrap gap-2 mt-4">
			{skills.map((skill) => (
				<li
					key={skill.id}
					className="flex items-center bg-accent text-white px-3 py-1 rounded-full shadow"
				>
					{skill.name}
					<button
						onClick={() => onRemove(skill.id)}
						className="ml-2 text-sm hover:text-red-300"
					>
						<X size={14} />
					</button>
				</li>
			))}
		</ul>
	);
}
