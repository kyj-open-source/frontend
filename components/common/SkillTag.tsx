import { Skill } from "@/lib/types";

export default function SkillTag({ skill }: { skill: Skill }) {
	return (
		<span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full">
			{skill.name}
		</span>
	);
}